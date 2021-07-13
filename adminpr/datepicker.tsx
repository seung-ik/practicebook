import { FC, Dispatch, useState, MouseEvent } from 'react';
import { Button, Box, ButtonGroup, makeStyles, Theme, createStyles } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { addDays, addMonths } from 'date-fns';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 'fit-content',
      display: 'flex',
      alignItems: 'center',
    },
    datePicker: {
      minWidth: '450px',
      display: 'inline-flex',
      alignItems: 'center',
    },
  }),
);

const periodButtons = [
  { name: '일간', value: 'day' },
  { name: '주간', value: 'week' },
  { name: '월간', value: 'month' },
];
Object.freeze(periodButtons);

type Period = 'day' | 'week' | 'month';

export interface Props {
  setStartDate: Dispatch<MaterialUiPickersDate>;
  setEndDate: Dispatch<MaterialUiPickersDate>;
  startDate: MaterialUiPickersDate;
  endDate: MaterialUiPickersDate;
  handlePeriod: (period: Period) => void;
}

const PeriodDatePicker: FC<Props> = ({ setStartDate, setEndDate, startDate, endDate, handlePeriod }) => {
  const classes = useStyles();
  const [period, setPeriod] = useState<Period>('day');

  const onPeriodClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setPeriod(e.currentTarget.value as Period);
    if (value === 'day') {
      setEndDate(addDays(startDate as Date, 1));
      handlePeriod('day');
    } else if (value === 'week') {
      setEndDate(startDate);
      setStartDate(addDays(startDate as Date, -7));
      handlePeriod('week');
    } else {
      setEndDate(addMonths(startDate as Date, 1));
      handlePeriod('month');
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.datePicker}>
        <KeyboardDatePicker
          style={{ marginRight: 16 }}
          variant="inline"
          views={period === 'month' ? ['month'] : undefined}
          value={startDate}
          format={period === 'month' ? 'yyyy-MM' : 'yyyy-MM-dd'}
          onChange={(date) => {
            setStartDate(date);
            setEndDate(addDays(date as Date, 7));
          }}
        />
        {period === 'week' && (
          <KeyboardDatePicker
            variant="inline"
            value={endDate}
            format="yyyy-MM-dd"
            onChange={(date) => {
              setEndDate(date);
              setStartDate(addDays(date as Date, -7));
            }}
          />
        )}
      </Box>
      <ButtonGroup color="primary" aria-label="periodDatePicker-button-group">
        {periodButtons.map(({ name, value }) => (
          <Button
            key={name}
            value={value}
            onClick={onPeriodClick}
            variant={value === period ? 'contained' : 'outlined'}
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default PeriodDatePicker;
