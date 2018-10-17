import remediatorCli from 'app/index';

describe('Remediator-Cli integration tests', () => {
  test('should return true', () => {
    expect.assertions(1);
    expect(remediatorCli()).toEqual(true);
  });
});
