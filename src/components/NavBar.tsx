import { HStack } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import { SearchInput } from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/" style={{ fontWeight: '900', fontSize: '1.5rem' }}>
        RAWG
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
