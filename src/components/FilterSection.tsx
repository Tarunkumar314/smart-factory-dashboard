import React, { useState } from 'react';
import { TextInput, Group, Stack, Button, Title } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useTranslation } from 'react-i18next';
import { DateValue } from '@mantine/dates';

interface FilterSectionProps {
  onFilter: (dates: [DateValue, DateValue]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onFilter }) => {
  const { t } = useTranslation();
  const [dateRange, setDateRange] = useState<[DateValue, DateValue]>([null, null]);

  const handleFilter = () => {
    onFilter(dateRange);
  };

  return (
    <Stack spacing="md">
      <Title order={3} style={{ marginBottom: '10px' }}>{t('filterData')}</Title>
      <Group grow>
        <TextInput
          label={t('machineName')}
          placeholder={t('machineName')}
          size="md"
          styles={{
            label: {
              fontWeight: 500,
            },
          }}
        />
        <DatePickerInput
          label={t('dateRange')}
          placeholder={t('dateRange')}
          type="range"
          size="md"
          value={dateRange}
          onChange={setDateRange}
          styles={{
            label: {
              fontWeight: 500,
            },
          }}
        />
      </Group>
      <Group justify="flex-end">
        <Button 
          onClick={handleFilter} 
          size="md"
          variant="filled"
          style={{
            minWidth: '120px',
          }}
        >
          {t('filter')}
        </Button>
      </Group>
    </Stack>
  );
};

export default FilterSection; 