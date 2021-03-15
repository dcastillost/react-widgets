import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

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

const App = () => {
  return(<div>
    <Accordion items={items}/>
    <Search />
  </div>);    
};

export default App;