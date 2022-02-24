<script lang="ts">

    export let id: string = ''
    export let type: string = 'text'
    export let label: string = ''
    
</script>
<div>
    <label class="label" for={id}>
        <span class="label-text">{label}</span>
    </label>
    
    <input
        id={id}
        type={type}
        name={id}
        autocomplete="off"
        class="input input-bordered w-full max-w-xs"
    />
</div>

<style lang="postcss">

</style>