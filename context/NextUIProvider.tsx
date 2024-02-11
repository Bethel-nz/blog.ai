import { ReactNode } from 'react';

import { NextUIProvider as Provider } from '@nextui-org/react';

export function NextUIProvider({ children }: { children: ReactNode }) {
	return <Provider>{children}</Provider>;
}
