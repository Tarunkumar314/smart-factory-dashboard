import React from 'react';
import { Table, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const mockData = [
  { machineName: 'Machine A', status: 'Running', output: 100, lastUpdated: '2023-10-01' },
  { machineName: 'Machine B', status: 'Idle', output: 0, lastUpdated: '2023-10-01' },
  { machineName: 'Machine C', status: 'Running', output: 150, lastUpdated: '2023-10-01' },
];

const ProductionTable: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title order={3} mb="md">{t('productionData')}</Title>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: '25%', textAlign: 'left' }}>{t('machineNameHeader')}</Table.Th>
            <Table.Th style={{ width: '25%', textAlign: 'center' }}>{t('statusHeader')}</Table.Th>
            <Table.Th style={{ width: '25%', textAlign: 'center' }}>{t('outputHeader')}</Table.Th>
            <Table.Th style={{ width: '25%', textAlign: 'right' }}>{t('lastUpdatedHeader')}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {mockData.map((row, index) => (
            <Table.Tr key={index}>
              <Table.Td style={{ textAlign: 'left' }}>{row.machineName}</Table.Td>
              <Table.Td style={{ textAlign: 'center' }}>{row.status}</Table.Td>
              <Table.Td style={{ textAlign: 'center' }}>{row.output}</Table.Td>
              <Table.Td style={{ textAlign: 'right' }}>{row.lastUpdated}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default ProductionTable; 