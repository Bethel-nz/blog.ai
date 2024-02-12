'use client';
import React, { ReactNode, Key } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
type Props = {
	children: ReactNode;
};
type staggerProps = {
	index: number;
} & Props;

export function StaggerWrapper({ children, index }: staggerProps) {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
}
