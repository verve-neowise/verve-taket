<script lang="ts">
  import Themes from "./Themes.svelte";
  import { Link } from "svelte-navigator";
  import { auth } from "../../store/login.store";
  import { Success } from "../../data/network-result";
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

    <Link to="/profile" class="btn btn-ghost">
      <div class="flex-none flex gap-5 items-center">
        <div class="text-md text-base-content font-medium">
          {$auth.result.user.name}
        </div>

        <div class="avatar">
          <div class="w-10 mask mask-squircle">
            <img
              alt="avatar"
              src={$auth.result.user.avatar}
            />
          </div>
        </div>
      </div>

    </Link>
  {/if}
</div>
