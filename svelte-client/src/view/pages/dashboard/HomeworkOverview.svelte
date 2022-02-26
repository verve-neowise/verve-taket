<script lang="ts">
import { mapFormDataToArray } from "../../../functions/forms";

import { details } from "../../../store/homeworks.store";
import { Loading, Success, Error } from "../../../store/network-result";

let form;

function sendSolves(event) {
  let data = mapFormDataToArray(new FormData(event.target))
  console.log(data);
}

</script>

<div class="card { $details instanceof Success ? 'complete' : ''  } flex-3 p-5 w-full bg-base-200 ml-10">
    {#if $details instanceof Success }
      <div class="card-title bg-base-200 rounded-box p-4">
        <h1 class="text-2xl">{$details.result.name}</h1>
      </div>

      <p class="text-sm text-secondary bg-[#ffffff05]  p-2">{$details.result.comment}</p>

      <div class="card-body min-h-50">
        <p class="text-base">{$details.result.details}</p>

        <form on:submit|preventDefault={sendSolves} class="flex flex-col gap-3 mt-5">
          
          {#each $details.result.problems as problem}
            <div class="text-primary"> { problem.name } </div>
            <div class="text-base-content opacity-50 text-sm"> { problem.comment } </div>
            <textarea name={problem.name} class="textarea w-full"></textarea>
          {/each}

          <div class="justify-end card-actions pt-2">
            <button type="submit" class="btn btn-primary btn-sm">Send all solves</button>
          </div>
        </form>

    </div>
    {:else if $details instanceof Loading}
      <div class="h-[100%] flex justify-center items-center">
        <div class="btn btn-ghost loading" />
      </div>
    {:else if $details instanceof Error}
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
              <span>{$details.message}</span>
          </div>
      </div>
  {/if}

</div>

<style>
    .card {
      max-height: 200px;
      transition: max-height 500ms ease-in 0s;
    }
    .card.complete {
      max-height: 5000px;
      transition: max-height 500ms ease-in 0s;
    }
</style>