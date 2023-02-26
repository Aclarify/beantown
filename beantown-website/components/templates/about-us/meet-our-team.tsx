import Button from "components/atoms/button.atom";
import CtaWrapper from "components/molecules/cta-wrapper.molecule";
import ContentWrapper from "components/organisms/content-wrapper.organism";
import Image from "next/image";

const MeetOurTeam =()=>{
    return (
			<section id="meet-our-team-section">
				<div id="section-container">
					<div id="title-container" className="flex flex-col">
						<ContentWrapper>
							<ContentWrapper.Title className=" mb-3 lg:mb-4">
								<h1 className="title-5 lg:title-2 text-primary-shade-1 mt-10 text-center">
									{'Meet Our Team'}
								</h1>
							</ContentWrapper.Title>
							<ContentWrapper.Description>
								<p className="para-4 lg:subtitle-4 text-primary-shade-1 my-4 justify-center text-center md:mx-40 ">
									{
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
									}
								</p>
							</ContentWrapper.Description>
						</ContentWrapper>
					</div>
					<div
						id="cards-container"
						className=" grid grid-cols-2 gap-4 lg:grid-cols-3 "
					>
						<div
							id="card"
							className="flex h-[240] w-[480] flex-col space-x-4 rounded-lg bg-white shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] md:flex md:flex-row "
						>
							<Image
								src={'/images/about-us/team-member-1.svg'}
								height={'200'}
								width={'200'}
								alt={''}
								className=" rounded-lg "
							/>

							<div
								id="profile-Info"
								className=" flex flex-col items-center justify-center space-y-2 md:space-y-10"
							>
								<div id="name" className="flex flex-col">
									<span>Guy Hawkins</span>
								</div>
								<div id="Designation">
									<span>Office Manager</span>
								</div>
								<div
									id="socialMediaIconGroupMobile"
									className="flex items-center space-x-4 pb-1 align-middle"
								>
									{/* {socialMediaIcons?.map((icon, index) => {
										return (
											icon && ( */}
									<Image
										// key={}
										alt={''}
										width={8}
										height={16}
										src={'/images/about-us/fb.svg'}
									/>
									<Image
										// key={}
										alt={''}
										width={16}
										height={13}
										src={'/images/about-us/twitter.svg'}
									/>
									<Image
										// key={}
										alt={''}
										width={8}
										height={16}
										src={'/images/about-us/fb.svg'}
									/>
									{/* )
										);
									})} */}
								</div>
							</div>
						</div>
						<div
							id="card"
							className=" flex h-[240] w-[480] flex-col space-x-4 rounded-lg bg-white shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] md:flex md:flex-row "
						>
							<Image
								src={'/images/about-us/team-member-1.svg'}
								height={'200'}
								width={'200'}
								alt={''}
								className=" rounded-lg "
							/>

							<div
								id="profile-Info"
								className=" flex flex-col items-center justify-center space-y-2 md:space-y-10"
							>
								<div id="name" className="flex flex-col">
									<span>Guy Hawkins</span>
								</div>
								<div id="Designation">
									<span>Office Manager</span>
								</div>
								<div
									id="socialMediaIconGroupMobile"
									className="flex items-center space-x-4 align-middle"
								>
									{/* {socialMediaIcons?.map((icon, index) => {
										return (
											icon && ( */}
									<Image
										// key={}
										alt={''}
										width={8}
										height={16}
										src={'/images/about-us/fb.svg'}
									/>
									<Image
										// key={}
										alt={''}
										width={16}
										height={13}
										src={'/images/about-us/twitter.svg'}
									/>
									<Image
										// key={}
										alt={''}
										width={8}
										height={16}
										src={'/images/about-us/fb.svg'}
									/>
									{/* )
										);
									})} */}
								</div>
							</div>
						</div>
						<div
							id="card"
							className="flex h-[240] w-[480] flex-col space-x-4 rounded-lg bg-white shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] md:flex md:flex-row "
						>
							<Image
								src={'/images/about-us/team-member-1.svg'}
								height={'200'}
								width={'200'}
								alt={''}
								className=" rounded-lg "
							/>

							<div
								id="profile-Info"
								className=" flex flex-col items-center justify-center space-y-2 md:space-y-10"
							>
								<div id="name" className="flex flex-col">
									<span>Guy Hawkins</span>
								</div>
								<div id="Designation">
									<span>Office Manager</span>
								</div>
								<div
									id="socialMediaIconGroupMobile"
									className="flex items-center space-x-4 pb-1 align-middle"
								>
									{/* {socialMediaIcons?.map((icon, index) => {
										return (
											icon && ( */}
									<Image
										// key={}
										alt={''}
										width={8}
										height={16}
										src={'/images/about-us/fb.svg'}
									/>
									<Image
										// key={}
										alt={''}
										width={16}
										height={13}
										src={'/images/about-us/twitter.svg'}
									/>
									<Image
										// key={}
										alt={''}
										width={8}
										height={16}
										src={'/images/about-us/fb.svg'}
									/>
									{/* )
										);
									})} */}
								</div>
							</div>
						</div>
						<div
							id="card"
							className="flex h-[240] w-[480] flex-col space-x-4 rounded-lg bg-white shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] md:flex md:flex-row "
						>
							<Image
								src={'/images/about-us/team-member-1.svg'}
								height={'200'}
								width={'200'}
								alt={''}
								className=" rounded-lg "
							/>

							<div
								id="profile-Info"
								className=" flex flex-col items-center justify-center space-y-2 md:space-y-10"
							>
								<div id="name" className="flex flex-col">
									<span>Guy Hawkins</span>
								</div>
								<div id="Designation">
									<span>Office Manager</span>
								</div>
								<div
									id="socialMediaIconGroupMobile"
									className="flex items-center space-x-4 pb-1 align-middle"
								>
									{/* {socialMediaIcons?.map((icon, index) => {
										return (
											icon && ( */}
									<Image
										// key={}
										alt={''}
										width={8}
										height={16}
										src={'/images/about-us/fb.svg'}
									/>
									<Image
										// key={}
										alt={''}
										width={16}
										height={13}
										src={'/images/about-us/twitter.svg'}
									/>
									<Image
										// key={}
										alt={''}
										width={8}
										height={16}
										src={'/images/about-us/fb.svg'}
									/>
									{/* )
										);
									})} */}
								</div>
							</div>
						</div>
						<div
							id="card"
							className="flex h-[240] w-[480] flex-col space-x-4 rounded-lg bg-white shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] md:flex md:flex-row "
						>
							<Image
								src={'/images/about-us/team-member-1.svg'}
								height={'200'}
								width={'200'}
								alt={''}
								className=" rounded-lg "
							/>

							<div
								id="profile-Info"
								className=" flex flex-col items-center justify-center space-y-2 md:space-y-10"
							>
								<div id="name" className="flex flex-col">
									<span>Guy Hawkins</span>
								</div>
								<div id="Designation">
									<span>Office Manager</span>
								</div>
								<div
									id="socialMediaIconGroupMobile"
									className="flex items-center space-x-4 pb-1 align-middle"
								>
									{/* {socialMediaIcons?.map((icon, index) => {
										return (
											icon && ( */}
									<Image
										// key={}
										alt={''}
										width={8}
										height={16}
										src={'/images/about-us/fb.svg'}
									/>
									<Image
										// key={}
										alt={''}
										width={16}
										height={13}
										src={'/images/about-us/twitter.svg'}
									/>
									<Image
										// key={}
										alt={''}
										width={8}
										height={16}
										src={'/images/about-us/fb.svg'}
									/>
									{/* )
										);
									})} */}
								</div>
							</div>
						</div>
					</div>
					<div className="items-center pt-4 text-center lg:mb-16">
						<CtaWrapper.CTA className="para-3 lg:para-2 bg-primary-shade-1 h-[52px] w-[184px] rounded-lg text-white py-1 px-4 tracking-wide  md:py-2  md:px-8 lg:h-[64px] lg:w-[210px] lg:tracking-wider ">
							<p>{'Load More'}</p>
						</CtaWrapper.CTA>
					</div>
				</div>
			</section>
		);
}
export default MeetOurTeam;