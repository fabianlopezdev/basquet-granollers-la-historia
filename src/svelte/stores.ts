import { writable, derived } from "svelte/store";
import {OPTIONS, SEASONS} from "@data/globalConstants";


export const display = writable(OPTIONS[0]);
export const currentIndex = writable(0);
export const isOutsideSelection = writable(false);

export const currentSeason = derived(
  currentIndex,
  ($currentIndex) => SEASONS[$currentIndex],
);