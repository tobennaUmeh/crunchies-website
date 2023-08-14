import React from 'react';

const Hero = () => {
	return (
		<>
			<div
				className='grid relative'
				style={{
					backgroundImage: `url('/Web_banners.jpg')`,
					height: '400px',
				}}
			>
				<button className='text-primary-500 font-semibold bg-primary-100 px-12 text-sm py-2 rounded-full w-fit h-fit absolute bottom-8 left-[10rem] hover:text-white hover:border-primary-500 hover:bg-primary-500'>
					BUY NOW
				</button>
			</div>
		</>
	);
};

export default Hero;
