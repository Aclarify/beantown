import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';

interface Props {
	icon: string;
	color?: string;
	size?: number;
	outline?: boolean;
}

export const HeroIcon = (props: Props): JSX.Element => {
	const { icon, color, size, outline = false } = props;

	const { ...icons } = outline ? OutlineIcons : SolidIcons;

	const iconHeight = size && 'h-' + size;
	const iconWidth = size && 'w-' + size;
	// @ts-ignore
	const Icon: JSX.Element = icons[icon];

	// const classes = [
	// 	`${color ? color : 'text-black'}`,
	// 	`h-${size ? size : 6}`,
	// 	`w-${size ? size : 6}`,
	// ];

	const classes = [
		//`${color ? color : 'text-black'}`,
		color ? color : 'text-black',
		size ? iconHeight : 'h-6',
		size ? iconWidth : 'w-6',
	];

	return (
		// @ts-ignore
		<Icon className={classes.join(' ')} />
	);
};
