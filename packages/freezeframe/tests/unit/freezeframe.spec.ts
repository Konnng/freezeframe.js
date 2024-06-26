import {describe, expect, jest, test} from '@jest/globals';

import Freezeframe from '../../src/index';
import { classes, styleId } from '../../src/constants';
import mockDomApis from '../mocks/dom';
import { FreezeframeOptions, RequireProps, SelectorOrNodes } from '../../types';

type CallbackType = (ff: Freezeframe) => void | (() => void)

mockDomApis(window);

const testFreezeframeInstance = (imgCount: number, selector?: SelectorOrNodes | RequireProps<FreezeframeOptions, 'selector'> | null, options?: FreezeframeOptions, cb?: CallbackType) => {
  const ff = new Freezeframe(selector || '.freezeframe', options);
  const $container = document.getElementsByClassName(classes.CONTAINER);
  const $canvas = document.getElementsByClassName(classes.CANVAS);
  const $image = document.getElementsByClassName(classes.IMAGE);
  expect(ff.$images.length).toBe(imgCount);
  expect(ff.items.size).toBe(imgCount);
  expect($container.length).toBe(imgCount);
  expect($canvas.length).toBe(imgCount);
  expect($image.length).toBe(imgCount);
  cb && cb(ff);
};

describe('default selector', () => {
  test('single image', async () => {
    document.body.innerHTML = `
      <img class="freezeframe" src="foo.gif">
    `;
    testFreezeframeInstance(1);
  });

  test('multiple images', async () => {
    document.body.innerHTML = `
      <img class="freezeframe" src="foo.gif">
      <img class="freezeframe" src="foo.gif">
      <img class="freezeframe" src="foo.gif">
    `;
    testFreezeframeInstance(3);
  });
});

describe('custom string selector', () => {
  test('single image', async () => {
    document.body.innerHTML = `
      <img class="custom" src="foo.gif">
    `;
    testFreezeframeInstance(1, '.custom');
  });

  test('multiple images', async () => {
    document.body.innerHTML = `
      <img class="custom" src="foo.gif">
      <img class="custom" src="foo.gif">
      <img class="custom" src="foo.gif">
    `;
    testFreezeframeInstance(3, '.custom');
  });
});

describe('querySelector, querySelectorAll', () => {
  test('querySelector', async () => {
    document.body.innerHTML = `
      <img class="foo" src="foo.gif">
    `;
    testFreezeframeInstance(1, document.querySelector('.foo'));
  });

  test('querySelectorAll', async () => {
    document.body.innerHTML = `
      <img class="foo" src="foo.gif">
      <img class="foo" src="foo.gif">
      <img class="foo" src="foo.gif">
    `;
    testFreezeframeInstance(3, document.querySelectorAll('.foo'));
  });
});

describe('getElementById, getElementsByClassName, getElementsByTagName', () => {
  test('getElementById', async () => {
    document.body.innerHTML = `
      <img id="foo" src="foo.gif">
    `;
    testFreezeframeInstance(1, document.getElementById('foo'));
  });

  test('getElementsByClassName', async () => {
    document.body.innerHTML = `
      <img class="foo" src="foo.gif">
      <img class="foo" src="foo.gif">
      <img class="foo" src="foo.gif">
    `;
    testFreezeframeInstance(3, document.getElementsByClassName('foo'));
  });

  test('getElementsByTagName', async () => {
    document.body.innerHTML = `
      <img src="foo.gif">
      <img src="foo.gif">
      <img src="foo.gif">
    `;
    testFreezeframeInstance(3, document.getElementsByTagName('img'));
  });
});

describe('parent selector', () => {
  test('single child image', async () => {
    document.body.innerHTML = `
      <div class="freezeframe">
        <img src="foo.gif">
      </div>
    `;
    testFreezeframeInstance(1);
  });

  test('multiple child images', async () => {
    document.body.innerHTML = `
      <div class="freezeframe">
        <img src="foo.gif">
        <img src="foo.gif">
        <img src="foo.gif">
      </div>
    `;
    testFreezeframeInstance(3);
  });

  test('multiple child images with redundancy', async () => {
    document.body.innerHTML = `
      <div class="freezeframe">
        <img src="foo.gif">
        <img src="foo.gif">
        <img class="freezeframe" src="foo.gif">
      </div>
    `;
    testFreezeframeInstance(3);
  });
});

describe('options', () => {
  test('selector & options args', async () => {
    document.body.innerHTML = `
      <div class="foo">
        <img src="foo.gif">
      </div>
    `;
    testFreezeframeInstance(1, '.foo', {
      overlay: true
    }, () => {
      const $overlay = document.getElementsByClassName(classes.OVERLAY);
      expect($overlay.length).toBe(1);
    });
  });

  test('only options args', async () => {
    document.body.innerHTML = `
      <div class="foo">
        <img src="foo.gif">
      </div>
    `;
    testFreezeframeInstance(1, {
      selector: '.foo',
      trigger: 'click',
      overlay: true
    }, undefined, () => {
      const $overlay = document.getElementsByClassName(classes.OVERLAY);
      expect($overlay.length).toBe(1);
    });
  });

  test('manual triggers', async () => {
    document.body.innerHTML = `
      <div class="foo">
        <img src="foo.gif">
      </div>
    `;
    testFreezeframeInstance(1, {
      selector: '.foo',
      trigger: false,
      overlay: true
    }, undefined, (ff: Freezeframe) => {
      ff.start();
      const $active = document.getElementsByClassName(classes.ACTIVE);
      expect($active.length).toBe(1);
      ff.stop();
      expect($active.length).toBe(0);
    });
  });
});

describe('event listeners', () => {
  test('selector & options args', async () => {
    document.body.innerHTML = `
      <div class="foo">
        <img src="foo.gif">
      </div>
    `;
    testFreezeframeInstance(1, '.foo', undefined, (ff: Freezeframe) => {
      const startCallbackMock = jest.fn();
      const stopCallbackMock = jest.fn();
      const toggleCallbackMock = jest.fn();
      ff.on('start', startCallbackMock);
      ff.on('stop', stopCallbackMock);
      ff.on('toggle', toggleCallbackMock);
      ff.start();
      ff.stop();
      expect(startCallbackMock.mock.calls.length).toBe(1);
      expect(stopCallbackMock.mock.calls.length).toBe(1);
      expect(toggleCallbackMock.mock.calls.length).toBe(2);
    });
  });
});

describe('stylesheet injection', () => {
  test('should be injected a single time', () => {
    document.body.innerHTML = `
      <img class="custom1" src="foo.gif">
      <img class="custom2" src="foo.gif">
      <img class="custom3" src="foo.gif">
    `;
    new Freezeframe('.custom1'); // eslint-disable-line
    new Freezeframe('.custom2'); // eslint-disable-line
    new Freezeframe('.custom3'); // eslint-disable-line
    const $stylesheet = document.querySelectorAll(`style#${styleId}`);
    expect($stylesheet.length).toBe(1);
  });
});
