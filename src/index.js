import React from 'react';
import * as ReactDOM from 'react-dom/client';

import styles from './index.css';

const App = () => (
  <div className={styles.title}>Hello World</div>
);

ReactDOM
  .createRoot(document.querySelector('#app'))
  .render(<App />);
