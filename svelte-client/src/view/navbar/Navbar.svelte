<script lang="ts">
  import Themes from "./Themes.svelte";
  import { Link } from "svelte-navigator";
  import { auth, logOut } from "../../store/login.store";
  import { Success } from "../../data/network-result";

  export let title = ''

</script>

<div class="navbar bg-base-100 shadow-md rounded-box">
  <div class="flex-1">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="btn btn-ghost normal-case text-xl">{title}</a>
  </div>
  <div class="flex-none gap-5">
    {#if $auth instanceof Success}
    <Themes/>
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="#" src={$auth.result.user.avatar}>
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52">
        <p class="justify-between px-4 py-2 text-md font-bold">
          {$auth.result.user.name}
        </p>
        <div class="divider m-0"></div>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
    {/if}
  </div>
</div>


<!-- <div class="navbar bg-base-200">
  {#if $auth instanceof Success}
    <div class="flex-1">
      <Link
        to="/"
        class="btn btn-ghost normal-case text-xl text-base-content"
      />
      Dashboard
    </div>

    <Themes />

    <div class="dropdown dropdown-end">
      <label for="#a" tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="avatar"
            src={$auth.result.user.avatar}
          />
        </div>
      </label>
      <ul
        tabindex="0"
        class="shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>{$auth.result.user.name}</li>
        <li>
          <a href="##" class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        svelte-ignore a11y-missing-attribute
        <li><a on:click={() => logOut() }> Logout </a> </li>
      </ul>
    </div>
  {/if}
</div> -->
