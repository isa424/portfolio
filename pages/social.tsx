import { GetServerSideProps, NextPage } from 'next';
import Page, { IData } from '../components/page';
import fetch from 'isomorphic-fetch';

const Social: NextPage<IData> = (props) => (
	<Page data={props.data}/>
);

export const getServerSideProps: GetServerSideProps<IData> = async () => {
	const url = process.env.NEXT_PUBLIC_URL + '/api/social';
	const response = await fetch(url);
	let data: IData = {data: ''};

	if (response.ok) {
		data = await response.json();
	}

	return {
		props: {
			...data,
		},
	}
}

export default Social;
