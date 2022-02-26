<script lang="ts">
import type { HomeworkModel } from "../data/model/homework.model";

import Homework from "../components/Homework.svelte";
import Navbar from "./dashboard/Navbar.svelte";
import { getHomeworks } from "../data/api/homework.api";

let homeworks: HomeworkModel[] = []
let activeLink: HomeworkModel

function select(model: HomeworkModel) {
  activeLink = model
}

async function fetch() {
  homeworks = await getHomeworks()
  activeLink = homeworks[0]
}

fetch()

</script>

<main>
  <Navbar/>
  
  <div class="container w-4/5 mx-auto py-10">
    <div class="flex">
      <ul class="menu bg-base-200 menu-compact flex flex-column gap-1 flex-2 p-2 w-1/4 min-w-[200px] rounded-box min-h-[200px]">

        <div class="p-5">
          <h1 class="text-2xl font-medium text-violet-400">Homeworks</h1>
        </div>

        {#if homeworks.length > 0}
          {#each homeworks as homework }
            <Homework
              isActive={ activeLink === homework }
              model={ homework }
              callback={ select }
            />
          {/each}
        {:else}
          <div class="h-[100%] flex justify-center items-center">
            <div class="btn btn-ghost loading"></div>
          </div> 
        {/if}
      </ul>

      <div class="card flex-3 p-5 w-full bg-base-200 ml-10">
        {#if activeLink}
        <div class="card-title bg-base-200 rounded-box p-4">
          <h1 class="text-2xl">{activeLink.name}</h1>
        </div>

        <div class="card-body min-h-50"></div>

        <div class="justify-end card-actions">
          <button class="btn btn-primary btn-sm">Send all solves</button>
        </div>        
        {/if}
      </div>
    </div>
  </div>

</main>