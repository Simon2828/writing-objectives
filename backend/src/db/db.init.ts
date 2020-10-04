const credentials = require('../../credentials.json');
import { learningObjectivesSeed } from './seedData';
// import {learningObjectivesSeedConfig} from './seedData';

const { Client } = require('pg');
const { connectionString } = credentials.postgres;
const client = new Client({ connectionString });

const createScript = `
CREATE TABLE IF NOT EXISTS students (
  student_id INT GENERATED ALWAYS AS IDENTITY,
  student_name VARCHAR(255) NOT NULL,
  PRIMARY KEY(student_id)
);

CREATE TABLE IF NOT EXISTS learning_objectives (
  learning_objective_id varchar(21) NOT NULL,
  title varchar(200),
  achieved boolean,
  teacher_id INT,
  student_id INT,
  FOREIGN KEY(teacher_id)
  REFERENCES teachers(teacher_id),
  FOREIGN KEY(student_id)
  REFERENCES students(student_id)
  );

CREATE TABLE IF NOT EXISTS teachers (
  teacher_id INT GENERATED ALWAYS AS IDENTITY,
  teacher_name VARCHAR(255) NOT NULL,
  PRIMARY KEY(teacher_id)
);
CREATE TABLE IF NOT EXISTS steps_to_success (
  step_to_success_id varchar(21) NOT NULL,
  step_to_success varchar(200),
  achieved boolean,
  teacher_id INT,
  student_id INT,
  CONSTRAINT fk_teacher
    FOREIGN KEY(teacher_id)
      REFERENCES teachers(teacher_id),
  CONSTRAINT fk_student
    FOREIGN KEY(student_id)
      REFERENCES students(student_id)
);

CREATE TABLE IF NOT EXISTS learning_steps (
  learning_objective_id varchar(21),
  step_to_success_id varchar(21)
);
  `

  const getTeachersCount = async (client) => {
    const { rows } = await client.query(`SELECT COUNT(*) FROM teachers`);
    return Number(rows[0].count);
  };

  const seedTeachers = async (client) => {
    const sql = `
    INSERT INTO teachers(
      teacher_name
    ) VALUES ($1)
    `
    await client.query(sql, [
      'Simon'
    ]);
    await client.query(sql, [
      'Nik'
    ])
    await client.query(sql, [
      'Andrew'
    ])
    await client.query(sql, [
      'Jason'
    ])
    await client.query(sql, [
      'Rachel'
    ])
  }

  const seedStudents = async (client) => {
    const sql = `
    INSERT INTO students(
      student_name
    ) VALUES ($1)
    `
    await client.query(sql, [
      'Tanner'
    ]);
    await client.query(sql, [
      'Rahmel'
    ])
    await client.query(sql, [
      'Blaney'
    ])
    await client.query(sql, [
      'Luong'
    ])
    await client.query(sql, [
      'Averill'
    ])
  }



  // pass in loId, title, achieved for each LO to client.query
  // need to restructure what i am importing...
// const getSeedData = (data: learningObjectivesSeedConfig[]) => {

const seedLearningObjectives = async (client) => {
  const sql = `
  INSERT INTO learning_objectives(
    learning_objective_id,
    title,
    achieved,
    teacher_id,
    student_id,
  ) VALUES ($1, $2, $3, $4, $5)
  `
  await Promise.all(learningObjectivesSeed.map(async (learningObjective,i) => {
          await client.query(sql, [
            learningObjective.id,
            learningObjective.title,
            learningObjective.achieved,
            i
          ]);
    }
  ))
}

  client.connect().then(async () => {
    try {
      console.log('creating database schema')
      await client.query(createScript);
      // const teachersCount = await getTeachersCount(client);
      // if (teachersCount === 0) {
        console.log('seeding learning objectives');
        await seedStudents(client);
      // }
    // }
    }
    catch(err) {
      console.log('Error: could not initialise database');
      console.log(err.message);
    } finally {
      client.end();
    }
  });


  // const seedLearningObjectives = async (client: Client) => {
  //   const sql = `
  //   INSERT INTO learning_objectives(
  //     learning_objective_id,
  //     title,
  //     achieved
  //   ) VALUES ($1, $2, $3)
  //   `


  // getSeedData(learningObjectivesSeed);

  // pass each array into client.query

  // }