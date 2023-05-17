import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import PostContent from './post.content';
import bottomWave from 'public/images/blogs/blog-posts/blog-posts-bottom-wave.svg';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Image from 'next/image';

const PostContentSection = () => {
	return (
		<section id="post" className="relative z-10">
			<Image
				src={'/images/blog-post/blog-post-right-blob.svg'}
				height={600}
				width={500}
				alt="Right Blob"
				className="absolute right-0 z-[-1] hidden h-[500px] w-[400px] translate-x-[30%] translate-y-[65%] transform lg:block"
			/>
			<Image
				src={'/images/blog-post/blog-post-left-blob.svg'}
				height={400}
				width={400}
				alt="Left Blob"
				className=" absolute left-0 z-[-1] hidden h-[550px] w-[470px] translate-x-[-90%] translate-y-[240%] transform  lg:block xl:translate-x-[-30%]"
			/>

			<SectionContentWrapper>
				<PostContent />
			</SectionContentWrapper>

			<WaveWrapper waveURL={bottomWave}></WaveWrapper>
		</section>
	);
};
export default PostContentSection;
