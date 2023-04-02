import { useRef, useState, useEffect } from 'react';

type UseInView = (
	threshold?: number
) => [React.RefObject<HTMLDivElement>, boolean];

const useInView: UseInView = (threshold) => {
	const ref = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView(true);
					}
				});
			},
			{
				threshold: threshold || 0.1,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return [ref, inView];
};

export default useInView;
