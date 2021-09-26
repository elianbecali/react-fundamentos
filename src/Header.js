import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default function Header({ title, children, onToggleTheme }) {
  return (
    <>
      <h1>{title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {children}
    </>
  );
}

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`
};
