<script lang="ts">

  import Navbar from "./navbar/Navbar.svelte";
  import Sidebar from "./Sidebar.svelte";
  import HomeworkOverview from "./HomeworkOverview.svelte";
  import Messages from "./Messages.svelte";

</script>

<main>
  <Navbar />

  <div class="container-full m-10 flex items-start gap-5">
      <Sidebar/>
      <HomeworkOverview/>
      <!-- <Messages/> -->
  </div>
</main>