<script lang="ts">

  import Navbar from "./navbar/Navbar.svelte";
  import Sidebar from "./Sidebar.svelte";
  import HomeworkOverview from "./HomeworkOverview.svelte";

</script>

<main>
  <Navbar />

  <div class="container w-4/5 mx-auto py-10 flex items-start">
      <Sidebar/>
      <HomeworkOverview/>
  </div>
</main>