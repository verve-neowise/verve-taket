<script lang="ts">

  import Navbar from "./navbar/Navbar.svelte";
  import Sidebar from "./Sidebar.svelte";
  import HomeworkOverview from "./HomeworkOverview.svelte";
  import Messages from "./Messages.svelte";

</script>

<main class="flex flex-col h-screen">
  <Navbar title="Dashboard" />
  <div class="drawer flex items-start">
      <Sidebar/>
      <HomeworkOverview/>
  </div>
</main>