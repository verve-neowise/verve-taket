<script lang="ts">
import { fetch, homeworks, changeHomework,  current } from "../../../store/homeworks.store";

import { Loading, Success, Error } from "../../../store/network-result";
import Homework from "../../components/Homework.svelte";

homeworks.subscribe(value => {

    if (value instanceof Success) {
        changeHomework(value.result[0])
    }
})

fetch()

</script>

<ul
    class="menu bg-base-200 menu-compact flex flex-column gap-1 flex-2 p-2 w-1/4 min-w-[250px] rounded-box min-h-[200px]"
>
    <div class="p-5">
        <h1 class="text-2xl font-medium text-primary">Homeworks</h1>
    </div>

    {#if $homeworks instanceof Success}
        {#each $homeworks.result as homework, i}
            <Homework
                isActive={ $current ? $current.id === homework.id : i === 0 }
                model={homework}
                callback={changeHomework}
            />
        {/each}
    {:else if $homeworks instanceof  Loading}
        <div class="h-full flex justify-center items-center">
            <div class="btn btn-ghost loading" />
        </div>
    {:else if $homeworks instanceof Error}
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
                <span>{$homeworks.message}</span>
            </div>
        </div>
    {/if}
</ul>
