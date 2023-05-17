
import React from 'react'
import Image from 'next/image';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';

interface Props{
    logoImage : any;
}

const JobApplicationModal : (React.FC<Props>) = (props) => {
   
	return (
		<div className=" flex w-full flex-col items-center  ">
			<div className=" h-[60px] w-[170px]   md:h-[80px] md:w-[230px] ">
				<CMSImageWrapper
					altText={props.logoImage.asset?.altText || ''}
					image={props.logoImage || null}
					style={{
						objectFit: 'contain',
					}}
				/>
				{/* <Image
					src={props.logoImage}
					alt={'Logo Image'}
					width={100}
					height={100}
					className="mx-auto "
				/> */}
			</div>
			<div className="flex flex-col items-center gap-8 border-secondary-shade-2  border-t-2 w-full ">
				<div className='pt-8'>

					<Image
						src={'/images/job-application/job-application-tick-image.svg'}
						alt={'Blue Tick Image For Successfull Submission'}
						width={75}
						height={75}
						//className="h-[75px] h-[110px]  w-[110px] w-[75px] object-cover"
					/>
				</div>
				<div>
					<p className="subtitle text-center">
						Your application was successfully submitted!
					</p>
				</div>
			</div>
		</div>
	);
};

export default JobApplicationModal;