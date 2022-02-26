import { writable } from "svelte/store";

export const theme = writable<string>('dark')

export const changeTheme = (value) => theme.set(value)