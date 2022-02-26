<script lang="ts">
import type { HomeworkModel } from "src/data/model/homework.model";
import { Status } from "../data/model/status.enum";

    export let model: HomeworkModel = undefined 
    export let isActive = false
    export let callback: (model: HomeworkModel) => void

    let statusMap = {}

    statusMap[Status.success] = 'bg-green-500'
    statusMap[Status.wrong] = 'bg-red-500'
    statusMap[Status.wait] = 'bg-orange-500'
    statusMap[Status.neutral] = ''

</script>

<li>
    <a class=" { isActive ? 'bg-primary' : '' } " href="#1" on:click={ () => callback(model)}>
    <div class="flex justify-between w-full items-center">
        <div class="w-full { isActive ? 'text-primary-content' : '' }">
            {model.name}
        </div>
        {#if model.status !== Status.neutral} 
            <div class="badge badge-xs { statusMap[model.status] } border-none aspect-square text-xs"></div>
        {/if}
    </div>
</a>
</li>