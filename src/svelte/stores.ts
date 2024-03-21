import { writable } from "svelte/store";
import {OPTIONS} from "@data/globalConstants";


export const display = writable(OPTIONS[0]);
export const currentIndex = writable(0);
export const isOutsideSelection = writable(false);
export const relatColor = writable("rgba(8, 67, 149, 0.90)");
export const safari = writable(false);
export const persistantInd = writable(localStorage.getItem("persistantInd") || "");

persistantInd.subscribe((val) => {
  localStorage.setItem("persistantInd", val);
}   );
