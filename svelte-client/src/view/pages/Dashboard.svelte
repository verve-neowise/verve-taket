<script lang="ts">

  import Navbar from "./dashboard/Navbar.svelte";
  import Sidebar from "./dashboard/Sidebar.svelte";
  import HomeworkOverview from "./dashboard/HomeworkOverview.svelte";

</script>

<main>
  <Navbar />

  <div class="container w-4/5 mx-auto py-10 flex items-start">
      <Sidebar/>
      <HomeworkOverview/>
  </div>
</main>