import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { beforeEach, afterEach, vi } from 'vitest';

// jsdom does not implement HTMLMediaElement
// implement here so that AudioProvider's toggles
//
beforeEach(() => {
  vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(
    function (this: HTMLMediaElement) {
      this.dispatchEvent(new Event('play'));
      return Promise.resolve();
    },
  );
  vi.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(
    function (this: HTMLMediaElement) {
      this.dispatchEvent(new Event('pause'));
    },
  );
  vi.spyOn(window.HTMLMediaElement.prototype, 'load').mockImplementation(
    () => {},
  );
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
