import { GetServerSideProps } from 'next';
import type { NextPage } from 'next'
import Page, { IData } from '../components/page';
import fetch from 'isomorphic-fetch';

const Personal: NextPage<IData> = (props) => (
	<Page data={props.data}/>
);

export const getServerSideProps: GetServerSideProps<IData> = async () => {
	const url = process.env.NEXT_PUBLIC_URL + '/api/personal';
	const response = await fetch(url);
	let data = {data: ''};

	if (response.ok) {
		data = await response.json();
	}

	return {
		props: {
			...data,
		} as IData,
	};
};

export default Personal;
