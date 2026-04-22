import next from 'eslint-config-next';

export default [
  ...next,
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'node_modules/**',
    ],
  },
];

