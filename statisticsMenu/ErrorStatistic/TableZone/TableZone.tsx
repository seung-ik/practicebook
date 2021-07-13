import React, { ChangeEvent, FC, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  errorTableData,
  ErrorType,
  nowTableData,
  tableDatafilterByTypeAndDate,
  selectErrorType,
} from '@state/errorStatsState';
import { endDateState, startDateState } from '@state/orderPlanState';
import usePagination from '@hooks/usePagination';
import {
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  createStyles,
  Box,
} from '@material-ui/core';
import Pagination from '@organisms/pagination';
import CsvDownLoadBtn from '@molecules/csvDownloadBtn';
import Table from '@molecules/table';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableId: {
      diplay: 'block',
      maxWidth: '80px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    tableErrorMessage: {
      diplay: 'block',
      maxWidth: '240px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    tableBox: {
      padding: theme.spacing(1, 3),
      marginTop: theme.spacing(4),
    },
  }),
);

const TableZone: FC = () => {
  const classes = useStyles();
  const dummyTableData = useRecoilValue(errorTableData);
  const [tableData, setTableData] = useRecoilState(nowTableData);
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);
  const [selectType, setSelectType] = useRecoilState(selectErrorType);
  const count = dummyTableData.length;
  const { page, pageSize, maxPage, handlePageChange, handlePageSizeChange } = usePagination(count);

  const onChangeErrorType = (e: ChangeEvent<{ value: unknown }>): void => {
    setSelectType(e.target.value as ErrorType);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleDownloadClick = async () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onRowClick = () => {};

  useEffect(() => {
    const filteredtableData = tableDatafilterByTypeAndDate(dummyTableData, selectType, startDate, endDate);
    setTableData(filteredtableData);
  }, [selectType]);

  return (
    <Box className={classes.tableBox}>
      <Pagination
        page={page}
        pageSize={pageSize}
        maxPage={maxPage}
        count={tableData ? tableData.length : 0}
        handlePageChange={handlePageChange}
        handlePageSizeChange={handlePageSizeChange}
      >
        <CsvDownLoadBtn buttonText="리스트 다운로드" handleDownloadClick={handleDownloadClick} />
        <FormControl size="small">
          <InputLabel>Error Type</InputLabel>
          <Select native value={selectType} onChange={onChangeErrorType}>
            <option value="거래소 에러">거래소 에러</option>
            <option value="시스템 에러">시스템 에러</option>
          </Select>
        </FormControl>
      </Pagination>
      <Table label="error-table">
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell align="center">등록일</TableCell>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">serverName</TableCell>
            <TableCell align="center">errorName</TableCell>
            <TableCell align="center">errorMessage</TableCell>
            <TableCell align="center">Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map(({ id, date, serverName, errorName, errorMessage, content }, index) => {
            return (
              <TableRow key={id + Math.random()} onClick={onRowClick} data-index={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{date}</TableCell>
                <TableCell className={classes.tableId} align="center">
                  {id}
                </TableCell>
                <TableCell align="center">{serverName}</TableCell>
                <TableCell align="center">{errorName}</TableCell>
                <TableCell className={classes.tableErrorMessage} align="center">
                  {errorMessage}
                </TableCell>
                <TableCell className={classes.tableErrorMessage} align="center">
                  {content}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableZone;
