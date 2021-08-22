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
        content="Fullstack Engineer - 10x engineer, entrepreneur, and mentor with 8+ years of solid experience building consumer-facing software. Skilled in cloud computing, scaling the infrastructure, and full-stack Node.js/RoR/Android/React. Expert in creating scalable systems from scratch. #rubyonrails #nodejs #reactjs #android #ruby #typescript #javascript #java #kotlin #mysql #postgressql #mongodb #firestore #graphql #html #css #redux #nextjs #drools #firebase #aws #gcp #solr #elasticsearch #redis #expressjs #webcomponent #microservices #grpc #docker #cicd #distributedsystems #bigquery #googleanalytics #cloudcomputing #agilemethodologies #scalability #datavisualization"
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
