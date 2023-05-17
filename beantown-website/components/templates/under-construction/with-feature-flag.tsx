import React from 'react';
import UnderConstructionSection from './under-construction.section';
import { FEATURE_FLAG } from '@typing/common/enums/flags';

interface FeatureFlagComponentProps {
	envVariable?: string;
	children: React.ReactNode;
}

/**
 * HOC to check if feature flag is on or off
 * @param WrappedComponent - Component to render if feature flag is on
 * @param envVariable - Environment variable to check if feature flag is on or off
 * @returns - WrappedComponent if feature flag is on, UnderConstructionSection if feature flag is off
 */
export const withFeatureFlag = <
	WrapperComponentProps extends Record<string, any>
>(
	WrappedComponent: React.ComponentType<WrapperComponentProps>,
	envVariable?: string
): React.FC<WrapperComponentProps> => {
	const ComponentWithFeatureFlag: React.FC<WrapperComponentProps> = (props) => {
		if (envVariable === FEATURE_FLAG.ON) {
			return <WrappedComponent {...(props as WrapperComponentProps)} />;
		}
		return <UnderConstructionSection />;
	};

	return ComponentWithFeatureFlag;
};

/**
 * Feature flag component
 * @param envVariable - Environment variable to check if feature flag is on or off
 * @param children - Children to render if feature flag is on
 * @returns - Children if feature flag is on, null if feature flag is off
 */
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
