import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, MouseEvent } from 'react';
import { useAppContext } from '../pages/_app';

export const Content: FC<PropsWithChildren<any>> = (props) => {
	const {children} = props;
	const router = useRouter();
	const {file, setFile} = useAppContext();

	const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		router.push('/')
			.then(() => setFile(''))
			.catch(err => console.error(err));
	}

	return (
		<main className={'flex flex-col w-3/4 bg-slate-800'}>
			{/* Tabs */}
			<div className={'flex justify-start items-center text-sm text-gray-300'}>
				<div
					role={'button'}
					className={`${file ? 'flex' : 'hidden'} items-center gap-1 bg-gray-700/90 hover:bg-slate-600/90 w-auto pl-3 py-2 pr-1`}
				>
					<FontAwesomeIcon icon={faJsSquare} className={'text-yellow-500 h-4 w-4'}/>
					<span>{file}</span>
					<button
						className={'flex items-center justify-center hover:bg-gray-500 p-0.5 rounded'}
						onClick={handleClose}
					>
						<XIcon className={'h-4 w-4'}/>
					</button>
				</div>
			</div>

			{/* Content */}
			<div className={'flex-1 flex bg-gray-700/90'}>
				{children}
			</div>
		</main>
	);
};
