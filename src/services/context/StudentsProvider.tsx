import React, { createContext, useState, PropsWithChildren } from 'react';
import { Student } from '../../interfaces/student';

type StudentsContextType = {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

export const StudentsContext = createContext<StudentsContextType>({
  students: [],
  setStudents: () => { return },
});

const StudentsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  return (
    <StudentsContext.Provider value={ { students, setStudents } }>
      {children}
    </StudentsContext.Provider>
  )
} 

export default StudentsProvider;