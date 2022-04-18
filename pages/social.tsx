import { GetServerSideProps, NextPage } from 'next';
import Page, { IData } from '../components/page';
import socialFile from '../components/social';

const Social: NextPage<IData> = (props) => (
	<Page data={props.data}/>
);

export const getServerSideProps: GetServerSideProps<IData> = async () => {
	let data: IData = {data: socialFile};

	return {
		props: {
			...data,
		},
	}
}

export default Social;
