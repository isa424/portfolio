import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { Layout } from '../components/layout';

type IContext = {
	file: string,
	setFile: Dispatch<SetStateAction<string>>
};

const FileContext = createContext<IContext>({ file: '', setFile: () => { } });

function MyApp({ Component, pageProps }: AppProps) {
	const [openFile, setOpenFile] = useState('');

	return (
		<FileContext.Provider value={{ file: openFile, setFile: setOpenFile }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</FileContext.Provider>
	);
}

export const useAppContext = () => useContext(FileContext);

export default MyApp;
