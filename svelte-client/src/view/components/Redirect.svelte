<script lang="ts">
import { useNavigate } from "svelte-navigator";



    export let url = "/"

    const navigate = useNavigate()

    navigate(url)

</script>