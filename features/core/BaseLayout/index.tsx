import React from 'react';
import useInitReactGa from 'utils/useInitReactGa';
import Head, { HeadProps } from '../Head';

interface BaseLayoutProps extends HeadProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { children, ...headProps } = props;

  useInitReactGa();

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Head {...headProps} />
      {children}
    </>
  );
};

export default BaseLayout;

export type { BaseLayoutProps };
