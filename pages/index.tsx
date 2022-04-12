import type { GetServerSideProps, NextPage } from 'next'
import Page, { IData } from '../components/page';

const Home: NextPage<IData> = (props) => (
	<Page data={props.data}/>
);

export const getServerSideProps: GetServerSideProps = async () => {
	const url = process.env.NEXT_PUBLIC_URL + '/api/personal';
	const response = await fetch(url);
	let data = {};

	if (response.ok) {
		data = await response.json();
	}

	return {
		props: {
			...data,
		},
	};
};

export default Home;
