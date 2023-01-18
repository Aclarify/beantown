import React from 'react';
import { useRouter } from 'next/router';
import client from '../lib/clients/sanity/sanity.client';

const About: React.FC = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<>
			<section>
				{/* <img
					className="w-full"
					src="images/aboutUsHeroImage.svg"
					alt="Home Page Hero Image"
				></img> */}
				<div className=" "></div>
			</section>
		</>
	);
};

export async function getStaticProps(context: any) {
	const post = await client.fetch('*[_type == "aboutUs"][0]');
	return {
		props: {
			post,
		},
	};
}

export default About;
