import React from 'react';
import NextHead from 'next/head';
import theme from 'features/core/theme';

interface HeadProps {
  title?: string;
}

const appName = 'About Vishal';

const Head: React.FC<HeadProps> = ({ title }) => {
  const newTitle = [title, appName].filter((s) => !!s).join(' - ');

  return (
    <NextHead>
      <title>{newTitle}</title>
      <meta
        name="description"
        content="Fullstack Engineer - #ruby #rails #node #typescript #javascript #react #android"
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      {/* PWA primary color */}
      <meta name="theme-color" content={theme.palette.primary.main} />
    </NextHead>
  );
};

Head.defaultProps = {
  title: null,
};

export default Head;

export type { HeadProps };
