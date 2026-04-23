import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

import { describe, it, expect } from 'vitest';

describe('Badge', () => {
  it('renders children and color', () => {
    render(<Badge color="red">Alta</Badge>);
    expect(screen.getByText('Alta')).toBeInTheDocument();
    expect(screen.getByText('Alta').className).toContain('badge-red');
  });
});
