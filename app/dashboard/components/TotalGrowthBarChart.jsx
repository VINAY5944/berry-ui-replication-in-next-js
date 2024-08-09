// pages/dashboard/TotalGrowthBarChart.js
import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// project imports
import SkeletonTotalGrowthBarChart from '../../components/cards/Skeleton/TotalGrowthBarChart';
import MainCard from '../../components/cards/MainCard';
import { gridSpacing } from '../../lib/store/constant';

// Recharts components
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const status = [
  { value: 'today', label: 'Today' },
  { value: 'month', label: 'This Month' },
  { value: 'year', label: 'This Year' }
];

// Chart data
const data = [
  { name: 'Jan', Investment: 35, Loss: 35, Profit: 35, Maintenance: 0 },
  { name: 'Feb', Investment: 125, Loss: 15, Profit: 145, Maintenance: 0 },
  { name: 'Mar', Investment: 35, Loss: 15, Profit: 35, Maintenance: 75 },
  { name: 'Apr', Investment: 35, Loss: 35, Profit: 35, Maintenance: 0 },
  { name: 'May', Investment: 35, Loss: 65, Profit: 20, Maintenance: 0 },
  { name: 'Jun', Investment: 80, Loss: 40, Profit: 105, Maintenance: 115 },
  { name: 'Jul', Investment: 35, Loss: 80, Profit: 100, Maintenance: 0 },
  { name: 'Aug', Investment: 20, Loss: 25, Profit: 10, Maintenance: 0 },
  { name: 'Sep', Investment: 35, Loss: 15, Profit: 65, Maintenance: 0 },
  { name: 'Oct', Investment: 45, Loss: 85, Profit: 45, Maintenance: 0 },
  { name: 'Nov', Investment: 15, Loss: 25, Profit: 30, Maintenance: 150 },
  { name: 'Dec', Investment: 75, Loss: 75, Profit: 10, Maintenance: 0 }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
  const [value, setValue] = React.useState('today');
  const theme = useTheme();

  const { primary } = theme.palette.text;
  const divider = theme.palette.divider;
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Growth</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">$2,324.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-select-currency"
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div style={{ width: '100%', height: 480 }}>
                <BarChart
                  width={800}
                  height={400}
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke={primary} />
                  <YAxis stroke={primary} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Investment" stackId="a" fill={primary200} />
                  <Bar dataKey="Loss" stackId="a" fill={primaryDark} />
                  <Bar dataKey="Profit" stackId="a" fill={secondaryMain} />
                  <Bar dataKey="Maintenance" stackId="a" fill={secondaryLight} />
                </BarChart>
              </div>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
