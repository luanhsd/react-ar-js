import React from 'react';

function App() {
  return (
    <a-scene vr-mode-ui='enabled:false' embedded arjs='debugUIEnabled:false;'>
      <a-marker preset='hiro'>
        <a-box color='red' />
      </a-marker>
      <a-entity camera />
    </a-scene>
  );
}

export default App;
