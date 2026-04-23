import { render, screen } from '@testing-library/react';
import { TicketCard } from './TicketCard';

import { describe, it, expect } from 'vitest';

describe('TicketCard', () => {
  it('renders ticket info', () => {
    render(<TicketCard title="Tarea" priority="alta" label="bug" assignee="Ana" />);
    expect(screen.getByText('Tarea')).toBeInTheDocument();
    expect(screen.getByText('alta')).toBeInTheDocument();
    expect(screen.getByText('bug')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
  });
});
