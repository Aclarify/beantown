
import React from 'react'
import Image from 'next/image';

interface Props{
    logoImage : any;
}

const JobApplicationModal : (React.FC<Props>) = (props) => {
   
	return (
		<div className=" flex w-full flex-col items-center  gap-12 ">
			<div className="  border-primary-color-shade-2 w-full  ml-4  h-auto w-full border-b-2 ">
				<Image
					src={props.logoImage}
					alt={'Logo Image'}
					width={100}
					height={100}
					className="mx-auto "
				/>
			</div>
			<div className="flex flex-col items-center gap-8">
				<div>
					<Image
						src={'/images/job-application/job-application-tick-image.svg'}
						alt={'Blue Tick Image For Successfull Submission'}
						width={100}
						height={100}
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