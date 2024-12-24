import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from './registry';
import ReactQueryProvider from '@/app/components/ReactQueryProvider';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'PhysicalNote',
  description: '피지컬노트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col h-svh antialiased">
        <StyledComponentsRegistry>
          <ReactQueryProvider>
            <LoadingSpinner />
            {children}
            <ToastContainer autoClose={1000} />
          </ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
