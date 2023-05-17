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
		if (envVariable === FEATURE_FLAG.ON) {
			return <WrappedComponent {...(props as WrapperComponentProps)} />;
		}
		return <UnderConstructionSection />;
	};

	return ComponentWithFeatureFlag;
};

// usage
// export default withFeatureFlag(WithGlobalContent<CareersContentProps>(CareerPage), 'ON');

export const FeatureFlagComponent: React.FC<FeatureFlagComponentProps> = ({
	envVariable,
	children,
}) => {
	if (envVariable === FEATURE_FLAG.ON) {
		return <>{children}</>;
	}
	// If feature flag is off, return null
	return null;
};
