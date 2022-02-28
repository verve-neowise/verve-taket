<script lang="ts">

import Alert from "./components/Alert.svelte";
import Contain from "./components/Contain.svelte";
import Indeterminate from "./components/Indeterminate.svelte";
import Message from './components/Message.svelte'

import { messages } from "../store/homeworks.store";

import { Loading, Success, Error } from "../data/network-result";

</script>

<ul class="menu bg-base-200 menu-compact flex flex-column gap-1 flex-2 p-2 w-1/4 min-w-[250px] rounded-box min-h-[80vh]">
    <div class="p-5">
        <h1 class="text-2xl font-medium text-primary">Messages</h1>
    </div>

    {#if $messages instanceof Success}

        {#each $messages.result as message, i}
        
            <Message
                date={message.date}
                message={message.text}
            />

        {/each}

    {:else if $messages instanceof  Loading}

        <Contain>
            <Indeterminate/>
        </Contain>

    {:else if $messages instanceof Error}

        <Contain>
            <Alert message={$messages.message}/>
        </Contain>

    {/if}
</ul>
