// import * as storage from './storage/students_inLocal';
import * as storage from './storage/students_inMemory';
import { Student } from '../interfaces/student';

export const getStudents = async () => {
  try {
    const response = await storage.readStudents();
    return response;
  } catch (error) {
    console.log(`there was an error: ${error}`);  
  }
}

export const getStudent = async (id: number) => {
  try {
    const response = await storage.readStudent(id);
    return response;
  } catch (error) {
    console.log(`there was an error: ${error}`);  
  }
}

export const createStudent = async (student: Student) => {
  try {
    console.log('service creating')
    const test = await storage.createStudent(student);
    return test;
  } catch (error) {
    console.log(`there was an error: ${error}`);  
  }
}

export const updateStudent = async (student: Student) => {
  try {
    await storage.updateStudent(student);
  } catch (error) {
    console.log(`there was an error: ${error}`);  
  }
}

export const deleteStudent  = async (id: number) => {
  try {
    await storage.deleteStudent(id);  
  } catch (error) {
    console.log(`there was an error: ${error}`);  
  }
}