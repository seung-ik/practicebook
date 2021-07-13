import React, { FC } from 'react';
import { Box, makeStyles, Theme, Typography, createStyles, Paper } from '@material-ui/core';
import DatePicker from './DatePicker';
import TableZone from './TableZone';
import ChartZone from './ChartZone';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(3),
    },
    topBox: {
      paddingBottom: theme.spacing(1),
      borderBottom: '2px solid black',
      margin: theme.spacing(2, 3),
    },
    chartAndDatePicker: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(1, 3),
      marginBottom: theme.spacing(1),
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      padding: theme.spacing(3, 5, 3, 5),
    },
  }),
);

const Error: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.topBox}>
        <Typography>시스템 에러 현황을 확인할 수 있습니다.</Typography>
      </Box>
      <Box className={classes.chartAndDatePicker}>
        <Paper className={classes.paper}>
          <DatePicker />
          <ChartZone />
        </Paper>
      </Box>
      <TableZone />
    </Box>
  );
};

export default Error;
