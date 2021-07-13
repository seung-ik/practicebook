import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { nowChartData } from '@state/errorStatsState';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chartBox: {
      position: 'relative',
      width: '70%',
      height: '100%',
      maxHeight: '60vh',
      margin: 'auto',
    },
  }),
);

const chartOptions: Chart.ChartOptions = {
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: true,
  responsive: true,
};

const ChartZone: FC = () => {
  const classes = useStyles();
  const chartData = useRecoilValue(nowChartData);
  return (
    <Box className={classes.chartBox}>
      <Bar type="bar" data={chartData} options={chartOptions} />
    </Box>
  );
};

export default ChartZone;
