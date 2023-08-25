import React from 'react';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({
  className,
  children
}) => {
  return (
    <header className={ className }>
      {children}
    </header>
  )
}
export default Header;