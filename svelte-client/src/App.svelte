<script lang="ts">
  import logo from './assets/svelte.png';
  import { Router, Route } from 'svelte-navigator';
  import Dashboard from './view/pages/Dashboard.svelte';
  import Login from './view/pages/Login.svelte';
</script>

<main class="bg-base-100" >
  
  <Router>

    <Route path='/'>
      <Dashboard/>
    </Route>

    <Route path='login'>
      <Login/>
    </Route>

    <Route path="dashboard">
      <Dashboard/>
    </Route>

  </Router>

</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
