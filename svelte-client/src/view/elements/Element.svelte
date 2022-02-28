<script lang="ts">
import { ProblemType } from "../../data/model/homework.model";
import CodeIcon from "../icons/CodeIcon.svelte";
import FileIcon from "../icons/FileIcon.svelte";
import LinkIcon from "../icons/LinkIcon.svelte";
import TextIcon from "../icons/TextIcon.svelte";

    export let title: string
    export let message: string
    export let type: ProblemType = ProblemType.code

    let map = new Map<ProblemType, any>([
        [ProblemType.code, CodeIcon],
        [ProblemType.file, FileIcon],
        [ProblemType.link, LinkIcon],
        [ProblemType.text, TextIcon],
    ])

    const icon = map.get(type)
</script>

<div>
    <div class="text-base-content font-medium p-2 flex gap-2 items-center">
        <svelte:component this={icon} />
        {title}
    </div>

    <div class="text-base-content opacity-50 text-sm p-2">
        {message}
    </div>
    
    <div class="p-2">
        <slot></slot>
    </div>
</div>
