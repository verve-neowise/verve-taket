<script lang="ts">
  import { Router, Route, useNavigate } from "svelte-navigator";
  import { Role } from "./data/model/auth.model";
  import { Success } from "./data/network-result";
  import { auth, logOut } from "./store/login.store";
  import Constructor from "./view/Constructor.svelte";
  import Dashboard from "./view/Dashboard.svelte";
  import Login from "./view/Login.svelte";
  import Alert from "./view/components/Alert.svelte";
  import Redirect from "./view/components/Redirect.svelte";
</script>

<main class="bg-base-100 h-full">
  <Router>
    <Route path="login">
      <Login />
    </Route>

    <Route path="/logout">
      {logOut()}
      <Redirect url="/"/>
    </Route>

    <Route primary={false} path="/">

      {#if $auth instanceof Success}

        {#if $auth.result.role === Role.USER}
          <Dashboard />
        {:else if $auth.result.role === Role.ADMIN}
          <Constructor />
        {:else}
          <Alert message="Unknown Role {$auth.result.role}" />
        {/if}

      {:else}
        <Redirect url="/login" />
      {/if}

    </Route>
  </Router>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
