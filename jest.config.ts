module.exports = {
  preset: 'react-native',
  notify: true,
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  setupFiles: ['<rootDir>/jest/setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-navigation|@react-redux)/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/components/',
    '<rootDir>/src/utils/',
    '<rootDir>/src/i18n',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/assets/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/utils/',
    '<rootDir>/src/components/index.ts',
    '<rootDir>/src/components/buttons/index.ts',
    '<rootDir>/src/containers/index.ts',
    '<rootDir>/src/navigation/',
    '<rootDir>/src/i18n',
  ],
};
