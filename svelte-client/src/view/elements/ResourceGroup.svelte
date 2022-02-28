<script lang="ts">
import { link } from "svelte-navigator";
import type { Resource } from "../../data/model/homework.model";
import ResourceLink from "./ResourceLink.svelte";

    export let values: Resource[] = []

    console.log(values);
    
</script>

<div class="btn-group">
    {#each values as resource}
        <ResourceLink 
            link={resource.link}
            name={resource.name}
            />
    {/each}
</div>