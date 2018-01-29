import React from 'react';
import { render } from 'react-dom';

import ResizeObserver from './src/index';

const App = () => {
  return (
    <div style={{ padding: 100 }}>
      <div
        style={{
          width: '50vw',
          padding: 30,
          paddingTop: 50,
          border: '10px solid red'
        }}
      >
        test<ResizeObserver
          onResize={({ width, height }) => {
            console.log(width, height);
          }}
        />
      </div>
    </div>
  );
};
render(<App />, document.getElementById('app'));
