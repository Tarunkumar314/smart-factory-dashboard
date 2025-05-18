import React, { useState } from 'react';
import { Container, Title, Paper, Grid, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { DateValue } from '@mantine/dates';
import FilterSection from './FilterSection';
import ProductionChart from './ProductionChart';
import ProductionTable from './ProductionTable';
import LanguageSwitcher from './LanguageSwitcher';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [dateRange, setDateRange] = useState<[DateValue, DateValue]>([null, null]);

  const handleFilter = (dates: [DateValue, DateValue]) => {
    setDateRange(dates);
  };

  return (
    <Container size="lg" py="xl">
      <Stack spacing="xl">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          backdropFilter: 'blur(10px)',
        }}>
          <div>
            <Title order={1} style={{ color: 'white', margin: 0 }}>{t('pageTitle')}</Title>
            <Text size="sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              {dateRange[0] && dateRange[1] 
                ? `Showing data from ${dateRange[0].toLocaleDateString()} to ${dateRange[1].toLocaleDateString()}`
                : 'Showing all data'}
            </Text>
          </div>
          <LanguageSwitcher />
        </div>
        
        <Paper shadow="md" p="xl" withBorder radius="md">
          <FilterSection onFilter={handleFilter} />
        </Paper>

        <Grid>
          <Grid.Col span={12}>
            <Paper shadow="md" p="xl" withBorder radius="md">
              <ProductionChart dateRange={dateRange} />
            </Paper>
          </Grid.Col>
          <Grid.Col span={12}>
            <Paper shadow="md" p="xl" withBorder radius="md">
              <ProductionTable />
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Dashboard; 