import React from 'react';
import {any, string} from 'prop-types';
import { Link } from 'next';

export default function NavLink(props) {
  const {title, children, className, to} = props;
  return (
    <Link
      {...props}
      to={to}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? 'inherit' : 'inherit',
          },
          className: isCurrent ? className + ' active' : className,
        };
      }}
    >
      {title && <span>{title}</span>}
      {children}
    </Link>
  )};

NavLink.propTypes = {
  title: string,
  className: string,
  children: any,
};
