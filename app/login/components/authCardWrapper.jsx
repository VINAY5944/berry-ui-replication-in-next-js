import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';

// project import
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
        width: 450, // Width of the card
        height: 500, // Increased height to provide more space
        margin: { xs: 2.5, md: 3 },
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add light box shadow
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > *': {
          flexGrow: 1,
          flexBasis: '50%'
        }
      }}
      content={false}
      {...other}
    >
      <Box sx={{ p: { xs: 2, sm: 3, xl: 5 }, width: '100%' }}>{children}</Box>
    </MainCard>
  </Box>
);

AuthCardWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthCardWrapper;
