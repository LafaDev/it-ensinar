import React, { useContext, useState } from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';

import { Student } from '../../interfaces/student';
import { StudentsContext } from '../../services/context/StudentsProvider';
import { createStudent, getStudentByEmail } from '../../services/studentsService';
import "./registration.css";

const RegistrationForm: React.FC = () => {
  const [newStudent, setNewStudent] = useState<Student>({
    name: '',
    email: '',
    age: 1
  });

  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [existingEmail, setExistingEmail] = useState<boolean>(false);
  const { setStudents } = useContext(StudentsContext);

  const validateForm = (): boolean => {
    const { name, age, email } = newStudent;

    return !invalidEmail
    && name !== ''
    && age !== 0
    && email !== ''
    && name.length >= 3;
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    const nameRegex = /^[a-zA-ZÀ-ÿ\s']+$/;

    if (nameRegex.test(name) && name.length <= 24 || name === '') {
      setNewStudent(prevState => ({ ...prevState, name }));
    }
  };


  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const age: string = event.target.value;
    const ageRegex = /^(?:1[0-1][0-9]|12[0-2]|[1-9][0-9]?[^.]?)$/;

    if (ageRegex.test(age) && Number(age) >= 0 && Number(age) <= 122) {
      setNewStudent(prevState => ({ ...prevState, age: Number(age) }));
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email: string = event.target.value;
  
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
  
    if(existingEmail) setExistingEmail(false);
    setNewStudent(prevState => ({ ...prevState, email }));
  
    if (emailRegex.test(email) || email === '') {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email } = newStudent;

    const existingEmail = await getStudentByEmail(email);
    if (existingEmail === email) return setExistingEmail(true);

    const createdStudent = await createStudent(newStudent);
    // setNewStudent({ name: '', age: 0, email: '' });
    setStudents((studs) => [...studs, createdStudent] as Student[]);
  }

  return(
    <Container>
      <Typography
        sx={ {
          fontWeight: 500,
          fontSize: '36px',
          display: 'flex',
          alignItems: 'center',
          justifySelf: 'left',
          width: '100%',
          textAlign: 'left',
          paddingTop: '40px',
        } }
        className="title"
      >
        Cadastrar novo estudante
      </Typography>
      <Grid
        className="registerStudent"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '20vh',
          width: '100%'
        }}
        container
      >
        <Grid item sx={{ marginRight: '8px' }}>
          <TextField
            name="name" 
            value={ newStudent.name }
            onChange={ handleNameChange }
            label="nome"
          />
        </Grid>
        <Grid item sx={{ marginRight: '8px' }}>
          <TextField
            name="age" 
            value={ newStudent.age }
            onChange={ handleAgeChange }
            type="number"
            inputProps={{
              min: 1,
              max: 122,
            }}
            label="idade"
          />
        </Grid>
        <Grid item sx={{ marginRight: '8px' }}>
          <TextField
            name="email" 
            value={ newStudent.email }
            onChange={ handleEmailChange }
            label="email"
            error={invalidEmail}
            helperText={invalidEmail ? "Email invalido!" : null}
          />
          {
            existingEmail && (
              <Typography
                variant="caption"
                gutterBottom
                display="block"
                sx={{ fontWeight: "bold", mt: 0.4 }}
              >
                email já registrado!
              </Typography>
            )
          } 
        </Grid>
        <Grid item>
          <Button
            className="buttonCadastrar"
            color="success"
            sx={ {
              marginLeft: '14px',
              padding: '12px',
              fontWeight: '600',
              marginRight: '14px',
              backgroundColor: '#036B52',
            } }
            variant="contained"
            disabled={ !validateForm() }
            onClick={ handleRegister }
          >
            CADASTRAR
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default RegistrationForm
