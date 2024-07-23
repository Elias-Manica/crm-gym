import { TopMenu } from '@/ui';
import '../ui/index.css';

import { NextUIProvider } from '@nextui-org/react';

type ProvidersType = { children: React.ReactNode };

export function Providers({ children }: Readonly<ProvidersType>) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <TopMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
