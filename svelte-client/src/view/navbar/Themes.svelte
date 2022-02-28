<script lang="ts">
import { theme, changeTheme } from "../../store/app.store";

const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "corporate"]

theme.subscribe(value => {
  document.documentElement.setAttribute('data-theme', value)
})

</script>

<div class="dropdown dropdown-bottom dropdown-end">
    <label for="a" tabindex="0" class="m-1 btn">Change theme</label>
    <ul
        tabindex="0"
        class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
    >
        {#each themes as theme}
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a on:click={() => changeTheme(theme)}> {theme} </a></li>
        {/each}
    </ul>
</div>
