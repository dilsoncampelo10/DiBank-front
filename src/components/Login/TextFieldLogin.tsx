import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldLogin() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="E-mail"
          id="email"
          defaultValue=""
          size="medium"
        />

        <TextField
          label="Senha"
          id="password"
          defaultValue=""
          size="medium"
        />
        
      </div>

    </Box>
  );
}