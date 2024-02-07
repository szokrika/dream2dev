import React from 'react';

function Link({ href, children, className }) {
  return (
    <a href={href} className={`link ${className}`}>
      {children}
    </a>
  );
}

export default Link;
