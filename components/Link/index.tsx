import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  Link as MuiLink,
  Box,
  LinkProps as MuiLinkProps,
  makeStyles,
} from '@material-ui/core';

/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-unresolved
const arrow = require('./imgs/arrow.svg?include');
/* eslint-enable @typescript-eslint/no-var-requires */

interface NextComposedProps extends NextLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  arrowIcon: {
    marginLeft: theme.spacing(0.5),
  },
  enableUnderline: {
    textDecoration: 'underline',
  },
}));

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>(
  (props, ref) => {
    const { as, href, ...other } = props;

    if (!href?.toString().startsWith('/')) {
      // eslint-disable-next-line jsx-a11y/anchor-has-content,react/jsx-props-no-spreading
      return <a ref={ref} href={href?.toString()} {...other} />;
    }

    return (
      <NextLink href={href} as={as}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,react/jsx-props-no-spreading */}
        <a ref={ref} {...other} />
      </NextLink>
    );
  }
);

type CMuiLinkProps = Omit<MuiLinkProps, 'href'>;

interface LinkProps extends NextLinkProps, CMuiLinkProps {
  activeClassName?: string;
  naked?: boolean;
  className?: string;
  children?: React.ReactNode;
  enableArrow?: boolean;
  enableUnderline?: boolean;
}

interface WrppedLinkProps extends LinkProps {
  // eslint-disable-next-line prettier/prettier
  innerRef: (((instance: HTMLAnchorElement) => void) | React.MutableRefObject<HTMLAnchorElement>);
}

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link: React.FC<WrppedLinkProps> = (props) => {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    children,
    enableArrow,
    enableUnderline,
    ...other
  } = props;

  const classes = useStyles();

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
    [classes.enableUnderline]: enableUnderline,
  });

  let newChildren = children;

  if (enableArrow) {
    newChildren = (
      <Box component="span">
        {children}
        <i
          className={classes.arrowIcon}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: arrow }}
        />
      </Box>
    );
  }

  if (naked) {
    return (
      <NextComposed
        className={className}
        ref={innerRef}
        href={href}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...other}
      >
        {newChildren}
      </NextComposed>
    );
  }

  return (
    <MuiLink
      component={NextComposed}
      className={clsx(className)}
      ref={innerRef}
      href={href?.toString()}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {newChildren}
    </MuiLink>
  );
};

Link.defaultProps = {
  naked: false,
};

export default React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link {...props} innerRef={ref} />
));

export type { LinkProps };
