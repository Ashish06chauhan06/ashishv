import React from 'react';
import ReactDOM from 'react-dom';
import youtuber,{youtuberes, myName, myNames}from './App';
import './index.css';

ReactDOM.render(
<>
  <h2>hlo</h2>
  <h1>hy ashish</h1>
  <li>{youtuber}</li>
  <li>{youtuberes}</li>
  <li>{myName()}</li>
  <li>{myNames()}</li>
</>
,document.getElementById('root')

);
