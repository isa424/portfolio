import { useRouter } from 'next/router';
import { FC, useState, MouseEvent, useMemo, useEffect } from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/solid';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { useAppContext } from '../pages/_app';

export const Sidebar: FC = () => {
	const {setFile} = useAppContext();
	const router = useRouter();
	const files = useMemo(() => {
		return [
			{name: 'personal.js', href: '/personal',},
			{name: 'technical.js', href: '/technical',},
			{name: 'social.js', href: '/social'}
		];
	}, []);
	const [filesOpen, setFilesOpen] = useState(true);

	const handleFilesOpen = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		setFilesOpen(!filesOpen);
	}

	useEffect(() => {
		const fileIndex = files.findIndex(f => f.href === router.pathname);

		if (fileIndex > -1) {
			setFile(files[fileIndex].name);
		}
	}, [router.pathname]);

	return (
		<div className={'flex flex-col w-1/4 bg-slate-800 text-gray-300'}>
			{/* Top */}
			<div className={'flex w-full justify-between text-sm px-3 py-2'}>
				<div>EXPLORER</div>
				<div>
					<button role={'button'} className={''}>
						<DotsHorizontalIcon className={'w-4 h-4'}/>
					</button>
				</div>
			</div>

			{/* Files */}
			<div className={'flex flex-col'}>
				<button
					role={'button'}
					className={'flex items-center gap-1 px-1 py-1 bg-slate-700 text-xs font-bold'}
					onClick={handleFilesOpen}
				>
					{filesOpen ? (
						<ChevronDownIcon className={'h-4 w-4'}/>
					) : (
						<ChevronRightIcon className={'h-4 w-4'}/>
					)}
					<span>PORTFOLIO</span>
				</button>

				<div className={`${filesOpen ? 'flex' : 'hidden'} flex-col`}>
					{files.map((f, i) => (
						<Link href={f.href} key={i}>
							<button
								role={'button'}
								className={'flex text-sm gap-2 items-center hover:bg-slate-700 hover:cursor-pointer px-3 py-0.5'}
							>
								<div className={'flex items-center justify-center'}>
									<FontAwesomeIcon icon={faJsSquare} className={'text-yellow-500 h-4 w-4'}/>
								</div>
								<span>{f.name}</span>
							</button>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
