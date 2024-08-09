import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MainCard from '../../components/cards/MainCard';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const AuthCardWrapper = ({ children, ...other }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Ensure the Box takes up the full viewport height
      p: 2
    }}
  >
    <MainCard
      sx={{
        width: { xs: '90%', sm: 450 }, // Make width responsive
        maxWidth: 600, // Set a maximum width for the card
        height: 'auto', // Set height to auto to fit content dynamically
        minHeight: 500, // Ensure a minimum height
        margin: { xs: 2.5, md: 3 },
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add light box shadow
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto', // Handle overflow
        '& > *': {
          flexGrow: 1,
          flexBasis: 'auto' // Adjust based on content size
        }
      }}
      content={false}
      {...other}
    >
      <Box sx={{ p: { xs: 2, sm: 3, xl: 5 }, width: '100%' }}>
        {children}
      </Box>
    </MainCard>
  </Box>
);

AuthCardWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthCardWrapper;
