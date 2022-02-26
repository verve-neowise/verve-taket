<script lang="ts">
import Navbar from "./dashboard/Navbar.svelte";

</script>

<main>
  <Navbar/>
  
  <div class="container w-4/5 mx-auto py-10">
    <div class="flex">
      <ul class="menu bg-base-200 menu-compact flex-2 p-2 w-1/3 min-w-[200px] rounded-box">

        <div class="p-5">
          <h1 class="text-2xl font-medium text-violet-400">Homeworks</h1>
        </div>

        <li><a>Flexbox</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>

      <div class="content flex-3 w-full">

      </div>
    </div>
  </div>

</main>