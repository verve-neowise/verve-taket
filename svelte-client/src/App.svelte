<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import Dashboard from './view/Dashboard.svelte';
  import Login from './view/Login.svelte';
</script>

<main class="bg-base-100 h-full" >
  
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
