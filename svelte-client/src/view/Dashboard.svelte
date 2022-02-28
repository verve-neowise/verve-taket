<script lang="ts">

  import Navbar from "./navbar/Navbar.svelte";
  import Sidebar from "./Sidebar.svelte";
  import HomeworkOverview from "./HomeworkOverview.svelte";
  import Messages from "./Messages.svelte";

</script>

<main>
  <Navbar />

  <div class="container-full mx-5 py-10 m-auto flex items-start gap-5">
      <Sidebar/>
      <HomeworkOverview/>
      <Messages/>
  </div>
</main>