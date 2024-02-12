'use client';
import { ReactNode } from 'react';

import { NextUIProvider as UIProvider } from '@nextui-org/react';

export function NextUIProvider({ children }: { children: ReactNode }) {
	return <UIProvider>{children}</UIProvider>;
}
