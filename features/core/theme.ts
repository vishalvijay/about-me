import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const palette = {
  primary: {
    light: '#c5b9fc',
    main: '#6341ff',
    dark: '#2f03fc',
  },
  secondary: {
    light: '#f7753e',
    main: '#ff4c00',
    dark: '#a63302',
  },
};

export default responsiveFontSizes(
  createMuiTheme({
    palette,
  })
);
