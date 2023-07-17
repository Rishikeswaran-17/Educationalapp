const express = require('express');
const dbOperation = require('./src/dbFiles/dbOperation');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const multer = require('multer');
const upload = multer(); // Create a multer instance
const app = express();
// Use multer middleware to parse multipart/form-data
app.use(upload.none());


app.use(cors());
app.use(express.json()); // Add this line to parse JSON in the request body

app.get('/', (req, res) => {
  res.send('Hello, this is the root URL!');
});

app.get('/Subcourse', async (req, res) => {
  try {
    const Subcourses = await dbOperation.GetSubcourses();
    res.json(Subcourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Subcourses' });
  }
});

app.get('/trainers', async (req, res) => {
  try {
    const Trainers = await dbOperation.GetTrainers();
    res.json(Trainers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Trainers' });
  }
});

app.get('/learners', async (req, res) => {
  try {
    const Learners = await dbOperation.GetLearners();
    res.json(Learners);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Learners' });
  }
});

app.post('/insertorupdatecourseschedule', async (req, res) => {
  const { subcourseName, employeeID, count, totalLearners, classTimingsFrom, classTimingsTo, dateRangefrom, dateRangeto } = req.body;
  try {
    console.log("Received Data:", req.body);
    
    // Log the individual values to the console
    console.log("subcourseName:", subcourseName);
    console.log("employeeID:", employeeID);
    console.log("count:", count);
    console.log("totalLearners:", totalLearners);
    console.log('classTimingsFrom:', classTimingsFrom);
    console.log('classTimingsTo:', classTimingsTo);
    console.log('dateRangefrom:', dateRangefrom);
    console.log('dateRangeto:', dateRangeto);

    await dbOperation.Insertorupdatecourseschedule(subcourseName, employeeID, count, totalLearners, classTimingsFrom, classTimingsTo, dateRangefrom, dateRangeto);
    res.status(200).json({ message: 'Insertorupdatecourseschedule saved successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save Insertorupdatecourseschedule' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
