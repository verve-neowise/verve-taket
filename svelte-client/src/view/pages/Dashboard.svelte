<script lang="ts">
import { writable } from "svelte/store";


  import HomeworkOverview from "./dashboard/HomeworkOverview.svelte";
import Navbar from "./dashboard/Navbar.svelte";

  import Sidebar from "./dashboard/Sidebar.svelte";

  let selectedId = writable('-1') 

  function onSelectHomeWork(id: string) {
    selectedId.set(id)
  }

</script>

<main>
  <Navbar />

  <div class="container w-4/5 mx-auto py-10">
    <div class="flex">
      
      <Sidebar/>

      {#if $selectedId !== '-1'}
        <HomeworkOverview
        />
      {/if}

    </div>
  </div>
</main>
