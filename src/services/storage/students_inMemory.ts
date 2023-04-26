import { Student } from '../../interfaces/student';

// seeds students with data
const students: Student[] = [
  { id: 1, name: "joão", age: 20, email: "joão@email.com" },
  { id: 2, name: "ana", age: 21, email: "ana@email.com" },
  { id: 3, name: "arthur", age: 22, email: "arthur@email.com" },
];

// CRUD of students

export function readStudents(): Promise<Student[]> {
  return Promise.resolve(students);
}

export function readStudent(id: number): Promise<Student | undefined> {
  const student = students.find((s) => s.id === id);

  return Promise.resolve(student);
}

export function createStudent(student: Student): Promise<Student> {
  const newStudent = { ...student, id: students.length + 1 };

  students.push(newStudent);

  return Promise.resolve(newStudent);
}

export function updateStudent(student: Student): Promise<Student | undefined> {
  const index = students.findIndex((s) => s.id === student.id);

  if (index === -1) {
    return Promise.resolve(undefined);
  }

  students[index] = student;

  return Promise.resolve(student);
}

export function deleteStudent(id: number): Promise<boolean> {
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return Promise.resolve(false);
  }

  students.splice(index, 1);

  return Promise.resolve(true);
}
