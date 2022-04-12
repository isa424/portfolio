import { FC, PropsWithChildren } from 'react';

type IToolbarButton = {
	type: 'close' | 'minimize' | 'fullscreen'
};

// todo: Add onClick
export const ToolbarButton: FC<PropsWithChildren<IToolbarButton>> = (props) => {
	const {type} = props;

	const bgTypes: Record<IToolbarButton['type'], string> = {
		'close': 'bg-red-400 hover:bg-red-500',
		'minimize': 'bg-yellow-400 hover:bg-yellow-500',
		'fullscreen': 'bg-green-400 hover:bg-green-500',
	};

	const childBgTypes: Record<IToolbarButton['type'], string> = {
		'close': 'bg-red-400 group-hover:bg-red-700',
		'minimize': 'bg-yellow-400 group-hover:bg-yellow-700',
		'fullscreen': 'bg-green-400 group-hover:bg-green-700',
	};

	return (
		<button
			role={'button'}
			className={`group rounded-full h-3 w-3 ${bgTypes[type]} focus:outline-none cursor-default flex items-center justify-center ring-1 ring-black/10 ring-inset`}
		>
			<div className={`rounded-full ${childBgTypes[type]} h-1 w-1`}></div>
		</button>
	);
};
