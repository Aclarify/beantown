import { useEffect, useCallback } from 'react';

const MOUSE_UP = 'mouseup';

const useOutsideClick = (handleClose: () => void, ref: any) => {
	const handleClick = useCallback(
		(event: any) => {
			if (ref?.current?.contains && !ref.current.contains(event.target)) {
				handleClose();
			}
		},
		[handleClose, ref]
	);

	useEffect(() => {
		document.addEventListener(MOUSE_UP, handleClick);

		return () => {
			document.removeEventListener(MOUSE_UP, handleClick);
		};
	}, [handleClick]);
};

export default useOutsideClick;
