import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

const defaultProps = {
  onClick: jest.fn(),
  children: 'Button',
};

describe('<Button />', () => {
  it('should render', () => {
    render(<Button {...defaultProps} />);

    expect(screen.getByTestId('button-comp')).toMatchSnapshot();
  });

  it('should call onClick', () => {
    render(<Button {...defaultProps} />);
    fireEvent.click(screen.getByTestId('button-comp'));

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should be disableable', () => {
    render(<Button {...defaultProps} disabled />);

    expect(screen.getByTestId('button-comp')).toHaveProperty('disabled');
  });

  it('should render children', () => {
    render(<Button {...defaultProps} disabled />);

    expect(screen.getByText(/Button/i)).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...defaultProps,
      className: 'Custom',
    };
    render(<Button {...props} />);

    expect(screen.getByTestId('button-comp')).toHaveProperty('className');
  });
});
