<script lang="ts">
import { Status } from "../../data/model/status.enum";
    export let value: Status = Status.neutral

    export let status: { text: string, color: string } = { text : "", color: "" }

    type Customize = {
        text:  string,
        color: string
    }

    const textMap = new Map<Status, Customize>([
        [Status.success, { text: "Success",         color: 'green-500'      }],
        [Status.send,    { text: "Sent",            color: 'blue-500'       }],
        [Status.wrong,   { text: "Has a mistakes",  color: 'red-500'        }],
        [Status.neutral, { text: "Not sent",        color: 'orange'   }]
    ])

    status = textMap.get(value)
</script>

<div class="badge bg-{ status.color } border-none lowercase text-white text-sm font-bold font-mono gap-2 p-3">
    {status.text}
</div>