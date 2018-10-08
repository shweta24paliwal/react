import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AddNote from "./addingNotes";
import ToDo from "./todo";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ToDo />, document.getElementById('root'));
registerServiceWorker();
