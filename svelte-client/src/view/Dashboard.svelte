<script lang="ts">

  import Navbar from "./navbar/Navbar.svelte";
  import Sidebar from "./Sidebar.svelte";
  import HomeworkOverview from "./HomeworkOverview.svelte";
  import Messages from "./Messages.svelte";

</script>

<main class="flex flex-col h-screen">
  <Navbar title="Dashboard" />

  <div class="drawer flex items-start">

    <div class="drawer-side bg-base-200  w-1/4 min-w-[300px] overflow-y-auto">
      <Sidebar/>
    </div>

    <div class="drawer-content flex-3 p-5 w-full h-full overflow-y-auto">
      <HomeworkOverview/>
    </div>

  </div>
</main>