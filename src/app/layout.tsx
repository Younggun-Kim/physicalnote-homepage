import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from './registry';
import ReactQueryProvider from '@/app/components/ReactQueryProvider';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import { ToastContainer } from 'react-toastify';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import MobileSideMenu from '@/app/components/MobileSideMenu';
import UnSubscriptionModal from '@/app/components/modal/UnSubscriptionModal';

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
    <html
      lang="ko"
      suppressHydrationWarning={true}
    >
      <body className="flex flex-col h-svh antialiased">
        <StyledComponentsRegistry>
          <ReactQueryProvider>
            <LoadingSpinner />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ToastContainer autoClose={1000} />
            <MobileSideMenu />
            <UnSubscriptionModal />
          </ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
