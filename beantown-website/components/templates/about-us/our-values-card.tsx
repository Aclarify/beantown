import Image from 'next/image';
const OurValuesCards = () => {
	return (
		<>
			<div id="card-container" className="flex items-center gap-4 p-2">
				<div
					id="card-item"
					className="bg-secondary-shade-3 h-[140px] w-[120px] rounded-lg "
				>
					<Image
						alt={'Transparency icon'}
						width={80}
						height={80}
						src={'/images/about-us/transparency.svg'}
						className=" mx-auto mt-8 place-items-center"
					/>
				</div>
				<div>
					<span>Transparency</span>
				</div>
			</div>
		</>
	);
};
export default OurValuesCards;
