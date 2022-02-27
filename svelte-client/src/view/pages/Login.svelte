<script lang="ts">
import Heading from "../components/Heading.svelte";
import Input from "../components/Input.svelte";
import LoadButton from "../components/LoadButton.svelte";

import { useNavigate } from "svelte-navigator";

import { mapFormData } from "../../functions/forms";
import { auth, authorincate } from "../../store/login.store";
import { Error, Loading, Success } from "../../store/network-result";
import Alert from "../components/Alert.svelte";

const navigate = useNavigate()

type FormObject = {
    username: string,
    password: string
}

const submitForm = async (e: Event) => {

    const formData = new FormData(e.target as HTMLFormElement)
    const { username, password } = mapFormData(formData) as FormObject

    authorincate(username, password)
}

auth.subscribe(nr => {
    if (nr instanceof Success) {
        navigate('/dashboard')
    }
})

</script>

<div class="flex flex-col h-full justify-center items-center">
    <div class="card w-96 bg-base-200 shadow-xl">
        <div class="card-body">
           
            <Heading
                text="Login"
            />
    
            {#if $auth instanceof Error}
                <Alert
                    message={$auth.message}/>
            {/if}
    
            <form on:submit|preventDefault={submitForm} action="#" autocomplete="off" class="flex flex-col gap-5">
                
                <Input 
                    id="username"
                    label="Username"
                />
        
                <Input 
                    id="password"
                    type="password"
                    label="Password"
                />
                
                <LoadButton
                    loading={ $auth instanceof Loading }
                    label="Login"
                />
            </form>
        </div>
    </div>
</div>

<style lang="postcss">
</style>
