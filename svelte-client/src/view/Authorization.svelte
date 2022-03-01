<script lang="ts">
    import Alert from "./components/Alert.svelte";
    import { Success } from "../data/network-result";
    import { auth } from "../store/login.store";
    import { Link } from "svelte-navigator";

    auth.subscribe((value) => {
        
    })

</script>

<div>
    {#if $auth instanceof Success}
        <slot></slot>
    {:else}
        <div class="flex h-screen justify-center items-center flex-col gap-5">
            <Alert message="You are unauthorized!"/>
            <Link to="/login" class="btn btn-primary"> Goto Login </Link>
        </div>
    {/if}
</div>