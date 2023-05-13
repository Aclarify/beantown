import { useMemo, useContext, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import FormInput from 'components/atoms/form-input.atom';
import FormLabel from 'components/atoms/form-label.atom';
import { SearchContext } from 'contexts/blogs/blog.context';
import { connectSearchBox } from 'react-instantsearch-dom';
import { debounce } from 'lodash';

const CustomSearchBox: React.FC = () => {
	// Get the search query, current page number and filters from the SearchContext
	const { setQuery, setPage, setFilters } = useContext(SearchContext);

	// Set initial search input state to empty string
	const [input, setInput] = useState<string>('');

	// Create a ref to store the debounced search function
	const debouncedSearchRef = useRef<ReturnType<typeof debounce>>();

	// Create a memoized handleSearch function that debounce the search input
	const handleSearch = useMemo(() => {
		return debounce((query: string) => {
			// Reset the page number to 0 and set the new search query
			setPage(0);
			setQuery(query);
		}, 500);
	}, [setQuery, setPage]);

	// Store the handleSearch function in the ref and cancel any previous debounced search function
	useEffect(() => {
		debouncedSearchRef.current = handleSearch;
		return () => {
			debouncedSearchRef.current?.cancel();
		};
	}, [handleSearch]);

	// Handle the input change event and call the debounced search function with the new input value
	const handleInputChange = (
		e: React.SyntheticEvent<HTMLInputElement> & { key: string }
	) => {
		const value = e.currentTarget.value;
		setInput(value);
		if (e.key !== 'Enter') {
			debouncedSearchRef.current?.(value);
		}
	};

	// Handle the Enter key down event and cancel the debounced search function if Enter key is pressed
	const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			const latestInput = input.trim();
			if (latestInput) {
				// Clear the search query and input state and add the new search filter
				setQuery('');
				setInput('');
				setFilters((prevFilters) => [...prevFilters, input]);
			}
			debouncedSearchRef.current?.cancel();
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
					onChange={handleInputChange}
					onKeyDown={handleInputKeyDown}
					borderColor="gray-shade-3"
					className="rich-text py-0 pl-8 leading-[2em] lg:pl-12"
				/>
			</div>
		</div>
	);
};

export default connectSearchBox(CustomSearchBox);
