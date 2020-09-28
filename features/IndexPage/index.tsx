import React from 'react';
import BaseLayout from 'features/core/BaseLayout';
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
const dp = require('./imgs/dp.jpg');
/* eslint-enable @typescript-eslint/no-var-requires */

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 200,
    height: 200,
    border: `2px solid ${theme.palette.common.white}`,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <BaseLayout>
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          mt={{ xs: 4, sm: 8, md: 12 }}
          py={3}
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
            Full-stack engineer with 7+ years of experience building world
            changing products
          </Typography>
          <Typography variant="caption">
            #ruby #rails #nodejs #react #android #typescript
          </Typography>
          <Box mt={3} />
          <Typography variant="body2">
            Reach me @ &nbsp;
            <Link
              naked
              href="mailto:hi@vishalvijay.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              hi@vishalvijay.me
            </Link>
          </Typography>
          <Box display="flex" mt={2}>
            <Link
              naked
              href="https://github.com/vishalvijay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
            &nbsp; &nbsp;
            <Link
              naked
              href="https://twitter.com/0vishalvijay0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Link>
            &nbsp; &nbsp;
            <Link
              naked
              href="https://www.linkedin.com/in/0vishalvijay0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
            &nbsp; &nbsp;
            <Link
              naked
              href="https://stackoverflow.com/users/1866804/vishal-vijay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faStackOverflow} size="lg" />
            </Link>
          </Box>
        </Box>
      </Container>
    </BaseLayout>
  );
};

export default Home;
