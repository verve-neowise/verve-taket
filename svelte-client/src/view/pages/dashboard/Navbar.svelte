<script lang='ts'>
import { Link } from "svelte-navigator";

const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade"]

function changeTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

changeTheme('dark')

</script>

<div class="navbar bg-base-200 shadow-md">
    <div class="flex-1">
      <Link to="/" class="btn btn-ghost normal-case text-xl text-base-content">Dashboard</Link>
    </div>

    <div class="dropdown dropdown-bottom dropdown-end">
      <label for="a" tabindex="0" class="m-1 btn">Change theme</label>
      <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
        {#each themes as theme}
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a on:click={ () => changeTheme(theme) }> {theme} </a></li>
        {/each}
      </ul>
    </div>

    <Link to="/profile" class="btn btn-ghost">
      <div class="flex-none flex gap-5 items-center">

        <div class="text-md text-base-content font-medium">Olimjon Mahmudov</div> 
  
        <div class="avatar">
          <div class="w-10 mask mask-squircle">
            <img alt="avatar" src="https://api.lorem.space/image/face?hash=47449">
          </div>
        </div>
      </div>
    </Link>
</div>