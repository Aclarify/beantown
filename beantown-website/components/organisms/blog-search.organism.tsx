import Image from 'next/image';
import FormInput from 'components/atoms/form-input.atom';
import FormLabel from 'components/atoms/form-label.atom';

const BlogSearchInput: React.FC = () => {
	return (
		<div className="md: mb-8 flex w-[310px] items-center gap-4 md:w-[480px] xl:w-[640px]">
			<FormLabel inputId="search" labelText="Search" className="rich-text" />
			<div className="relative w-full">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4">
					<Image
						src={'/images/blogs/icons/icon-search.svg'}
						alt={'close-icon'}
						width={18}
						height={18}
						className="w-[14px] md:w-[18px]"
					/>
				</div>
				<FormInput
					id="search"
					type="search"
					placeholderText=""
					name={'search'}
					borderColor="gray-shade-3"
					className="rich-text py-0 pl-8 leading-[2em] md:pl-12"
				/>
			</div>
		</div>
	);
};

export default BlogSearchInput;
