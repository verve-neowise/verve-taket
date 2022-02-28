<script lang="ts">
import type { Problem } from "../../data/model/homework.model";

export let data: Problem

</script>
    
<label class="input-group">
    <span class="bg-base-300">Link</span>
    <input type="text" name={data.code} placeholder="info@site.com" class="input w-full">
</label>