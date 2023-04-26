import React, { useContext, useState, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button
} from '@mui/material';

import TableUpdateForm from '../updateForm';

import { StudentsContext } from '../../services/context/StudentsProvider';
import { getStudents, deleteStudent, updateStudent } from '../../services/studentsService';
import { Student } from '../../interfaces/student';

const StudentsTable: React.FC = () => {
  const { students, setStudents } = useContext(StudentsContext);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<any>({});

  const keys = students?.length > 0 ? Object.keys(students[0]) : [];
  
  const handleDelete = async (id: number | undefined) => {
    await deleteStudent(Number(id));
    const newStu = students.filter(st => st.id !== id)
    setStudents(newStu as Student[]);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingStudent(false);
    console.log('cancel')
  };

  const handleUpdate = async (upStudent: Student) => {
    await updateStudent(upStudent);
    setStudents([...students, upStudent])

    setIsEditing(false);
    setEditingStudent(false);
  };

  useEffect(() => {
    getStudents().then((thuds) => setStudents(thuds as Student[]))
  });

  return ( 
    <TableContainer
      className="table"
      sx={ {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      } } 
    >
      <Table
        sx={ { width: '95%', border: 0 } }
        size="small"
      >
        <TableHead>
          <TableRow>
            {keys.map((head) => (
             <TableCell
               key={ head }
               component="th"
               scope="row"
               sx={ { fontSize: '20px' } }
               align="center"
             >
               {head}
             </TableCell>
           ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((studentRow) => {
            const { id, name, age, email }  = studentRow;
            return (
            <TableRow
              key={ id }
              sx={ { border: 0 } }
            >
            {
              isEditing && editingStudent.id === id ? (
                <TableUpdateForm onUpdate={handleUpdate} onCancel={handleCancel} student={editingStudent} />
              ) : (
                <>
                  <TableCell
                    className="id"
                    sx={ { '&:last-child td': { border: 0 },
                      borderBottomLeftRadius: '10px',
                      borderTopLeftRadius: '10px',
                      fontSize: '16px',
                      verticalAlign: 'middle' } }
                    component="td"
                    scope="row"
                    align="center"
                  >
                    {id}
                  </TableCell>
                  <TableCell
                    className="name"
                    component="td"
                    scope="row"
                    sx={ { fontSize: '16px', verticalAlign: 'middle' } }
                    align="center"
                  >
                    {name}
                  </TableCell>
                  <TableCell
                    sx={ { color: 'black', fontSize: '16px', verticalAlign: 'middle' } }
                    className="age"
                    component="td"
                    scope="row"
                    align="center"
                  >
                    {age}
                  </TableCell>
                  <TableCell
                    sx={ { color: 'black', fontSize: '16px', verticalAlign: 'middle' } }
                    className="email"
                    component="td"
                    scope="row"
                    align="center"
                  >
                    {email}
                  </TableCell> 
                  <TableCell
                    component="td"
                    scope="row"
                    sx={ {
                      backgroundColor: '#056CF9',
                      borderBottomLeftRadius: '10px',
                      borderTopLeftRadius: '10px',
                      width: '40px',
                      fontSize: '16px',
                      verticalAlign: 'middle'
                    } }
                    align="center"
                  >
                    <Button
                      className="buttonEditar"
                      fullWidth
                      sx={ {
                        padding: '5px 0',
                        fontWeight: '600',
                        width: '100%',
                        backgroundColor: '#056CF9',
                        border: 0,
                        boxShadow: 0,
                      } }
                      variant="contained"
                      id={ email }
                      onClick={ () => {
                        setIsEditing(true);
                        setEditingStudent({ id, name, age, email })
                      } }
                    >
                      Editar
                    </Button>
                  </TableCell>
                  <TableCell
                    component="td"
                    scope="row"
                    sx={ {
                      backgroundColor: 'red',
                      borderBottomRightRadius: '10px',
                      borderTopRightRadius: '10px',
                      width: '40px',
                      fontSize: '16px',
                      verticalAlign: 'middle'
                    } }
                    align="center"
                  >
                    <Button
                      className="buttonExcluir"
                      fullWidth
                      sx={ {
                        padding: '5px 0',
                        fontWeight: '600',
                        width: '100%',
                        backgroundColor: 'red',
                        border: 0,
                        boxShadow: 0,
                      } }
                      variant="contained"
                      id={ email }
                      onClick={ () => handleDelete(id) }
                    >
                      Excluir
                    </Button>
                  </TableCell>
                </>
              )
            } 
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StudentsTable;
