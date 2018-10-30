import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AddNote from "./addingNotes";
import Calculator from "./todo";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
