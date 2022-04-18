import { GetServerSideProps, NextPage } from 'next';
import Page, { IData } from '../components/page';
import technicalFile from '../components/technical';

const Technical: NextPage<IData> = (props) => (
	<Page data={props.data}/>
);

export const getServerSideProps: GetServerSideProps<IData> = async () => {
	let data: IData = {data: technicalFile};

	return {
		props: {
			...data,
		},
	}
};

export default Technical;
