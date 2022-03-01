<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import { Role } from "./data/model/auth.model";
  import { Success } from "./data/network-result";
  import { auth, logOut } from "./store/login.store";
  import Authorization from "./view/Authorization.svelte";
  import Constructor from "./view/Constructor.svelte";
  import Dashboard from "./view/Dashboard.svelte";
  import Login from "./view/Login.svelte";
  import Alert from "./view/components/Alert.svelte";
  import Redirect from "./view/components/Redirect.svelte";

  $: if ($auth instanceof Success) {
    console.log($auth.result)
  }
</script>

<main class="bg-base-100 h-full">
  <Router>
    <Route path="login">
      <Login />
    </Route>

    <Route path="logout">
      { logOut() }
    </Route>

    <Authorization>
      {#if $auth instanceof Success}
        <Route  path="/">
          <Redirect url="dashboard"/>
        </Route>

        <Route primary={false} path="dashboard">
          {#if $auth.result.role === Role.USER}
            <Dashboard />
          {:else if $auth.result.role === Role.ADMIN}
            <Constructor />
          {:else}
            <Alert message="Unknown Role {$auth.result.role}" />
          {/if}
        </Route>
      {/if}
    </Authorization>
  </Router>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
