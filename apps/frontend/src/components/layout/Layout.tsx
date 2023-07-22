import React from 'react';
import Header from '../header';
import Footer from '../footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <hr />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
