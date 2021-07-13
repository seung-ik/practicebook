import React, { FC, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { endDateState, periodState, startDateState } from '@state/orderPlanState';
import {
  errorChartData,
  errorTableData,
  makeChartData,
  nowChartData,
  nowTableData,
  selectErrorType,
  tableDatafilterByTypeAndDate,
} from '@state/errorStatsState';
import { Box, Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import RangePicker from '@molecules/rangePicker';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rangeBox: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '70%',
      padding: theme.spacing(1, 3),
      margin: 'auto',
      marginBottom: theme.spacing(2),
    },
  }),
);

const DatePicker: FC = () => {
  const classes = useStyles();
  const dummyTableData = useRecoilValue(errorTableData);
  const dummyChartData = useRecoilValue(errorChartData);
  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);
  const [period, setPeriod] = useRecoilState(periodState);
  const selectType = useRecoilValue(selectErrorType);
  const setTableData = useSetRecoilState(nowTableData);
  const setChartData = useSetRecoilState(nowChartData);

  const onSearchClick = () => {
    const filteredtableData = tableDatafilterByTypeAndDate(dummyTableData, selectType, startDate, endDate);
    setTableData(filteredtableData);
    const newChartData = makeChartData(startDate, endDate, dummyChartData);
    setChartData(newChartData);
  };

  useEffect(() => {
    const newChartData = makeChartData(startDate, endDate, dummyChartData);
    setChartData(newChartData);
  }, []);

  return (
    <Box className={classes.rangeBox}>
      <RangePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        period={period}
        setPeriod={setPeriod}
      />
      <Button variant="contained" color="primary" onClick={onSearchClick}>
        검색
      </Button>
    </Box>
  );
};

export default DatePicker;
