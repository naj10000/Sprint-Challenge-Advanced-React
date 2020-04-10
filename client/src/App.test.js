import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('names are visible', ()=> {
  const { getByText } = render(<App/>);

  const nameEL = getByText(/alex morgan/i);
  expect(nameEL).toBeInTheDocument();
})
