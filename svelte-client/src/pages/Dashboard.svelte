<script lang="ts">

  import Homework from "../components/Homework.svelte";
  import Navbar from "./dashboard/Navbar.svelte";

  import { homeworks, fetch } from "../viewmodel/homeworks.viewmodel";
  import { Error, Loading, Success } from "../viewmodel/network-result";

  import type { HomeworkDetails, HomeworkModel } from "../data/model/homework.model";

  let data = homeworks();
  let activeLink: HomeworkModel;
  let details: HomeworkDetails;

  async function select(model: HomeworkModel) {
    activeLink = model;
    details = undefined;
  }

  async function fetchData() {
    fetch()
    select(homeworks[0])
  }

  fetchData();
</script>

<main>
  <Navbar />

  <div class="container w-4/5 mx-auto py-10">
    <div class="flex">
      <ul
        class="menu bg-base-200 menu-compact flex flex-column gap-1 flex-2 p-2 w-1/4 min-w-[200px] rounded-box min-h-[200px]"
      >
        <div class="p-5">
          <h1 class="text-2xl font-medium text-primary">Homeworks</h1>
        </div>

        {#if ($data instanceof Success) }
          {#each $data.result as homework}
            <Homework
              isActive={activeLink === homework}
              model={homework}
              callback={select}
            />
          {/each}
        {:else if ($data === Loading)}
          <div class="h-[100%] flex justify-center items-center">
            <div class="btn btn-ghost loading" />
          </div>
        {:else if ($data instanceof Error)}
        <div class="alert shadow-lg alert-info">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>{$data.message}</span>
          </div>
        </div>
        {/if}
      </ul>
      <div class="card flex-3 p-5 w-full bg-base-200 ml-10">
        {#if details}
          <div class="card-title bg-base-200 rounded-box p-4">
            <h1 class="text-2xl">{details.name}</h1>
          </div>

          <div class="card-body min-h-50">
            <p class="text-sm">{details.details}</p>
          </div>

          <div class="justify-end card-actions">
            <button class="btn btn-primary btn-sm">Send all solves</button>
          </div>
        {:else}
          <div class="h-[100%] flex justify-center items-center">
            <div class="btn btn-ghost loading" />
          </div>
        {/if}
      </div>
    </div>
  </div>
</main>
