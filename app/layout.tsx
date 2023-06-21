import { ReactNode } from 'react';
import { Layout } from '@shared/ui/layout';
import '@app/globals/style.scss';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Layout>{children}</Layout>
    </html>
  );
}
