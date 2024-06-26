import { html } from 'common-tags';
import { classes, styleId } from './constants';
import styles from './scss/styles.scss?inline';

export const stylesheet = () => (
  html(`
    <style id="${styleId}">
      ${styles.toString()}
    </style>
  `)
);

export const container = () => (
  html`
    <div class="${classes.CONTAINER} ${classes.LOADING_ICON}">
    </div>
  `
);

export const canvas = () => (
  html`
    <canvas class="${classes.CANVAS}" width="0" height="0">
    </canvas>
  `
);

export const overlay = () => (
  html`
    <div class="${classes.OVERLAY}">
    </div>
  `
);
