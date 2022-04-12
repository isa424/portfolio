// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IData } from '../../components/page';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IData>
) {
	const data = `// Technologies and tools
const techs = [
	"Typescript",
	"React",
	"Redux",
	"Golang",
	"Docker",
];
`;

	res.status(200).json({data: data});
}
