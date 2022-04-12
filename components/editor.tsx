import { FC, PropsWithChildren } from 'react';
import { useAppContext } from '../pages/_app';
import { Content } from './content';
import { Sidebar } from './sidebar';
import { ToolbarButton } from './toolbar_button';

export const Editor: FC<PropsWithChildren<any>> = (props) => {
	const {children} = props;
	const {file} = useAppContext();

	return (
		<div
			id={'editor'}
			className={'w-full h-full md:w-[1024px] md:h-[600px] rounded-lg shadow-2xl flex flex-col overflow-hidden'}
		>
			{/* Top Toolbar */}
			<div className={'flex items-center justify-between bg-gray-700/90 px-2 py-1.5 shadow'}>
				<div className="flex gap-2 absolute">
					<ToolbarButton type={'close'}/>
					<ToolbarButton type={'minimize'}/>
					<ToolbarButton type={'fullscreen'}/>
				</div>
				<div className="flex-1 flex justify-center items-center text-gray-300 text-sm">
					<div className={'flex gap-1'}>
						<div>{file}</div>
						<div>-</div>
						<div>Portfolio</div>
					</div>
				</div>
			</div>

			{/* Body */}
			<div className={'flex h-full'}>
				{/* Sidebar */}
				<Sidebar/>

				{/* Content */}
				<Content>
					{children}
				</Content>
			</div>

		</div>
	);
}
