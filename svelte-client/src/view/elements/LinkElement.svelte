<script lang="ts">
import type { Problem } from "../../data/model/homework.model";

export let data: Problem

</script>
    
<label class="input-group">
    <span>Link</span>
    <input type="text" name={data.code} placeholder="your url" class="input input-bordered w-full">
</label>