import React from 'react';
import * as ReactDOM from 'react-dom/client';

// import './index.css'
import styles from './index.m.css';

const App = () => (
  <div className={styles.title}>Hello World</div>
);
// const App = ({ title }) => (
//   <div className="title">{title}</div>
// );


const title = 'Minimal React Webpack Babel Setup';

ReactDOM
  .createRoot(document.querySelector('#app'))
  .render(<App />);
