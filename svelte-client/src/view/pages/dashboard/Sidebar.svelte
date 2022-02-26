<script lang="ts">
import type { HomeworkModel } from "../../../data/model/homework.model";
import homeworkStore from "../../../store/homeworks.store";

import { Loading, Success } from "../../../store/network-result";
import Homework from "../../components/Homework.svelte";

import sidebarState from "../../states/sidebar.state";

let data = homeworkStore.homeworks();

let activeLink = sidebarState.activeLink

function select(id: string) {
    sidebarState.changeLink(id)
}

data.subscribe((result) => {
    if (result instanceof Success) {
      let value = result.result
      if (value.length > 0) {
        select(value[0].id)
      }
    }
})

homeworkStore.fetch()

</script>

<ul
    class="menu bg-base-200 menu-compact flex flex-column gap-1 flex-2 p-2 w-1/4 min-w-[200px] rounded-box min-h-[200px]"
>
    <div class="p-5">
        <h1 class="text-2xl font-medium text-primary">Homeworks</h1>
    </div>

    {#if $data instanceof Success}
        {#each $data.result as homework}
            <Homework
                isActive={$activeLink === homework.id}
                model={homework}
                callback={select}
            />
        {/each}
    {:else if $data === Loading}
        <div class="h-full flex justify-center items-center">
            <div class="btn btn-ghost loading" />
        </div>
    {:else if $data instanceof Error}
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
                <span>{$data.message}</span>
            </div>
        </div>
    {/if}
</ul>
