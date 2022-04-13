import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { GetServerSidePropsContext } from 'next';
import { IData } from '../components/page';
import * as Personal from '../pages/personal';

const nameString = 'const name = "Falan Filan";';
let shouldFail = false; // Certain requests should fail

const server = setupServer(
	rest.get(`${process.env.NEXT_PUBLIC_URL}/api/personal`, (req, res, ctx) => {
		if (shouldFail) {
			return res(ctx.status(404));
		}

		return res(ctx.json({data: nameString}))
	}),
);

describe('Personal page', () => {
	beforeAll(() => server.listen());
	beforeEach(() => shouldFail = false);
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('should fetch data correctly', async () => {
		const ctx = {} as GetServerSidePropsContext;
		const response = await Personal.getServerSideProps(ctx) as { props: IData };

		expect(response.props).toStrictEqual({data: nameString})
	});

	it('should fetch empty data', async () => {
		shouldFail = true;
		const ctx = {} as GetServerSidePropsContext;
		const response = await Personal.getServerSideProps(ctx) as { props: IData };

		expect(response.props).toStrictEqual({data: ''})
	});
});
