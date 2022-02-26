import { writable } from "svelte/store";

const activeLink = writable<string>(undefined)

const changeLink = (link: string) => activeLink.set(link)

export default {
    activeLink,
    changeLink
}