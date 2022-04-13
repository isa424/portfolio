import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next'
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => (
	<div className='flex flex-col justify-center items-center text-gray-300 w-full mb-8'>
		<FontAwesomeIcon icon={faCode} className='h-10 w-10'/>
		<span>Open a file</span>
		<span className='text-sm text-gray-500'>(Work in progress...)</span>
	</div>
);

export default Home;
