import { FC, PropsWithChildren } from 'react';
import { Editor } from './editor';

export const Layout: FC<PropsWithChildren<any>> = (props) => {
	const {children} = props;

	return (
		<div id={'layout'} className={'flex justify-center items-center h-full bg-[#0f223d]'}>
			<Editor>
				{children}
			</Editor>
		</div>
	);
};
