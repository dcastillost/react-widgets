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
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (<div>
    {/* <Accordion items={items}/> */}
    {/* <Search /> */}
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle dropdown
      </button>
    </div>
    {showDropdown ?
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> : null
    }
  </div>);
};

export default App;