import {Link} from 'react-router-dom';

function Header() {
	return (
		<div className='p-4 w-full bg-black md:bg-midnight-green flex justify-between items-center'>
			<h1 className='font-sans text-3xl tracking-wider text-left text-dutch-white'>
				J'zargo
			</h1>
			<div className='flex space-x-8 text-sm md:text-base text-cultured-white mr-4 '>
				<button className='bg-persian-plum border-solid border text-cultured-white px-2 md:px-4 rounded-lg hover:bg-dutch-white'>
					Bait
				</button>
				<Link to='#'>About Us</Link>
				<Link to='#'>Contact</Link>
			</div>
		</div>
	);
}
export default Header;
