import React from 'react';
import Link from './Link';

const paths = [
  {
    pathname: '/',
    label: 'Accordion'
  },
  {
    pathname: '/list',
    label: 'Search'
  },
  {
    pathname: '/dropdown',
    label: 'Dropdown'
  },
  {
    pathname: '/translate',
    label: 'Translate'
  },
];

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      {paths.map((path) => {
        return (
          <Link 
            key={path.label} 
            href={path.pathname} 
            className="item"
          >
            {path.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;