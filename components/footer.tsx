import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, PropsWithChildren } from 'react';
import { faCodeBranch, faTriangleExclamation, faCircleXmark, faBell, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const Section: FC<PropsWithChildren<any>> = ({children}) => (
	<div className={'flex gap-1 items-center hover:bg-gray-700 py-1 px-2'}>
		{children}
	</div>
);

export const Footer: FC = () => {
	return (
		<footer
			className={'flex justify-between w-full text-xs text-gray-300 bg-[#24292e] border border-top border-[#1f2428]'}
		>
			<div className={'flex'}>
				<Section>
					<FontAwesomeIcon icon={faCodeBranch} className={'h-3 w-3'}/>
					<span>master</span>
				</Section>

				<Section>
					<FontAwesomeIcon icon={faArrowsRotate} className={'h-3 w-3'}/>
				</Section>

				<Section>
					<FontAwesomeIcon icon={faCircleXmark} className={'h-3 w-3'}/>
					<span>0</span>
					<FontAwesomeIcon icon={faTriangleExclamation} className={'h-3 w-3'}/>
					<span>0</span>
				</Section>
			</div>

			<div className={'flex'}>
				<Section>
					<span>Tab Size: 4</span>
				</Section>
				<Section>
					<span>UTF-8</span>
				</Section>
				<Section>
					<span>LF</span>
				</Section>
				<Section>
					<span className={'font-bold'}>{'{ }'}</span>
					<span>Javascript</span>
				</Section>
				<Section>
					<FontAwesomeIcon icon={faBell} className={'h-3 w-3'}/>
				</Section>
			</div>
		</footer>
	);
};
