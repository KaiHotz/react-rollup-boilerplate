import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

const defaultProps = {
  onClick: vi.fn(),
  children: 'Button',
};

describe('<Button />', () => {
  it('should render', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should call onClick', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should be disableable', () => {
    render(<Button {...defaultProps} disabled />);
    const button = screen.getByRole('button');

    expect(button).toHaveProperty('disabled');
  });

  it('should render children', () => {
    render(<Button {...defaultProps} disabled />);
    const buttonText = screen.getByText(/button/i);

    expect(buttonText).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...defaultProps,
      className: 'Custom',
    };
    render(<Button {...props} />);
    const button = screen.getByRole('button');

    expect(button).toHaveProperty('className');
  });
});
