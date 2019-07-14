import React, { useState } from 'react';
import Tile from 'react-bulma-components/lib/components/tile'

const MenuContext = React.createContext([{}, () => {}]);

const MenuProvider = (props) => {
  const [state, setState] = useState({open: false});
  return (
    <MenuContext.Provider value={[state, setState]}>
      {props.children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };