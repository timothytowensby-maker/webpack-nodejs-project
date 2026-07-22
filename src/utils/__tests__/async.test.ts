import { delay, retry, timeout } from '@/utils/async';

describe('Async Utilities', () => {
  describe('delay', () => {
    it('should delay execution', async () => {
      const start = Date.now();
      await delay(100);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(100);
    });
  });

  describe('retry', () => {
    it('should retry failed promises', async () => {
      let attempts = 0;
      const fn = async () => {
        attempts++;
        if (attempts < 3) {
          throw new Error('Failed');
        }
        return 'success';
      };

      const result = await retry(fn, 3, 10);
      expect(result).toBe('success');
      expect(attempts).toBe(3);
    });

    it('should throw error after max attempts', async () => {
      const fn = async () => {
        throw new Error('Always fails');
      };

      await expect(retry(fn, 2, 10)).rejects.toThrow('Always fails');
    });
  });

  describe('timeout', () => {
    it('should resolve before timeout', async () => {
      const promise = Promise.resolve('done');
      const result = await timeout(promise, 1000);
      expect(result).toBe('done');
    });

    it('should throw timeout error', async () => {
      const promise = new Promise((resolve) => {
        setTimeout(() => resolve('done'), 1000);
      });

      await expect(timeout(promise, 100)).rejects.toThrow('Timeout');
    });
  });
});
