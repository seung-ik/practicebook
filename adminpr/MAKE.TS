export const makeChartJsData = (startDate: string, endDate: string, datasetsData: ChartData[]): ChartJsData => {
  const dayLength = Math.abs(differenceInDays(Date.parse(startDate), Date.parse(endDate)));
  const newChartData: ChartJsData = {
    labels: [],
    datasets: [
      {
        label: '거래소 에러',
        data: [],
        backgroundColor: 'rgb(68,114,196)',
      },
      {
        label: '시스템 에러',
        data: [],
        backgroundColor: 'rgb(237,124,49)',
      },
    ],
  };

  if (endDate === startDate) {
    const labelDate = format(Date.parse(endDate), 'yyyy-MM-dd');
    newChartData.labels.push(String(labelDate));
  } else {
    for (let i = 0; i <= dayLength; i++) {
      const labelDate = format(addDays(Date.parse(startDate), i), 'yyyy-MM-dd');
      newChartData.labels.push(labelDate);
    }
  }

  for (let i = 0; i <= newChartData.labels.length; i++) {
    const filteredChartdata = datasetsData.filter((el) => el.createdAt.substring(0, 10) === newChartData.labels[i]);
    if (filteredChartdata.length > 0) {
      newChartData.datasets[0].data.push(filteredChartdata[0].EXCHANGE);
      newChartData.datasets[1].data.push(filteredChartdata[0].SYSTEM);
    } else {
      newChartData.datasets[0].data.push(0);
      newChartData.datasets[1].data.push(0);
    }
  }

  return newChartData;
};