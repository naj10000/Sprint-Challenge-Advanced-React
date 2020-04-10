import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('names are visible', ()=> {
  const { getByText } = render(<App/>);

  // const nameEL = getByText(/alex morgan/i);
  // expect(nameEL).toBeVisible();

  const toggleHead = getByText(/darkmode toggle/i);
  expect(toggleHead).toBeVisible();



  
})

test('renders header without crashing', () => {
  const header = render(<App />);
  header.getByText(/women's world cup/i);

})
