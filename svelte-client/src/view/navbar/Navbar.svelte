<script lang="ts">
  import Themes from "./Themes.svelte";
  import { Link } from "svelte-navigator";
  import { auth, logOut } from "../../store/login.store";
  import { Success } from "../../data/network-result";
  import { User } from "../../data/model/auth.model";
</script>

<div class="navbar bg-base-200 shadow-md">
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
        <li><a on:click={() => logOut() }> Logout </a> </li>
      </ul>
    </div>

    <!-- <Link to="/profile" class="btn btn-ghost"> -->

    <!-- </Link> -->
  {/if}
</div>
