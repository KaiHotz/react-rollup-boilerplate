import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

const defaultProps = {
  onClick: jest.fn(),
  text: 'Button',
};

describe('<Button />', () => {
  it('should render', () => {
    render(<Button {...defaultProps} />);

    expect(screen.getByText(/Button/i)).toBeInTheDocument();
  });

  it('should call onClick', () => {
    render(<Button {...defaultProps} />);
    fireEvent.click(screen.getByText(/Button/i));

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should be disableable', () => {
    render(<Button {...defaultProps} disabled />);

    expect(screen.getByText('Button')).toHaveProperty('disabled');
  });

  it('should allow custom className', () => {
    const props = {
      ...defaultProps,
      className: 'Custom',
    };
    render(<Button {...props} />);

    expect(screen.getByText('Button')).toHaveProperty('className');
  });
});
