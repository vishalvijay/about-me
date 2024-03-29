import React from 'react';
import {
  Typography,
  Box,
  Container,
  Avatar,
  makeStyles,
} from '@material-ui/core';
import Link from 'components/Link/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

/* eslint-disable @typescript-eslint/no-var-requires */
const dp = require('../imgs/dp.jpg');
/* eslint-enable @typescript-eslint/no-var-requires */

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 200,
    height: 200,
    border: `2px solid ${theme.palette.common.white}`,
  },
}));

const AboutMe: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
        <Avatar alt="Vishal Vijay" src={dp} className={classes.avatar} />
        <Box mt={2} />
        <Typography variant="h3">Vishal Viay</Typography>
        <Typography variant="subtitle1" gutterBottom>
          No Coffee? No worries... I can still code &nbsp;
          <span role="img" aria-label="Cool">
            😎
          </span>
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Full-stack engineer with 8+ years of experience building world
          changing products
        </Typography>
        <Typography variant="caption">
          #rubyonrails #nodejs #reactjs #android #ruby #typescript #javascript
          #java #kotlin #sql #mysql #postgressql #mongodb #firestore #graphql
          #html #css #redux #nextjs #drools #firebase #aws #gcp #solr
          #elasticsearch #redis #expressjs #webcomponent #microservices #grpc
          #docker #cicd #distributedsystems #bigquery #googleanalytics
          #cloudcomputing #agilemethodologies #scalability #datavisualization
        </Typography>
        <Box mt={3} />
        <Typography variant="body2">
          Reach me @ &nbsp;
          <Link
            href="mailto:hi@vishalvijay.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            hi@vishalvijay.me
          </Link>
        </Typography>
        <Box display="flex" mt={2}>
          <Link
            href="https://github.com/vishalvijay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
          &nbsp; &nbsp;
          <Link
            href="https://twitter.com/0vishalvijay0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </Link>
          &nbsp; &nbsp;
          <Link
            href="https://www.linkedin.com/in/0vishalvijay0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Link>
          &nbsp; &nbsp;
          <Link
            href="https://stackoverflow.com/users/1866804/vishal-vijay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faStackOverflow} size="lg" />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;
