import React from 'react';
import { Maybe } from 'yup';
import { ImageIcon, Nav } from '@typing/gql/graphql';
import BookNowButton from 'components/atoms/book-now-button.atom';
import { getIsFeatureFlagOn } from 'components/templates/under-construction/with-feature-flag';
import Header from './nav';

type FeatureFlagHeaderProps = {
	flagValue?: string;
	logoLight: Maybe<ImageIcon> | undefined;
	logoDark: Maybe<ImageIcon> | undefined;
	headerData: Nav;
};

const FeatureFlagHeader: React.FC<FeatureFlagHeaderProps> = ({
	flagValue,
	logoLight,
	logoDark,
	headerData,
}) => {
	const isFeatureFlagOn = getIsFeatureFlagOn(flagValue);

	const commonHeaderProps = {
		content: headerData,
		mobileButtonText: headerData.headerButton?.text || '',
	};

	const headerProps = isFeatureFlagOn
		? {
				fontColor: 'text-white',
				logoDesktop: logoLight?.image,
				logoMobile: logoDark?.image,
				mobileBgColor: 'bg-secondary-shade-3',
				...commonHeaderProps,
		  }
		: {
				mobileBgColor: 'bg-primary-white-shade-1',
				fontColor: 'text-primary-shade-1',
				logoDesktop: logoDark?.image,
				logoMobile: logoDark?.image,
				...commonHeaderProps,
		  };

	const bookNowButtonProps = {
		fontColor: isFeatureFlagOn ? 'text-primary-shade-1' : 'text-white',
		bgColor: isFeatureFlagOn ? 'bg-white' : 'bg-primary-shade-1',
		buttonStyle: 'headerButton',
	};

	return (
		<Header {...headerProps}>
			<div className="hidden lg:flex lg:justify-end">
				<BookNowButton {...bookNowButtonProps}>
					{headerData.headerButton?.text}
				</BookNowButton>
			</div>
		</Header>
	);
};

export default FeatureFlagHeader;
