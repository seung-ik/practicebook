import { atom, selector } from 'recoil';
import Chart from 'chart.js/auto';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Period } from '@menu/statisticsMenu/ErrorStatistic/Error';
import { format } from 'date-fns';

export const errorStartDate = atom<MaterialUiPickersDate>({
  key: 'error/startDate',
  default: new Date(),
});

export const errorEndDate = atom<MaterialUiPickersDate>({
  key: 'error/endDate',
  default: null,
});

export const errorPeriod = atom<Period>({
  key: 'error/period',
  default: 'day',
});

export const errorChartData = selector<Chart.ChartData>({
  key: 'errorStatistic/errordata',
  get: ({ get }) => {
    const period = get(errorPeriod);
    const startDate = get(errorStartDate);
    let temp = {};
    if (period === 'day') {
      temp = {
        labels: [`${format(startDate as Date, 'yyyy-MM-dd')}`],
        datasets: [
          {
            label: '거래소 에러',
            data: [2],
            backgroundColor: 'rgb(68,114,196)',
          },
          {
            label: '시스템 에러',
            data: [6],
            backgroundColor: 'rgb(237,124,49)',
          },
        ],
      };
    } else if (period === 'week') {
      temp = {
        labels: [`${format(startDate as Date, 'yyyy-MM-dd')}`, '임시1', '임시2', '임시3', '임시4', '임시5', '임시6'],
        datasets: [
          {
            label: '거래소 에러',
            data: [4, 12, 6, 23, 3, 5, 19],
            backgroundColor: 'rgb(68,114,196)',
          },
          {
            label: '시스템 에러',
            data: [10, 20, 30, 40, 50, 60, 6],
            backgroundColor: 'rgb(237,124,49)',
          },
        ],
      };
    } else {
      temp = {
        labels: [`${format(startDate as Date, 'yyyy-MM')}`],
        datasets: [
          {
            label: '미완성',
            data: [3],
            backgroundColor: 'rgb(68,114,196)',
          },
          {
            label: '미완성',
            data: [3],
            backgroundColor: 'rgb(237,124,49)',
          },
        ],
      };
    }
    return temp;
  },
});

export interface DetailErrorType {
  id: string;
  no: number;
  date: string;
  serverName: string;
  errorName: string;
  errorMessage: string;
  content: string;
}

export interface ErrorDataType {
  createdAt: string;
  marketError: DetailErrorType[];
  systemError: DetailErrorType[];
}

export type ErrorNameType = '거래소 에러' | '시스템 에러';

export const errorData = atom<ErrorDataType[]>({
  key: 'error/errorDummyData',
  default: [
    {
      createdAt: '2021-06-22',
      marketError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-22',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
      systemError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-22',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-22',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-22',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
    },
    {
      createdAt: '2021-04-22',
      marketError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-04-22',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
      systemError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-04-22',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-04-22',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-04-22',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
    },
    {
      createdAt: '2021-06-21',
      marketError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-21',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-21',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-21',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
      systemError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-21',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-21',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
    },
    {
      createdAt: '2021-06-01',
      marketError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-01',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-01',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-01',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-01',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-01',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-01',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
      systemError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-01',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-01',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-01',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-01',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
    },
    {
      createdAt: '2021-06-15',
      marketError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
      systemError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-15',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
    },
    {
      createdAt: '2021-06-07',
      marketError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-07',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-07',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-07',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-07',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
      systemError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-07',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-07',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
    },
    {
      createdAt: '2021-06-02',
      marketError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '거래소 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
      systemError: [
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
        {
          id: '92a791dc-3f30-4c7c-9199-644d068bbd49',
          no: 1,
          date: '2021-06-02',
          serverName: '123서버',
          errorName: '시스템 에러',
          errorMessage:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          content: 'string',
        },
      ],
    },
  ],
});
