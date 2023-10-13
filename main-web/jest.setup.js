/* eslint-disable no-console */
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.spyOn(console, 'error').mockImplementation((...args) => {
  if (!args[0].includes('Warning: ReactDOM.render is no longer supported in React 18')) {
    console.error(...args);
  }
});
