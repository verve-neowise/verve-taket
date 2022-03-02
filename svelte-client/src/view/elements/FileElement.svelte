<script lang="ts">
    import type { Problem } from "../../data/model/homework.model";
    
    export let data: Problem

    let files: File[] = [];

    function fileSelected(event: any) {
        files = Object.values(event.target.files)
    }

</script>

<div class="flex gap-5 text-xs">
    <input multiple on:change={fileSelected}  type="file" name={data.code} class="custom-input text-base-content hover:text-base-100 bg-neutral text-base-100 btn-sm input btn "/>
    <div class="flex flex-wrap gap-2">
        {#each files as file}
            <div class="badge p-3 rounded-sm text-xs"> {file.name} </div>
        {/each} 
    </div>
</div>

<style>
    .custom-input {
        /* color: transparent; */
    }
    .custom-input::before {
        content: 'Select files';
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }   
</style>