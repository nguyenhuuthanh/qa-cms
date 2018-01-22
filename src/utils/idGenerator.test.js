import idGenerator from './idGenerator';

describe('idGenerator::', () => {
  it('should be a string', () => {
    expect(typeof idGenerator()).toBe('string');
  });

  it('has prefix "id_"', () => {
    expect(idGenerator()).toEqual(expect.stringMatching(/^id_\.*/gi));
  });

  it('generate different ids', () => {
    const id1 = idGenerator();
    const id2 = idGenerator();

    expect(id1).not.toBe(id2);
  });
});
