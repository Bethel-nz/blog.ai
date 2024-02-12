import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedNumber = ({ value }: { value: number }) => {
	const spring = useSpring(0, { mass: 2.5, stiffness: 20, damping: 10 });
	const display = useTransform(spring, (current) =>
		Math.round(current).toLocaleString()
	);
	useEffect(() => {
		const timeout = setTimeout(() => {
			spring.set(value);
		}, 500);
		return () => clearTimeout(timeout);
	}, [spring, value]);

	return <motion.span>{display}</motion.span>;
};

export default AnimatedNumber;
