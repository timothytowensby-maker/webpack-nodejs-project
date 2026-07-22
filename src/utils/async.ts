export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function retry<T>(
  fn: () => Promise<T>,
  attempts: number = 3,
  backoff: number = 1000
): Promise<T> {
  return fn().catch((error) => {
    if (attempts <= 1) {
      throw error;
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(retry(fn, attempts - 1, backoff * 2));
      }, backoff);
    });
  });
}

export async function timeout<T>(
  promise: Promise<T>,
  ms: number
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms)
    ),
  ]);
}
