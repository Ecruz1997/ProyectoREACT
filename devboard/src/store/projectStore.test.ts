import { useProjectStore } from './projectStore';

import { describe, it, expect } from 'vitest';

describe('projectStore', () => {
  it('sets projects', () => {
    useProjectStore.setState({ projects: [] });
    useProjectStore.getState().setProjects([{ id: 'p1', name: 'Test', description: '', tickets: [], progress: 0 }]);
    expect(useProjectStore.getState().projects[0].name).toBe('Test');
  });
});
