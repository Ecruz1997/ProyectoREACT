import { useKanbanStore } from './kanbanStore';

import { describe, it, expect } from 'vitest';

describe('kanbanStore', () => {
  it('moves ticket to next column', () => {
    useKanbanStore.setState({
      tickets: [{ id: '1', projectId: 'p1', title: 'T', priority: 'alta', label: 'bug', assignee: 'Ana', status: 'Backlog' }],
    });
    useKanbanStore.getState().moveTicket('1');
    expect(useKanbanStore.getState().tickets[0].status).toBe('En progreso');
  });
});
