import React from 'react';

const Link = ({ key, className, href, children}) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

    return (
      <a 
        key={key} 
        href={href} 
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
};

export default Link;