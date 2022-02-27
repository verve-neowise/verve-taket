<script lang="ts">
import type { Problem } from "src/data/model/homework.model";

    export let data: Problem
</script>

<div class="text-primary">{data.name}</div>

<div class="text-base-content opacity-50 text-sm">
    {data.comment}
</div>

<textarea name={data.name} class="textarea w-full" />
