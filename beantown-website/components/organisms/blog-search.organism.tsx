import { useMemo, useContext, useState } from 'react';
import Image from 'next/image';
import FormInput from 'components/atoms/form-input.atom';
import FormLabel from 'components/atoms/form-label.atom';
import { SearchContext } from 'contexts/blogs/blog.context';
import { connectSearchBox } from 'react-instantsearch-dom';
import { debounce } from 'lodash';

const CustomSearchBox: React.FC = () => {
	const { setQuery, setPage, setFilters } = useContext(SearchContext);
	const [input, setInput] = useState<string>('');

	const handleSearch = useMemo(() => {
		return debounce((query: string) => {
			setPage(0);
			setQuery(query);
		}, 500);
	}, [setQuery, setPage]);

	const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setInput(value);
		handleSearch(value);
	};

	const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && e.currentTarget.value) {
			const value = e.currentTarget.value;
			setFilters((prevFilters) => [...prevFilters, value]);
			setInput('');
			setQuery('');
		}
	};

	return (
		<div className="md: mb-8 flex w-[310px] items-center gap-4 md:w-[480px] xl:w-[640px]">
			<FormLabel inputId="search" labelText="Search" className="rich-text" />
			<div className="relative w-full">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 lg:pl-4">
					<Image
						src={'/images/blogs/icons/icon-search.svg'}
						alt={'close-icon'}
						width={18}
						height={18}
						className="w-[14px] md:w-[15px]  lg:w-[18px]"
					/>
				</div>
				<FormInput
					id="search"
					type="search"
					placeholderText=""
					name={'search'}
					value={input}
					onKeyDown={handleInputKeyDown}
					onChange={handleInputChange}
					borderColor="gray-shade-3"
					className="rich-text py-0 pl-8 leading-[2em] lg:pl-12"
				/>
			</div>
		</div>
	);
};

export default connectSearchBox(CustomSearchBox);
