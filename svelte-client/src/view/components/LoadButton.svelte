<script lang="ts">

    export let loading: boolean = false
    export let label: string = 'Button'

</script>

<button 
    type="submit"
    class="btn btn-block btn-primary {loading ? 'loading' : ''}"
    >
    {loading ? '' : label}
</button>