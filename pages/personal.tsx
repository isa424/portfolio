import { GetServerSideProps } from 'next';
import type { NextPage } from 'next'
import Page, { IData } from '../components/page';
import personalFile from '../components/personal';

const Personal: NextPage<IData> = (props) => (
	<Page data={props.data}/>
);

export const getServerSideProps: GetServerSideProps<IData> = async () => {
	let data = {data: personalFile};

	return {
		props: {
			...data,
		} as IData,
	};
};

export default Personal;
