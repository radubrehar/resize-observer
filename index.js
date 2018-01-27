import React from 'react';
import { render } from 'react-dom';

import ResizeObserver from './src/index';

const App = () => {
  return <ResizeObserver />;
};
render(<App />, document.getElementById('app'));
