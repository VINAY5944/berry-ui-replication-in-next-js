import React from 'react';
import { Box, Grid, Typography, Breadcrumbs, Link, Card, CardContent, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';

const ChartBreadcrumbs = ({ title, breadcrumbText }) => {
  return (
    <Card 
      sx={{ 
        position: 'relative', // Ensure the button is positioned relative to the card
        width: '90%', // Decrease the width of the card
        marginBottom: 2,
        marginLeft: 10,
      }}
    >
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h3" component="h3">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRightIcon fontSize="small" />}>
              <Link href="/dashboard" underline="hover" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ marginRight: '0px', marginTop: '-2px', width: '1rem', height: '1rem', color: 'rgb(103, 58, 183)' }} />
              </Link>
              <Typography variant="subtitle1" component="h6">
                {breadcrumbText}
              </Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </CardContent>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        <AddIcon />
      </IconButton>
    </Card>
  );
};

export default ChartBreadcrumbs;
