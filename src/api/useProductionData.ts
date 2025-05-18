import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import mockData from './mockData.json';

const fetchProductionData = async () => {
  // Simulate API call with mock data
  return mockData;
};

export const useProductionData = () => {
  return useQuery({
    queryKey: ['productionData'],
    queryFn: fetchProductionData,
  });
}; 