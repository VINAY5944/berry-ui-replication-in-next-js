// app/page.js
import * as React from 'react';
import { Button, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Welcome to My MUI App
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
}
