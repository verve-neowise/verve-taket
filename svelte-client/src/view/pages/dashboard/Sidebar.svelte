<script lang="ts">
import Alert from "../../components/Alert.svelte";
import Contain from "../../components/Contain.svelte";
import Indeterminate from "../../components/Indeterminate.svelte";
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

        <Contain>
            <Indeterminate/>
        </Contain>

    {:else if $homeworks instanceof Error}

        <Contain>
            <Alert message={$homeworks.message}/>
        </Contain>

    {/if}
</ul>
