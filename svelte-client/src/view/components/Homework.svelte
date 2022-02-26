<script lang="ts">
import type { HomeworkModel } from "../../data/model/homework.model";
import { Status } from "../../data/model/status.enum";


  export let model: HomeworkModel = undefined;
  export let isActive = false;
  export let callback: (id: string) => void;

  let statusMap = {};

  statusMap[Status.success] = "bg-green-500";
  statusMap[Status.wrong] = "bg-red-500";
  statusMap[Status.wait] = "bg-orange-500";
  statusMap[Status.neutral] = "";
</script>

<li>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    class=" {isActive ? 'bg-primary' : ''} "
    on:click={() => callback(model.id)}
  >
    <div class="flex justify-between w-full items-center">
      <div class="w-full {isActive ? 'text-primary-content' : ''}">
        {model.name}
      </div>
      {#if model.status !== Status.neutral}
        <div
          class="badge badge-xs {statusMap[
            model.status
          ]} border-none aspect-square text-xs"
        />
      {/if}
    </div>
</a>
</li>
