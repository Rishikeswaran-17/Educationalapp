const sql = require('mssql');
const config = require('./dbConfig');

const getUserByEmail = async (email) => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('Email', sql.NVarChar(255), email)
      .query("SELECT * FROM AdminandUserLogin WHERE Email = @Email");

    return result.recordset[0];
  } catch (error) {
    //console.log(error);
    throw new Error('Failed to fetch user by email');
  }
};

const registerUser = async (email, passwordHash) => {
  try {
    //console.log('Received email in dbOperation:', email);
    //console.log('Received passwordHash in dbOperation:', passwordHash);
    let pool = await sql.connect(config);
    await pool
      .request()
      .input('Email', sql.NVarChar(255), email)
      .input('PasswordHash', sql.NVarChar(64), passwordHash)
      .execute('InsertAdminandUserLogin');
  } catch (error) {
    //console.log(error);
    throw new Error('Failed to register user');
  }
};

const loginUser = async (email, passwordHash) => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("Email", sql.NVarChar(255), email)
      .input("PasswordHash", sql.NVarChar(64), passwordHash)
      .query("SELECT COUNT(*) AS UserCount FROM AdminandUserLogin WHERE Email = @Email AND PasswordHash = @PasswordHash");
    const userCount = result.recordset[0].UserCount;
    return userCount === 1; // Return true if user exists, false otherwise
  } catch (error) {
    //console.log(error);

  }
};

const getlivecourses = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM LiveCourses");
    //console.log("livecourses = ", result);
    return result;
  } catch (error) {
    //console.log(error);
    throw new Error('Failed to get livecourses coursename');
  }
};

const getselfpacedcourses = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM SelfPacedCourse");
    //console.log("selfpacedcourses = ", result);
    return result;
  } catch (error) {
    //console.log(error);
    throw new Error('Failed to get SelfPacedCourse coursename');
  }
};

const getrecommendedcourses = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM RecommendedCourse");
    //console.log("selfpacedcourses = ", result);
    return result;
  } catch (error) {
    //console.log(error);
    throw new Error('Failed to get RecommendedCourse coursename');
  }
};

const getMainMenu = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM mainmenus");
    return result;
  } catch (error) {
    //console.log(error);
    throw new Error('Failed to get Main Menu');
  }
};

const getSubCoursefees = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM Subcoursefees");
    return result;
  } catch (error) {
    //console.log(error);
    throw new Error('Failed to get subcoursefees');
  }
};

const getSubCourseinfo = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM SubcourseInformation");
    return result;
  } catch (error) {
    //console.log(error);
    throw new Error('Failed to get subcourseinfo');
  }
};

const getMasterCourse = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM MasterCourse");
    return result;
  } catch (error) {
    //console.log(error);
    throw new Error('Failed to get master course');
  }
};


const GetSubcourses = async () => {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .query(
        `SELECT sc.subcourseid, sc.subcoursename, sc.image, sc.enrolledcustomers, sc.sessionmodecategory, sc.classmodecategory,
                sc.batchstartdate, sc.syllabus, sc.coursecompletionrate, sc.category, cs.EmployeeID, cs.Name, cs.Session,
                cs.TotalLearners, cs.ClassTimingsfrom, cs.ClassTimingsto, cs.DateRangeFrom, cs.DateRangeTo
        FROM Subcourse sc
        FULL OUTER JOIN CourseSchedule cs ON sc.subcourseid = cs.subcourseid`
      );
    return result.recordset;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get Subcourses');
  }
};

const GetSubcoursestable = async () => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM Subcourse');
    return result.recordset;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get Subcourses');
  }
};

const GetTrainers = async () => {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .query(
        `SELECT cs.subcourseid, cs.subcoursename, cs.EmployeeID, cs.Name AS CourseScheduleName, cs.Session, cs.TotalLearners,
        cs.ClassTimingsfrom, cs.ClassTimingsto, cs.DateRangeFrom, cs.DateRangeTo, t.Name AS TrainerName, t.Designation,
        t.Courses, t.HiredDate, t.ReportsTo, t.Status, t.PhoneNumber, t.Location, t.image, t.Payslip, t.Monthlysalary
   FROM CourseSchedule cs
   FULL OUTER JOIN Trainer t ON cs.Name = t.Name`
      );
    return result.recordset;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get Trainers');
  }
};

