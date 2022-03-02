<script lang="ts">
import Alert from "./components/Alert.svelte";
import Contain from "./components/Contain.svelte";
import Indeterminate from "./components/Indeterminate.svelte";
import { fetch, homeworks, changeHomework,  current } from "../store/homeworks.store";

import { Loading, Success, Error } from "../data/network-result";
import Homework from "./components/Homework.svelte";

homeworks.subscribe(value => {

    if (value instanceof Success) {
        changeHomework(value.result[0])
    }
})

fetch()

</script>

<div class="drawer-side bg-base-200">
    <ul class="menu menu-compact flex flex-column  gap-1 flex-2 p-2 w-1/4 min-w-[300px] h-screen overflow-y-scroll">
        <div class="p-5">
            <h1 class="text-2xl font-medium text-base-content">Homeworks</h1>
            <div class="divider my-1"></div>
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
    
            <Contain>
                <Indeterminate/>
            </Contain>
    
        {:else if $homeworks instanceof Error}
    
            <Contain>
                <Alert message={$homeworks.message}/>
            </Contain>
    
        {/if}
    </ul>
</div>

<style>
    .drawer-side {
        scroll-behavior: smooth;
        scroll-padding-top: 5rem;
    }
</style>