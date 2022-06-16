import {
  toCamelCase,
  transformResponseToCamelCase,
  transformResponseListToCamelCase,
} from '../common';

describe('utils - common', () => {
  describe('toCamelCase', () => {
    it('changes underscore to camelcase', () => {
      const camelcase = toCamelCase('underscore_string');
      expect(camelcase).toBe('underscoreString');
    });

    it('changes "" to ""', () => {
      const camelcase = toCamelCase('');
      expect(camelcase).toBe('');
    });
  });

  describe('transformResponseToCamelCase', () => {
    it('transforms object response to camelcase object response', () => {
      const underscoreKey = 'underscore_string';
      const camelcase = transformResponseToCamelCase({ [underscoreKey]: 'test' });
      expect(camelcase).toHaveProperty('underscoreString');
    });
  });

  describe('transformResponseListToCamelCase', () => {
    it('transforms object list response to camelcase object list response', () => {
      const underscoreKey = 'underscore_string';
      const camelcase = transformResponseListToCamelCase([{ [underscoreKey]: 'test' }]);
      expect(camelcase).toHaveLength(1);
      expect(camelcase[0]).toHaveProperty('underscoreString');
    });
  });
});
