import React, { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useTranslation } from 'react-i18next';
import { DateValue } from '@mantine/dates';

interface ProductionChartProps {
  dateRange: [DateValue, DateValue];
}

const mockData = {
  series: [{
    name: 'Production',
    data: [30, 40, 35, 50, 49, 60, 70]
  }],
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  dates: [
    new Date(2024, 0, 1), // Mon
    new Date(2024, 0, 2), // Tue
    new Date(2024, 0, 3), // Wed
    new Date(2024, 0, 4), // Thu
    new Date(2024, 0, 5), // Fri
    new Date(2024, 0, 6), // Sat
    new Date(2024, 0, 7), // Sun
  ]
};

const ProductionChart: React.FC<ProductionChartProps> = ({ dateRange }) => {
  const { t } = useTranslation();

  const filteredData = useMemo(() => {
    if (!dateRange[0] || !dateRange[1]) {
      return mockData;
    }

    const [startDate, endDate] = dateRange;
    const filteredIndices = mockData.dates.reduce((acc: number[], date, index) => {
      if (date >= startDate && date <= endDate) {
        acc.push(index);
      }
      return acc;
    }, []);

    return {
      series: [{
        name: 'Production',
        data: filteredIndices.map(index => mockData.series[0].data[index])
      }],
      categories: filteredIndices.map(index => mockData.categories[index])
    };
  }, [dateRange]);

  const options: ApexOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: filteredData.categories,
    },
    title: {
      text: t('dailyProductionCount'),
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={filteredData.series}
      type="bar"
      height={350}
    />
  );
};

export default ProductionChart; 