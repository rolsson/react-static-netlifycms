import React, { useState, forwardRef } from 'react';
import posed, { PoseGroup } from 'react-pose'
import Tile from 'react-bulma-components/lib/components/tile'

export const DrawerContext = React.createContext([{}, () => {}]);

const Drawer = posed.div({
  enter: { x: '0%' },
  exit: { x: '-100%' }
})

const shadeStyle = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 30,
}

const drawerStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  top: 0,
  left: 0,
  bottom: 0,
  width: 500,
  height: '100%',
  zIndex: 31,
}

const Content = posed.div({
  enter: { x: '0%' },
  exit: { x: '-100%' }
})

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export default (props) => {
  const { renderDrawer, children } = props
  const [state, setState] = useState({open: false});
  return (
    <DrawerContext.Provider value={[state, setState]}>
      <PoseGroup>
        {state.open && [
          <Shade key="shade" style={shadeStyle} />,
          <Drawer key="drawer" style={drawerStyle}>
            {renderDrawer && renderDrawer()}
          </Drawer>
        ]}
        </PoseGroup>
      <Content>
        {children}
      </Content>
    </DrawerContext.Provider>
  );
}