const GetTrainerstable = async () => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM Trainer');
    return result.recordset;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get Trainer');
  }
};

const GetLearners = async () => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM Learners');
    return result.recordset;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get Learners');
  }
};

const Insertorupdatecourseschedule = async (
  subcourseName,
  employeeID,
  session, // Update parameter name to session
  totalLearners,
  classTimingsFrom,
  classTimingsTo,
  dateRangefrom,
  dateRangeto
) => {
  console.log('dbOperation - InsertOrUpdateCourseSchedule function called');
  try {
    console.log('InsertOrUpdateCourseSchedule:');
    console.log('subcourseName:', subcourseName);
    console.log('employeeID:', employeeID);
    console.log('session:', session); // Update parameter name to session
    console.log('totalLearners:', totalLearners);
    console.log('classTimingsFrom:', classTimingsFrom);
    console.log('classTimingsTo:', classTimingsTo);
    console.log('dateRangefrom:', dateRangefrom);
    console.log('dateRangeto:', dateRangeto);

    let pool = await sql.connect(config);
    await pool
      .request()
      .input('subcoursename', sql.VarChar(sql.MAX), subcourseName)
      .input('EmployeeID', sql.INT, employeeID)
      .input('Session', sql.INT, session) // Update parameter name to session
      .input('TotalLearners', sql.INT, totalLearners)
      .input('ClassTimingsfrom', sql.VarChar(sql.MAX), classTimingsFrom)
      .input('ClassTimingsto', sql.VarChar(sql.MAX), classTimingsTo)
      .input('DateRangeFrom', sql.VarChar(sql.MAX), dateRangefrom)
      .input('DateRangeTo', sql.VarChar(sql.MAX), dateRangeto)
      .execute('InsertOrUpdateCourseSchedule');

    console.log('InsertOrUpdateCourseSchedule inserted successfully');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to save InsertOrUpdateCourseSchedule');
  }
};
const saveSubcourseinformation = async (
  mainmenuid,
  subcourseid,
  subcoursename,
  enrolledcustomers,
  videolink,
  coursedescription,
  batchstartdate,
  monthdate,
  googlereviews,
  trustpilotreviews,
  Gtworeviews,
  sitejabberreviews,
  batchdays,
  batchTiming,
  subcoursefees,
  subcoursediscount,
  subcourseemimonth,
  syllabusid,
  syllabusheading,
  topics,
  handson,
  skillsyouwilllearn,
  shortheading,
  nooftopics,
  category
) => {
  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("mainmenuid", sql.INT, mainmenuid)
      .input("subcourseid", sql.INT, subcourseid)
      .input("subcoursename", sql.VARCHAR(256), subcoursename)
      .input("enrolledcustomers", sql.INT, enrolledcustomers)
      .input("videolink", sql.VARCHAR(sql.MAX), videolink)
      .input("coursedescription", sql.VARCHAR(sql.MAX), coursedescription)
      .input("batchstartdate", sql.DATETIME, batchstartdate)
      .input("googlereviews", sql.FLOAT, googlereviews)
      .input("trustpilotreviews", sql.FLOAT, trustpilotreviews)
      .input("Gtworeviews", sql.FLOAT, Gtworeviews)
      .input("sitejabberreviews", sql.FLOAT, sitejabberreviews)
      .input("category", sql.CHAR(3), category)
      .execute("InsertSubcourseInformation");
    await pool
      .request()
      .input("mainmenuid", sql.INT, mainmenuid)
      .input("subcourseid", sql.INT, subcourseid)
      .input("subcoursename", sql.VARCHAR(256), subcoursename)
      .input("monthdate", sql.VARCHAR(256), monthdate)
      .input("batchdays", sql.VARCHAR(256), batchdays)
      .input("batchTiming", sql.VARCHAR(256), batchTiming)
      .input("subcoursefees", sql.INT, subcoursefees)
      .input("subcoursediscount", sql.INT, subcoursediscount)
      .input("subcourseemimonth", sql.INT, subcourseemimonth)
      .execute("InsertSubcourseFees");
    await pool
      .request()
      .input("mainmenuid", sql.INT, mainmenuid)
      .input("subcourseid", sql.INT, subcourseid)
      .input("syllabusid", sql.INT, syllabusid)
      .input("subcoursename", sql.VARCHAR(255), subcoursename)
      .input("syllabusheading", sql.VARCHAR(255), syllabusheading)
      .input("topics", sql.VARCHAR(sql.MAX), topics)
      .input("handson", sql.VARCHAR(sql.MAX), handson)
      .input("skillsyouwilllearn", sql.VARCHAR(sql.MAX), skillsyouwilllearn)
      .input("shortheading", sql.VARCHAR(sql.MAX), shortheading)
      .input("nooftopics", sql.INT, nooftopics)
      .execute("InsertSubcourseSyllabus");
    console.log("Subcourse information inserted successfully");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to save Subcourse information");
  }
};

const savemainmenucourse = async (
  mainmenuid,
  mainmenuname,
  category,
  tagheading,
  tagtext,
  status
) => {
  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("mainmenuid", sql.INT, mainmenuid)
      .input("mainmenuname", sql.VARCHAR(256), mainmenuname)
      .input("category", sql.CHAR(3), category)
      .input("tagheading", sql.VARCHAR(sql.MAX), tagheading)
      .input("tagtext", sql.VARCHAR(sql.MAX), tagtext)
      .input("status", sql.VARCHAR(20), status)
      .execute("InsertMainMenu");
    //console.log("Main Menu Inserted successfully");
  } catch (error) {
    //console.log(error);
    throw new Error("Failed to save mainmenu");
  }
};

const savesubcourse = async (
  mainmenuid,
  subcourseid,
  subcoursename,
  image,
  enrolledcustomers,
  sessionmodecategory,
  classmodecategory,
  batchstartdate,
  syllabus,
  coursecompletionrate,
  category,
  trainer,
  courseamount,
  status
) => {
  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("mainmenuid", sql.INT, mainmenuid)
      .input("subcourseid", sql.INT, subcourseid)
      .input("subcoursename", sql.VARCHAR(256), subcoursename)
      .input("image", sql.VARCHAR(sql.MAX), image)
      .input("enrolledcustomers", sql.VARCHAR(256), enrolledcustomers)
      .input("sessionmodecategory", sql.VARCHAR(256), sessionmodecategory)
      .input("classmodecategory", sql.VARCHAR(256), classmodecategory)
      .input("batchstartdate", sql.DateTime, batchstartdate)
      .input("syllabus", sql.VARCHAR(sql.MAX), syllabus)
      .input("coursecompletionrate", sql.INT, coursecompletionrate)
      .input("category", sql.CHAR(3), category)
      .input("Trainer", sql.VARCHAR(256), trainer)
      .input("Courseamount", sql.INT, courseamount)
      .input("Status", sql.VARCHAR(256), status)
      .execute("InsertSubcourse");
    //console.log("subcourse Inserted successfully");
  } catch (error) {
    //console.log(error);
    throw new Error("Failed to save subcourse");
  }
}

const savemastercourse = async (
  mainmenuid,
  mastercourseid,
  mastercoursename,
  Reviews,
  numberofcourses,
  coursehours,
  numberoflearners,
  minicoursesyllabus,
  category,
) => {
  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("mainmenuid", sql.INT, mainmenuid)
      .input("mastercourseid", sql.INT, mastercourseid)
      .input("mastercoursename", sql.VARCHAR(255), mastercoursename)
      .input("reviews", sql.VARCHAR(255), Reviews)
      .input("numberofcourses", sql.INT, numberofcourses)
      .input("coursehours", sql.INT, coursehours)
      .input("numberoflearners", sql.INT, numberoflearners)
      .input("minicoursesyllabus", sql.VARCHAR(sql.MAX), minicoursesyllabus)
      .input("category", sql.CHAR(3), category)
      .execute("InsertMasterCourse");
    console.log("MasterCourse Inserted successfully");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to save MasterCourse");
  }
}

