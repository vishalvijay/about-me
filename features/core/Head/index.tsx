import React from 'react';
import NextHead from 'next/head';
import theme from 'features/core/theme';

interface HeadProps {
  title?: string;
}

const appName = "Zelish What's Cooking - Recipe Contest";

const Head: React.FC<HeadProps> = ({ title }) => {
  const newTitle = [title, appName].filter((s) => !!s).join(' - ');

  return (
    <NextHead>
      <title>{newTitle}</title>
      <meta
        name="description"
        content="Are you a lockdown chef or recipe vlogger? Here is your chance to showcase your culinary skills. Participate in Zelish’s 1 min Recipe Contest"
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
