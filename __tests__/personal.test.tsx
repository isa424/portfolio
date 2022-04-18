import { GetServerSidePropsContext } from 'next';
import { IData } from '../components/page';
import * as Personal from '../pages/personal';
import personalInfo from '../components/personal';

describe('Personal page', () => {
	it('should fetch data correctly', async () => {
		const ctx = {} as GetServerSidePropsContext;
		const response = await Personal.getServerSideProps(ctx) as { props: IData };

		expect(response.props).toStrictEqual({data: personalInfo})
	});
});
