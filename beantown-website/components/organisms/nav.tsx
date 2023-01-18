import Link from 'next/link';
import React from 'react';

export default function Nav() {
	return (
		<nav className="absolute w-full  ">
			<div className="hidden md:flex max-w-6xl mx-auto  justify-around items-center">
				<div>
					<img
						className="object-cover "
						src="images/logo.svg"
						alt="logo Image"
					></img>
				</div>
				<div className=" text-white items-center text-xl   justify-center ">
					<Link href={'/'} className="p-8 pr-1 group inline-block">
						Home
					</Link>
					<div className="group inline-block">
						<Link
							href={'/'}
							className="outline-none focus:outline-none  px-3 py-1  rounded-sm flex items-center min-w-32"
						>
							<span className="pr-1  flex-1 ">Services</span>
							<span>
								<svg
									className="fill-current h-4 w-4 transform group-hover:-rotate-180
                        transition duration-150 ease-in-out"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</span>
						</Link>
						<ul className="rounded-sm transform scale-0 group-hover:scale-100 absolute  transition duration-500 ease-in-out origin-top min-w-32">
							<Link href={'/'}>
								<li className="rounded-sm px-3 py-1">Electrical Services</li>
							</Link>
							<Link href={'/'}>
								<li className="rounded-sm px-3 py-1 ">Plumbing Services</li>
							</Link>
							<Link href={'/heating-and-cooling'}>
								{' '}
								<li className="rounded-sm px-3 py-1 ">Heating and Cooling</li>
							</Link>
						</ul>
					</div>
					<div className="group inline-block">
						<Link
							href={'/about'}
							className="outline-none focus:outline-none  px-3 py-1 rounded-sm flex items-center min-w-32"
						>
							<span className="pr-1  flex-1">About Us</span>
							<span>
								<svg
									className="fill-current h-4 w-4 transform group-hover:-rotate-180
                        transition duration-150 ease-in-out"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</span>
						</Link>
						<ul
							className="rounded-sm transform scale-0 group-hover:scale-100 absolute 
                          transition duration-150 ease-in-out origin-top min-w-32"
						>
							{/* List Load from cms */}
						</ul>
					</div>
				</div>
				<div className="">
					<button className="border rounded-lg   text-sm  md:text-xl bg-white p-2">
						Book Now
					</button>
				</div>
			</div>
		</nav>
	);
}
