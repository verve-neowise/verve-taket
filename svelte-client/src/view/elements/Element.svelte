<script lang="ts">
    export let title: string
    export let message: string

</script>

<div>
    <div class="text-base-content font-medium p-2">{title}</div>

    <div class="text-base-content opacity-50 text-sm p-2">
        {message}
    </div>
    
    <div class="p-2">
        <slot></slot>
    </div>
</div>