const Insertupdatetrainer = async ( employeeID, name, designation, courses, hiredDate, reportsTo, status, phoneNumber, location, image, payslip, monthlysalary) => {
  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("EmployeeID", sql.INT, employeeID)
      .input("Name", sql.VARCHAR(256), name)
      .input("Designation", sql.VARCHAR(256), designation)
      .input("Courses", sql.VARCHAR(sql.MAX), courses)
      .input("HiredDate", sql.VARCHAR(256), hiredDate)
      .input("ReportsTo", sql.VARCHAR(256), reportsTo)
      .input("Status", sql.VARCHAR(256), status)
      .input("PhoneNumber", sql.VARCHAR(256), phoneNumber)
      .input("Location", sql.VARCHAR(256), location)
      .input("Image", sql.VARCHAR(256), image)
      .input("Payslip", sql.INT, payslip)
      .input("Monthlysalary", sql.INT, monthlysalary)
      .execute("InsertandUpdateTrainer");
    //console.log("InsertandUpdateTrainer Inserted successfully");
  } catch (error) {
    //console.log(error);
    throw new Error("Failed to save InsertandUpdateTrainer");
  }
}
const InsertupdateLearner = async (LearnerID,
  Name,
  Age,
  CoursesEnrolled,
  Batch,
  BatchTimings,
  classmodeCategory,
  sessionmodeCategory,
  Grade,
  Trainer,
  Progress,
  Payment,
  PhoneNumber,
  Email) => {
  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("LearnerID",sql.INT,LearnerID)
      .input("Name",sql.VARCHAR(256),Name)
      .input("Age",sql.INT,Age)
      .input("CoursesEnrolled",sql.VARCHAR(sql.MAX),CoursesEnrolled)
      .input("Batch",sql.VARCHAR(256),Batch)
      .input("BatchTimings",sql.VARCHAR(256),BatchTimings)
      .input("classmodeCategory",sql.VARCHAR(256),classmodeCategory)
      .input("sessionmodeCategory",sql.VARCHAR(256),sessionmodeCategory)
      .input("Grade",sql.VARCHAR(10),Grade)
      .input("Trainer",sql.VARCHAR(256),Trainer)
      .input("Progress",sql.INT,Progress)
      .input("Payment",sql.VARCHAR(256),Payment)
      .input("PhoneNumber",sql.VARCHAR(256),PhoneNumber)
      .input("Email",sql.VARCHAR(256),Email)
      .execute("InsertAndUpdateLearner");
    console.log("InsertandUpdateLearner Inserted successfully");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to save InsertandUpdateLearner");
  }
}

const courseContent = async (courseId, fileName, filePath, description, chapterid) => {
  console.log('dbOperation - courseContent function called');
  try {
    console.log('Inserting course content:');
    console.log('Course ID:', courseId);
    console.log('File Name:', fileName);
    console.log('File Path:', filePath);
    console.log('Description:', description);

    let pool = await sql.connect(config);
    await pool
      .request()
      .input('courseid', sql.Int, courseId)
      .input('FileName', sql.VarChar(sql.MAX), fileName)
      .input('FilePath', sql.VarChar(sql.MAX), filePath)
      .input('Description', sql.VarChar(sql.MAX), description)
      .input('ChapterID',sql.VarChar(255),chapterid)
      .execute('InsertCoursesContent');

    console.log('CoursesContent inserted successfully');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to save CoursesContent');
  }
};


const getcourseContent = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT * FROM CoursesContent");
      console.log("CoursesContent db = ",result);
    return result; // Return the recordset instead of the result object
   
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get livecourses coursename');
  }
};
module.exports = {
  sql,
  GetSubcourses,
  GetTrainerstable,
  GetTrainers,
  GetLearners,
  Insertorupdatecourseschedule,
  GetSubcoursestable,
  saveSubcourseinformation,
  getUserByEmail,
  registerUser,
  loginUser,
  getlivecourses,
  getselfpacedcourses,
  getrecommendedcourses,
  getMainMenu,
  getSubCoursefees,
  getSubCourseinfo,
  getMasterCourse,
  savemainmenucourse,
  savesubcourse,
  savemastercourse,
  Insertupdatetrainer,
  InsertupdateLearner,
  courseContent,
  getcourseContent,
};

