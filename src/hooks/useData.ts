import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  ingredients: string[];
  image: string;
}

export interface ICategory {
  category: string;
  iconName: string;
  products?: IProduct[];
}

const fetchData = async (): Promise<ICategory[]> => {
	try {
		const response: AxiosResponse<ICategory[]> = await axios.get('http://localhost:8888/menu');
		console.log('Response:', response);
		return response.data;
	} catch (error) {
		console.log('Error fetching menu:', error);
		throw error;
	}
};

export const useData = (): UseQueryResult<ICategory[], unknown> => {
	return useQuery('data', fetchData);
};