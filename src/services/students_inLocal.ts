const STORAGE_KEY = "students";

interface Student {
  id: number;
  name: string;
  age: number;
}

// localStorage handlers

function readFromStorage(): Student[] {
  const studentsJSON = localStorage.getItem(STORAGE_KEY);
  return studentsJSON ? JSON.parse(studentsJSON) : [];
}

function saveToStorage(students: Student[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

// CRUD using the local storage

export function readStudents(): Promise<Student[]> {
  try {
    const students = readFromStorage();

    return Promise.resolve(students);
  } catch (error) {
    return Promise.reject(error);
  }
}

export function readStudent(id: number): Promise<Student | undefined> {
  try {
    const students = readFromStorage();
    const student = students.find((s) => s.id === id);

    return Promise.resolve(student);
  } catch (error) {
    return Promise.reject(error);
  }
}

export function createStudent(student: Student): Promise<Student> {
  try {
    const students = readFromStorage();
    const newStudent = { ...student, id: students.length + 1 };

    students.push(newStudent);
    saveToStorage(students);

    return Promise.resolve(newStudent);
  } catch (error) {
    return Promise.reject(error);
  }
}

export function updateStudent(student: Student): Promise<Student | undefined> {
  try {
    const students = readFromStorage();
    const index = students.findIndex((s) => s.id === student.id);

    if (index === -1) {
      return Promise.resolve(undefined);
    }

    students[index] = student;
    saveToStorage(students);
  
    return Promise.resolve(student);
  } catch (error) {
    return Promise.reject(error);
  }
}

export function deleteStudent(id: number): Promise<boolean> {
  try {
    const students = readFromStorage();
    const index = students.findIndex((s) => s.id === id);
  
    if (index === -1) {
      return Promise.resolve(false);
    }

    students.splice(index, 1);
    saveToStorage(students);

    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
}
