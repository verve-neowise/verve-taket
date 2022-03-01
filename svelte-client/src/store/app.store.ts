import { writable } from "svelte/store";

export const theme = writable<string>(loadTheme())

export const changeTheme = (value: string) => {
    saveTheme(value)
    theme.set(value)
}

const defaultTheme = 'dark'

function loadTheme() {
    let theme = localStorage.getItem('theme')

    if (theme === undefined) {
        saveTheme(defaultTheme)
        theme = defaultTheme
    }
    return theme
}

function saveTheme(theme: string) {
    localStorage.setItem('theme', theme)
}