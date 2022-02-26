<script lang="ts">
  import logo from './assets/svelte.png';
  import { Router, Route } from 'svelte-navigator';

  import Login from './pages/Login.svelte';
  import Dashboard from './pages/Dashboard.svelte';
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
