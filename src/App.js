// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
/*
const names = ['Jack', 'Jason', 'April', 'Karen', 'Kaj', 'Paul'];

const people = [
  { id: 1, name: 'James', age: 31 },
  { id: 2, name: 'John', age: 45 },
  { id: 3, name: 'Paul', age: 65 },
  { id: 4, name: 'Ringo', age: 49 },
  { id: 5, name: 'George', age: 34 },
  { id: 6, name: 'Apple', age: 60 },
];

const App = () => {
  return (
    <>
      <h2>Person name include 'J'</h2>
      <ul>
        {names
          .filter((name) => name.includes('J'))
          .map((filterName, index) => (
            <li key={index}>{filterName}</li>
          ))}
      </ul>

      <h2>Person with age less than 60</h2>
      <ul>
        {people
          .filter((person) => person.age < 60)
          .map((filterPerson) => (
            <li key={filterPerson.id}>
              {filterPerson.name} age {filterPerson.age}
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
*/

// https://upmostly.com/tutorials/build-a-react-switch-toggle-component
/*
import React, { useState } from 'react';
import './switch.scss';

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        type='checkbox'
        name='react-checkbox'
        id='react-checkbox'
        className='react-switch-checkbox'
        checked={isOn}
        onChange={handleToggle}
      />
      <label
        htmlFor='react-checkbox'
        className={`react-switch-label ${isOn ? 'is-on' : 'is-off'}`}
      >
        <span className='react-switch-btn'>{isOn ? 'On' : 'Off'}</span>
      </label>
    </>
  );
};

const App = () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <Switch isOn={value} handleToggle={() => setValue(!value)} />
    </>
  );
};

export default App;
*/

// https://upmostly.com/tutorials/react-hooks-simple-introduction/
// https://upmostly.com/tag/beginner-react-tutorials
/*
import React, { useState, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState('Bond');

  useEffect(() => {
    document.title = `Hello Mr ${value}`;
  });

  return (
    <div>
      <p>
        My name is <strong>{value}</strong>
      </p>
      <button onClick={() => setValue('James Bond')}>Who am i?</button>
    </div>
  );
};

export default App;
*/

// https://upmostly.com/tutorials/simplifying-react-state-and-the-usestate-hook
/*
import React, { useState, useEffect } from 'react';
import './dices-assets/dices.scss';

const App = () => {
  const [firstDiceResult, setFirstDiceResult] = useState(1);
  const [secondDiceResult, setSecondDiceResult] = useState(2);

  const firstDiceImage = require(`./dices-assets/${firstDiceResult}.png`);
  const secondDiceImage = require(`./dices-assets/${secondDiceResult}.png`);

  const rollDice = () => {
    setFirstDiceResult(Math.floor(Math.random() * 6) + 1);
    setSecondDiceResult(Math.floor(Math.random() * 6) + 1);
  };

  useEffect(() => {
    rollDice();
  }, []);

  return (
    <div className='app'>
      <div className='dice-section'>
        <img src={firstDiceImage} alt='dice 1' className='dice' />
        <img src={secondDiceImage} alt='dice 2' className='dice' />
      </div>
      <p className='total-number'>{`${firstDiceResult} + ${secondDiceResult} = ${
        firstDiceResult + secondDiceResult
      }`}</p>
      <button className='roll-button' onClick={rollDice}>
        Roll Dice
      </button>
    </div>
  );
};

export default App;
*/

// https://upmostly.com/tutorials/how-to-pass-param-to-a-component-in-react-router
