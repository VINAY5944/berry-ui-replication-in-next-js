"use client"
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Button
} from '@mui/material';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate the passing year (e.g., a 4-digit year not in the future)
const validateYear = (year) => {
  const currentYear = new Date().getFullYear();
  const yearNumber = parseInt(year, 10);
  return !isNaN(yearNumber) && yearNumber > 1900 && yearNumber <= currentYear;
};

const HorizontalFormLayout = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    degree: '',
    passingYear: '',
    languages: {
      english: false,
      french: false,
      dutch: false
    }
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    degree: '',
    passingYear: ''
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFormValues({
        ...formValues,
        languages: {
          ...formValues.languages,
          [name]: checked
        }
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formValues.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formValues.degree) newErrors.degree = 'Degree is required';
    if (!formValues.passingYear) {
      newErrors.passingYear = 'Passing Year is required';
    } else if (!validateYear(formValues.passingYear)) {
      newErrors.passingYear = 'Invalid passing year';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Form submission logic
      console.log('Form submitted:', formValues);
    }
  };

  return (
    <Card elevation={0} variant="outlined">
      <CardHeader title="Horizontal Form Layout" />
      <Divider />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">A. Personal Info:</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} lg={4}>
                  <label>Name</label>
                </Grid>
                <Grid item xs={12} sm={9} lg={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={3} lg={4}>
                  <label>Email</label>
                </Grid>
                <Grid item xs={12} sm={9} lg={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">B. Educational Info:</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} lg={4}>
                  <label>Degree Name</label>
                </Grid>
                <Grid item xs={12} sm={9} lg={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="degree"
                    value={formValues.degree}
                    onChange={handleChange}
                    placeholder="Enter Degree name"
                    error={!!errors.degree}
                    helperText={errors.degree}
                  />
                </Grid>
                <Grid item xs={12} sm={3} lg={4}>
                  <label>Passing Year</label>
                </Grid>
                <Grid item xs={12} sm={9} lg={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="passingYear"
                    value={formValues.passingYear}
                    onChange={handleChange}
                    placeholder="Enter Passing Year"
                    error={!!errors.passingYear}
                    helperText={errors.passingYear}
                  />
                </Grid>
                <Grid item xs={12} sm={3} lg={4}>
                  <label>Language</label>
                </Grid>
                <Grid item xs={12} sm={9} lg={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="english"
                        checked={formValues.languages.english}
                        onChange={handleChange}
                      />
                    }
                    label="English"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="french"
                        checked={formValues.languages.french}
                        onChange={handleChange}
                      />
                    }
                    label="French"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="dutch"
                        checked={formValues.languages.dutch}
                        onChange={handleChange}
                      />
                    }
                    label="Dutch"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button type="submit" variant="contained" color="primary">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default HorizontalFormLayout;
