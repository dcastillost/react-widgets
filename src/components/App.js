import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Header from './Header';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';

const items = [
  {
    title: 'React',
    content: 'Front end js library'
  },
  {
    title: 'Vue',
    content: 'Another fejsl'
  },
  {
    title: 'How to use React',
    content: 'You can never learn how to use it.'
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
  {
    label: 'Green',
    value: 'green'
  }
];

const paths = [
  {
    pathname: '/',
    label: 'Accordion'
  },
  {
    pathname: '/list',
    label: 'Search'
  },
  {
    pathname: '/dropdown',
    label: 'Dropdown'
  },
  {
    pathname: '/translate',
    label: 'Translate'
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path={paths[0].pathname}>
        <Accordion 
          items={items}
        />
      </Route>
      <Route path={paths[1].pathname}>
        <Search />
      </Route>
      <Route path={paths[2].pathname}>
        <Dropdown
          label="Choose a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path={paths[3].pathname}>
        <Translate />
      </Route>
    </div>);
};

export default App;