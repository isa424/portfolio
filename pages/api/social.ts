// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IData } from '../../components/page';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IData>
) {
	const data = `// Technologies and tools
// CTRL + Left Mouse Click
const socials = [
	"https://github.com/isa424",
	"https://www.linkedin.com/in/isa-ishangulyyev-195962105/",
	"https://portfolio-isa424.vercel.app/",
];
`;

	res.status(200).json({data: data});
}
