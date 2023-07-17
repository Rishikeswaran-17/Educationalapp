const sql = require('mssql');
const config = require('./dbConfig');

const GetSubcourses = async () => {
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

const Insertorupdatecourseschedule = async ( subcourseName, employeeID, count, totalLearners, classTimingsFrom, classTimingsTo, dateRangefrom, dateRangeto) => {
  console.log('dbOperation - InsertOrUpdateCourseSchedule function called');
  try {
    console.log('InsertOrUpdateCourseSchedule:');
    console.log('subcourseName:', subcourseName);
    console.log('employeeID:', employeeID);
    console.log('session:', count);
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
      .input('Session', sql.INT, count)
      .input('TotalLearners', sql.INT, totalLearners)
      .input('ClassTimingsfrom',sql.VarChar(sql.MAX),classTimingsFrom)
      .input('ClassTimingsto',sql.VarChar(sql.MAX),classTimingsTo)
      .input('DateRangeFrom',sql.VarChar(sql.MAX),dateRangefrom)
      .input('DateRangeTo',sql.VarChar(sql.MAX),dateRangeto)
      .execute('InsertOrUpdateCourseSchedule');
      
    console.log('InsertOrUpdateCourseSchedule inserted successfully');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to save InsertOrUpdateCourseSchedule');
  }
};
module.exports = {
  sql,
  GetSubcourses,
  GetTrainers,
  GetLearners,
  Insertorupdatecourseschedule,
};
