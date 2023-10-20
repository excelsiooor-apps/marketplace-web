export const getRequireProccessEnvironment = (enviroment: string): string => {
  const value = process.env[enviroment];

  if (value === undefined) {
    throw new Error(`${value} is required in environment variables, but was not provided`);
  }
  if (value.length <= 0) {
    throw new Error(`${value} is required in environment variables, but has invalid value`);
  }

  return value;
};
