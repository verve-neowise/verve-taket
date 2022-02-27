<script lang="ts">
import type { Resource } from "src/data/model/homework.model";
export let values: Resource[]

    console.log(values);
    
</script>

<div class="btn-group">
    {#each values as resource}
        <a href={resource.link} target="_blank"> {resource.name} </a>
    {/each}
</div>