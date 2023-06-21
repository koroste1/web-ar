'use client';

import { ReactNode } from 'react';
import { Header } from './header';
import { XrContextProvider } from '@shared/ui/layout/xr-context/xr-context.provider';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <body>
      <XrContextProvider>
        <Header />

        {children}
      </XrContextProvider>
    </body>
  );
}
