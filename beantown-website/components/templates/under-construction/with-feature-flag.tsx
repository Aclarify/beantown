import React from 'react';
import UnderConstructionSection from './under-construction.section';
import { FEATURE_FLAG } from '@typing/common/enums/flags';

interface FeatureFlagComponentProps {
	envVariable: string;
	children: React.ReactNode;
}

export const withFeatureFlag = <WrapperComponentProps extends object>(
	WrappedComponent: React.ComponentType<WrapperComponentProps>,
	envVariable: string
): React.FC<WrapperComponentProps> => {
	const ComponentWithFeatureFlag: React.FC<WrapperComponentProps> = (props) => {
		if (envVariable === FEATURE_FLAG.OFF) {
			return <UnderConstructionSection />;
		}

		return <WrappedComponent {...(props as WrapperComponentProps)} />;
	};

	return ComponentWithFeatureFlag;
};

// usage
// export default withFeatureFlag(WithGlobalContent<CareersContentProps>(CareerPage), 'DISABLE');

export const FeatureFlagComponent: React.FC<FeatureFlagComponentProps> = ({
	envVariable,
	children,
}) => {
	if (envVariable === FEATURE_FLAG.OFF) {
		return <UnderConstructionSection />;
	}

	return <>{children}</>;
};
