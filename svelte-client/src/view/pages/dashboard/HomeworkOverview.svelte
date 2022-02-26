<script lang="ts">
import homeworksStore from "../../../store/homeworks.store";
import type { HomeworkDetails } from "../../../data/model/homework.model";
import { Loading, Success, Error } from "../../../store/network-result";

import sidebarState from '../../states/sidebar.state'

  let data: HomeworkDetails = undefined


  sidebarState.activeLink.subscribe((value) => {
    
    let store = homeworksStore.detailOf(value)

    store.subscribe((value) => {
      if (value instanceof Success) {
        data = value.result as HomeworkDetails
      }
    })
  })

  
  console.log('modelId: ', data.id);


</script>

<div class="card flex-3 p-5 w-full bg-base-200 ml-10">
    {#if data}
      <div class="card-title bg-base-200 rounded-box p-4">
        <h1 class="text-2xl">{data.name}</h1>
      </div>

      <div class="card-body min-h-50">
        <p class="text-sm">{data.details}</p>
        <p class="text-xs">{data.comment}</p>
      </div>

      <div class="justify-end card-actions">
        <button class="btn btn-primary btn-sm">Send all solves</button>
      </div>
    {:else if result instanceof Loading}
      <div class="h-[100%] flex justify-center items-center">
        <div class="btn btn-ghost loading" />
      </div>
    {:else if result instanceof Error}
      <div class="h-full flex justify-center items-center">
          <div class="flex gap-2">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-current flex-shrink-0 w-6 h-6"
                  ><path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
              >
              <span>{result.message}</span>
          </div>
      </div>
  {/if}

</div>