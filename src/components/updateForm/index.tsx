import React, { useState } from 'react';
import {
  Button,
  TableCell,
  TextField,
} from '@mui/material';
import { Student } from '../../interfaces/student';

interface TableUpdateFormProps {
  student: Student;
  onUpdate: (updatedStudent: Student) => void;
  onCancel: () => void;
}

const TableUpdateForm: React.FC<TableUpdateFormProps> = ({
  student,
  onUpdate,
  onCancel,
}) => {
  const [updatedStudent, setUpdatedStudent] = useState(student);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    onUpdate(updatedStudent);
  };

  const handleCancel = (): void => {
    onCancel();
  };

  const validateForm = (): boolean => {
    const { name, age, email } = updatedStudent;

    return !invalidEmail
    && name !== ''
    && age !== 0
    && email !== ''
    && name.length >= 3
    && updatedStudent !== student;
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    const nameRegex = /^[a-zA-ZÀ-ÿ\s']+$/;

    if (nameRegex.test(name) && name.length <= 24 || name === '') {
      setUpdatedStudent(prevState => ({ ...prevState, name }));
    }
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const age: string = event.target.value;
    const ageRegex = /^(?:1[0-1][0-9]|12[0-2]|[1-9][0-9]?[^.]?)$/;

    if (ageRegex.test(age) && Number(age) > 0 && Number(age) <= 122) {
      setUpdatedStudent(prevState => ({ ...prevState, age: Number(age) }));
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email: string = event.target.value;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    setUpdatedStudent(prevState => ({ ...prevState, email }));
    
    if (emailRegex.test(email) || email === '') {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  };

  return (
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
        {student.id}
      </TableCell>
      <TableCell
          className="name"
          component="td"
          scope="row"
          sx={ { fontSize: '16px', verticalAlign: 'middle' } }
          align="center" 
      >
        <TextField
          name="name" 
          size="small"
          value={ updatedStudent.name }
          onChange={ handleNameChange }
          label="nome"
          sx={{
            width: { sm: 50, md: 120 },
          }}
        />
      </TableCell>
      <TableCell
        scope="row"
        component="td"
        sx={ { fontSize: '16px', verticalAlign: 'middle' } }
        align="center"  
      >
        <TextField
          name="age" 
          value={ updatedStudent.age }
          onChange={ handleAgeChange }
          type="number"
          size="small"
          label="idade"
          inputProps={{
            min: 1,
            max: 122,
          }}
        />
      </TableCell>
      <TableCell
        sx={ { color: 'black', fontSize: '16px', verticalAlign: 'middle' } }
        className="email"
        component="td"
        scope="row"
        align="center"
      >
        <TextField
          name="email" 
          size="small"
          value={ updatedStudent.email }
          onChange={ handleEmailChange }
          label="email"
          sx={{
            width: { sm: 80, md: 180 },
          }}
        />
      </TableCell>
      <TableCell
        component="td"
        scope="row"
        sx={ {
          backgroundColor: '#046CF9',
          borderBottomLeftRadius: '10px',
          borderTopLeftRadius: '10px',
          color: 'white',
          width: '40px',
          fontSize: '16px',
          verticalAlign: 'middle'
        } }
        align="center"
      >
        <Button
        sx={{ color: 'white' }}
          variant="contained"
          color="secondary"
          disabled={ !validateForm() }
          onClick={handleUpdate}
        >
          Atualizar
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
          onClick={handleCancel}
        >
          Cancelar
        </Button>
      </TableCell>
    </>
  );
};

export default TableUpdateForm;
