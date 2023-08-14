import React from 'react';
import Logo from '@/assets/logo 2.svg';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className='grid grid-flow-col place-items-center px-10 py-2 text-primary-500 text-sm'>
			<Image src={Logo} alt='Crunchies Logo' />
			<div className=''>
				<ul className='grid grid-flow-col place-items-center space-x-4 cursor-pointer'>
					<li className='hover:border-primary-500 hover:border-b-[2px] mb-2 '>
						Home
					</li>
					<li className='hover:border-primary-500 hover:border-b-[2px] mb-2 '>
						Menu
					</li>
					<li className='hover:border-primary-500 hover:border-b-[2px] mb-2 '>
						Offers
					</li>
					<li className='hover:border-primary-500 hover:border-b-[2px] mb-2 '>
						Fan Club
					</li>
					<li className='hover:border-primary-500 hover:border-b-[2px] mb-2 '>
						Carrers
					</li>
					<li className='hover:border-primary-500 hover:border-b-[2px] mb-2 '>
						News
					</li>
					<li className='hover:border-primary-500 hover:border-b-[2px] mb-2 '>
						Order Now
					</li>
				</ul>
			</div>
			<div className=''>
				<ul className='grid grid-flow-col place-items-center space-x-4 cursor-pointer'>
					<li className='hover:border-primary-500 hover:border-b-[2px] mb-2 '>
						Sign in
					</li>
					<li className='text-white bg-primary-700 rounded-full px-4 py-2 mb-2 hover:bg-white border border-primary-700 hover:text-primary-700'>
						Order Food
					</li>
					<li className='hover:border-primary-500 hover:border-b-[2px] mb-2 '>
						Search
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
