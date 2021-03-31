import React, { useState } from 'react';
// import Accordion from './Accordion';
// import Dropdown from './Dropdown';
// import Search from './Search';
import Translate from './Translate';

const items = [
  {
    title: 'React',
    content: 'Front end js library'
  },
  {
    title: 'Vue',
    content: 'Another fejsl'
  }
];

const options = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
];

const App = () => {

  return (
  <div>
    <Translate />
  </div>);
};

export default App;