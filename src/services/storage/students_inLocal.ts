import { Student } from '../../interfaces/student';

let idCounter = Number(localStorage.getItem('idCounter')) || 0;

// seeds students with data
const students: Student[] = JSON.parse(localStorage.getItem('students') || '[]');

// CRUD of students

export function readStudents(): Promise<Student[]> {
  return Promise.resolve(students);
}

export function readStudent(id: number): Promise<Student | undefined> {
  const student = students.find((s) => s.id === id);

  return Promise.resolve(student);
}

export function createStudent(student: Student): Promise<Student> {
  const newStudent = { ...student, id: idCounter + 1 };
  idCounter += 1;

  students.push(newStudent);
  localStorage.setItem('idCounter', idCounter.toString());
  localStorage.setItem('students', JSON.stringify(students));

  return Promise.resolve(newStudent);
}

export function updateStudent(student: Student): Promise<Student | undefined> {
  const index = students.findIndex((s) => s.id === student.id);

  if (index === -1) {
    return Promise.resolve(undefined);
  }

  students[index] = student;
  localStorage.setItem('students', JSON.stringify(students));

  return Promise.resolve(student);
}

export function deleteStudent(id: number): Promise<boolean> {
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return Promise.resolve(false);
  }

  students.splice(index, 1);
  localStorage.setItem('students', JSON.stringify(students));

  return Promise.resolve(true);
}
