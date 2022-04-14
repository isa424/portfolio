import { FC, Fragment, PropsWithChildren, useMemo } from 'react';
import { useAppContext } from '../pages/_app';
import { Editor } from './editor';
import Head from 'next/head';
import styles from './layout.module.css';

export const Layout: FC<PropsWithChildren<any>> = (props) => {
	const { children } = props;
	const { file } = useAppContext();

	const title = useMemo(() => {
		if (file) {
			return `Isa Ishangulyyev Portfolio | ${file}`;
		}

		return 'Isa Ishangulyyev Portfolio'
	}, [file]);


	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Portfolio of Frontend Engineer Isa Ishangulyyev"/>
				<meta name="og:title" property="og:title" content="Isa Ishangulyyev Portfolio"/>
				<meta name="twitter:card" content="Isa Ishangulyyev Portfolio"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="canonical" href="https://portfolio-isa424.vercel.app/"></link>
			</Head>

			<div id={'layout'} className={`flex justify-center items-center h-full bg-[#0f223d] ${styles.layout}`}>
				<Editor>
					{children}
				</Editor>
			</div>
		</Fragment>
	);
};
