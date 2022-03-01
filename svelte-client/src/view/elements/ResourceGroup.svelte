<script lang="ts">
import type { Resource } from "../../data/model/homework.model";
import ResourceLink from "./ResourceLink.svelte";

    export let values: Resource[] = []
    
</script>

<div class="btn-group">
    {#each values as resource}
        <ResourceLink 
            link={resource.link}
            name={resource.name}
            />
    {/each}
</div>