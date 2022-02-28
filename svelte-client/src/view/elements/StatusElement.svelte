<script lang="ts">
import { Status } from "../../data/model/status.enum";
    export let value: Status = Status.neutral

    type Customize = {
        text:  string,
        color: string
    }

    const textMap = new Map<Status, Customize>([
        [Status.success, { text: "Success",         color: 'success'    }],
        [Status.send,    { text: "Sent",            color: 'info'       }],
        [Status.wrong,   { text: "Has a mistakes",  color: 'error'      }],
        [Status.neutral, { text: "Not sent",        color: ''           }]
    ])

    const status = textMap.get(value)

</script>

<div class="badge badge-{status.color} min-w-[100px] gap-2 p-3">
    {status.text}
</div>