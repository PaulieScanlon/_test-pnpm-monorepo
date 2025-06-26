interface TestUtilProps {
  param: string;
}

export const testUtil = ({ param }: TestUtilProps): string => {
  return `packages/utils/test-util: ${param}`;
};
