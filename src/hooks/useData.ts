import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { ICategory } from 'src/utils/types';

const fetchData = async (): Promise<ICategory[]> => {
	try {
		const response: AxiosResponse<ICategory[]> = await axios.get('http://localhost:8888/menu');
		return response.data;
	} catch (error) {
		console.log('Error fetching menu:', error);
		throw error;
	}
};

export const useData = (): UseQueryResult<ICategory[]> => {
	return useQuery('data', fetchData);
};