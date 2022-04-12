// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IData } from '../../components/page';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IData>
) {
	const data = `// Personal Information
const name = "Isa Ishangulyyev";
const bio = "Software Engineer";
const location = "Ankara, Turkey";

// Hobbies
const hobbies = [
	"Programming",
	"Football",
	"Travelling",
];
`;

	res.status(200).json({data: data});
}
