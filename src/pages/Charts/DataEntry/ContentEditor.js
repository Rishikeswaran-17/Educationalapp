import React, { useState, useRef, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, Button, CircularProgress, Fab, Menu, MenuItem, Modal, TextField } from '@mui/material';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import './ContentEditor.css';

const ContentEditor = () => {
  const { page } = useParams();
  const pageNumber = parseInt(page, 10);
  const [anchorEl, setAnchorEl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [courseId, setCourseId] = useState('');
  const [description, setDescription] = useState('');
  const [chapterid, setChapterid] = useState('');
  const [courseContent, setCourseContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split('/').pop();
  const coursename = decodeURIComponent(encodedCoursename);
  const [paginationCount, setPaginationCount] = useState(12);
  const [viewedStatus, setViewedStatus] = useState({});

  const handleAddPagination = () => {
    setPaginationCount((prevCount) => prevCount + 1);
  };

  fileInputRef.current = {
    folder: useRef(null),
    file: useRef(null),
    video: useRef(null),
    docs: useRef(null),
  };

  useEffect(() => {
    const storedFiles = sessionStorage.getItem('uploadedFiles');
    if (storedFiles) {
      setUploadedFiles(JSON.parse(storedFiles));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  const predefinedPath = 'D:\\edureka_clone\\edureka\\ContentsProvider';

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const videoFiles = files.filter((file) => file.type.includes('video/'));
    const documentFiles = files.filter((file) => {
      const fileType = file.type.toLowerCase();
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const allowedExtensions = ['doc', 'docx', 'pdf', 'ppt', 'pptx', 'xlsx', 'xls', 'txt', 'csv', 'tsv', 'csv2'];
      return fileType.startsWith('application/') && allowedExtensions.includes(fileExtension);
    });
    const folderFiles = files.filter((file) => file.webkitRelativePath.includes('/'));
    const fileUploads = folderFiles.map((file) => {
      const filePathParts = file.webkitRelativePath.split('/');
      const fileName = filePathParts[filePathParts.length - 1];
      const fileExtension = fileName.split('.').pop();
      const filePath = `${predefinedPath}\\${fileName}`;
      console.log('File path:', filePath);
      return {
        file,
        fileName,
        fileExtension,
        filePath,
      };
    });
    setSelectedFiles([...videoFiles, ...documentFiles, ...folderFiles, ...fileUploads]);
    setUploadedFiles([...videoFiles.map((file) => file.name), ...documentFiles.map((file) => file.name), ...folderFiles.map((file) => file.name), ...fileUploads.map((file) => file.name)]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      return;
    }
    setUploading(true);
    setProgress(0);
    const totalFiles = selectedFiles.length;
    let uploadedFilesCount = 0;

    const updateProgress = () => {
      const percentage = (uploadedFilesCount / totalFiles) * 100;
      setProgress(percentage);
      if (uploadedFilesCount === totalFiles) {
        setUploading(false);
      }
    };

    selectedFiles.forEach((file) => {
      setTimeout(() => {
        // eslint-disable-next-line no-plusplus
        uploadedFilesCount++;
        updateProgress();
      }, 1000);
    });

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });
    formData.append('courseId', courseId);
    formData.append('description', description);
    formData.append('chapterid', chapterid);
    formData.append('predefinedPath', predefinedPath);

    console.log('courseId:', courseId);
    console.log('chapterid:', chapterid);
    console.log('description:', description);
    console.log('fileName:', selectedFiles[0].name);
    console.log('predefinedPath:', predefinedPath);

    fetch('/course-content', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Upload failed');
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setSelectedFiles([]);
  };

  const handleAddIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = () => {
    fileInputRef.current.click();
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetchCourseContent();
  }, []);

  const fetchCourseContent = async () => {
    try {
      const response = await fetch('/get-courseContent');
      const data = await response.json();
      console.log('datacoursecontent =', data);
      setCourseContent(data.recordset);
      console.log('datacoursecontent =', data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const isVideoViewed = sessionStorage.getItem('videoViewed') === 'true';

  return (
    <div className="card cardelementaddeditdelete">
      <TextField
        className="Textfield1"
        required
        id="outlined-required"
        label="CourseID Required"
        defaultValue=""
        size="small"
        onChange={(e) => setCourseId(e.target.value)}
      />
      <br />
      <TextField
        className="Textfield1"
        style={{ marginTop: '10px' }}
        required
        id="outlined-required"
        label="Chapter Number Required"
        defaultValue=""
        size="small"
        onChange={(e) => setChapterid(e.target.value)}
      />
      <br />
      <TextField
        className="Textfield1"
        style={{ marginTop: '10px' }}
        required
        id="outlined-required"
        label="Description Required"
        defaultValue=""
        size="small"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Box sx={{ '& > :not(style)': { m: 3 } }}>
        <Fab color="primary" aria-label="add" onClick={handleAddIconClick}>
          <AddIcon />
        </Fab>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} keepMounted>
          <MenuItem>
            <label htmlFor="folder-upload-input">
              <input
                type="file"
                id="folder-upload-input"
                ref={fileInputRef.current.folder}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                directory=""
                webkitdirectory=""
                multiple
              />
              <FolderCopyOutlinedIcon sx={{ marginRight: 1 }} />
              <em>Folder upload</em>
            </label>
          </MenuItem>
          <MenuItem>
            <label htmlFor="file-upload-input">
              <input
                type="file"
                id="file-upload-input"
                ref={fileInputRef.current.file}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                multiple
                name="file"
              />
              <AddIcon sx={{ marginRight: 1 }} />
              <em>File upload</em>
            </label>
          </MenuItem>
          <MenuItem>
            <label htmlFor="video-upload-input">
              <input
                type="file"
                id="video-upload-input"
                ref={fileInputRef.current.video}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept=".mkv,.mp4,.webm"
                name="file"
              />
              <PlayCircleFilledWhiteOutlinedIcon sx={{ marginRight: 1 }} />
              <em>Video upload</em>
            </label>
          </MenuItem>
          <MenuItem>
            <label htmlFor="docs-upload-input">
              <input
                type="file"
                id="docs-upload-input"
                ref={fileInputRef.current.docs}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept=".doc,.docx,.pdf,.ppt,.pptx,.xlsx,.xls,.txt,.csv,.tsv,.csv2"
                multiple
                name="file"
              />
              <LibraryBooksOutlinedIcon sx={{ marginRight: 1 }} />
              <em>Docs upload</em>
            </label>
          </MenuItem>
        </Menu>
        <Fab color="secondary" aria-label="session" onClick={handleAddPagination}>
          <AddIcon />
        </Fab>
        <Button className="SubmitButton" variant="contained" size="large" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      <Modal
        open={uploading}
        aria-labelledby="upload-modal-title"
        aria-describedby="upload-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <CircularProgress variant="determinate" value={progress} />
          <Box sx={{ mt: 2 }}>
            <p id="upload-modal-description">Uploading... {progress.toFixed(0)}%</p>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ContentEditor;
