import { writable} from "svelte/store";
import {OPTIONS} from "@data/globalConstants";


export const display = writable(OPTIONS[0]);
export const currentIndex = writable(0);