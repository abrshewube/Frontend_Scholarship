// components/PageWrapper.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children, title }) => {
  const location = useLocation();

  useEffect(() => {
    const routeTitle = title ? `${title} ` : 'Scholarship Central';
    document.title = routeTitle;
  }, [location, title]);

  return (
    <>
      <Helmet>
        <meta name="description" content="Find and apply for scholarships." />
      </Helmet>
      {children}
    </>
  );
};

export default PageWrapper;
