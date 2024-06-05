/// <reference types="vite/client" />

import Freezeframe from "../src";

declare global {
  interface Window {
    Freezeframe: typeof Freezeframe;
  }
}
