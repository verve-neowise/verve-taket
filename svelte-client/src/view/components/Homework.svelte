<script lang="ts">
import type { HomeworkModel } from "../../data/model/homework.model";
import { Status } from "../../data/model/status.enum";


  export let model: HomeworkModel = undefined;
  export let isActive = false;
  export let callback: (model: HomeworkModel) => Promise<void>;

  let statusMap = {};

  statusMap[Status.success] = "bg-green-500";
  statusMap[Status.wrong] = "bg-red-500";
  statusMap[Status.send] = "bg-blue-500";
  statusMap[Status.neutral] = "";
</script>

<li>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    class=" {isActive ? 'bg-primary' : ''} "
    on:click={() => callback(model)}
  >
    <div class="flex justify-between gap-1 w-full items-center">
      <div class="w-full {isActive ? 'text-primary-content' : ''}">
        <div class="font-bold" > {model.name} </div>
        <div class="text-xs opacity-80"> 01.05.2021</div>
      </div>
      <div class="badge badge-xs {statusMap[ model.status]} border-none aspect-square text-xs"/>
    </div>
</a>
</li>
