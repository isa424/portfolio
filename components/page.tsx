import File, { useMonaco } from '@monaco-editor/react';
import { FC, useEffect, useState } from 'react';
import { github_dark } from '../themes/github_dark';

export type IData = {
	data: string
};

const Page: FC<IData> = (props) => {
	const monaco = useMonaco();
	const [currentTheme, setCurrentTheme] = useState('vs-dark');

	// Load and set the new theme
	useEffect(() => {
		if (monaco) {
			const name = 'github-dark';
			monaco.editor.defineTheme(name, github_dark);
			monaco.editor.setTheme(name);
			setCurrentTheme(name);
		}
	}, [monaco]);

	return (
		<File
			options={{
				readOnly: true,
			}}
			height={'90vh'}
			theme={currentTheme}
			defaultLanguage={'javascript'}
			defaultValue={props.data}
			loading={<div/>}
		/>
	);
}

export default Page;
