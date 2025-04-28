import { useQuery } from '@tanstack/react-query';
import { fetchAirPollution } from '../api/airPollution';

export const useAirPollution = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ['airPollution', lat, lon], // 쿼리 키
    queryFn: () => fetchAirPollution(lat, lon), // 쿼리 함수
    enabled: lat !== 0 && lon !== 0, // lat, lon이 0이 아니면 쿼리 실행
  });
};
