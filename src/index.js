import React from 'react';
import * as ReactDOM from 'react-dom/client';

import './index.css'

const App = () => (
  <div className="title">Hello World</div>
);

ReactDOM
  .createRoot(document.querySelector('#app'))
  .render(<App />);
