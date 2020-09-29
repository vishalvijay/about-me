import React from 'react';
import {
  Typography,
  Box,
  Container,
  ListItem,
  ListItemText,
  List,
  Paper,
  ListItemSecondaryAction,
} from '@material-ui/core';
import {
  parseDateFromDateValue,
  formatToHumenStringFromDate,
} from 'utils/dateUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Post = {
  id: number;
  title: string;
  url: string;
  date: string;
  readTime?: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: 'DataRepoArch - The path we traveled to reach react-query',
    url:
      'https://dev.to/vishalvijay/datarepoarch-the-path-we-traveled-to-reach-react-query-l9l',
    date: '2020-09-27',
    readTime: '8 min',
  },
  {
    id: 2,
    title:
      'FF protect : an open source contact tracing system for potential COVID-19 carriers or patients',
    url:
      'https://www.farefirst.com/blog/corona-covid19-people-track-ffprotect-bluethooth/',
    date: '2020-03-24',
    readTime: '5 min',
  },
  {
    id: 3,
    title: 'The story behind salesforce-orm Gem',
    url: 'https://dev.to/vishalvijay/the-story-behind-salesforce-orm-gem-391h',
    date: '2018-01-09',
    readTime: '4 min',
  },
].map((p) => ({
  ...p,
  date: formatToHumenStringFromDate(parseDateFromDateValue(p.date)),
}));

const MyWriteUps: React.FC = () => (
  <Container maxWidth="sm">
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
    >
      <Typography variant="h4">My write-ups</Typography>
      <Box mt={3} />
      <Paper elevation={0}>
        <Box px={2}>
          <List>
            {posts.map((post, i) => {
              const readText = post.readTime ? `${post.readTime} read` : null;

              const secondaryText = [post.date, readText]
                .filter((v) => !!v)
                .join(' · ');

              return (
                <ListItem
                  key={post.id}
                  button
                  divider={i < posts.length - 1}
                  component="a"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItemText
                    primary={post.title}
                    secondary={secondaryText}
                  />
                  <ListItemSecondaryAction>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Paper>
    </Box>
  </Container>
);

export default MyWriteUps;
