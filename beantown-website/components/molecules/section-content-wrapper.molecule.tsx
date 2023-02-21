import React from 'react';
interface SectionContentWrapperProps {
	children: React.ReactNode;
}

const SectionContentWrapper: React.FC<SectionContentWrapperProps> = ({
	children,
}) => {
	return (
		<div id="content-wrapper" className="px-5 md:px-8 2xl:px-[120px]">
			{children}
		</div>
	);
};

export default SectionContentWrapper;
