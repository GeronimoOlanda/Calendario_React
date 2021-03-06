// testar as entradas
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Input } from './index';

describe('<Input />', () => {
  it('Should be a valid inputs', () => {
    const fn = jest.fn();
    render(<Input newEvent={{ title: 'Ola' }} handleAddEvnt={fn} setNewEvent={fn} />);
  });
  it('Should be a message', () => {
    const input = screen.queryByPlaceholderText(/O Evento se Inicia em/i);
    render(input);
  });
});
