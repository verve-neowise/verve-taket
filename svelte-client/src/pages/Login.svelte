<script lang="ts">
import Heading from "../components/Heading.svelte";
import Input from "./../components/Input.svelte";
import LoadButton from "../components/LoadButton.svelte";

import { useNavigate } from "svelte-navigator";

import { mapFormData } from "../functions/forms";
import { athorincate } from "../data/api/login.api";

const navigate = useNavigate()

type FormObject = {
    username: string,
    password: string
}

let isLoading = false
let status = 200

const submitForm = async (e: Event) => {

    isLoading = true

    const formData = new FormData(e.target as HTMLFormElement)
    const { username, password } = mapFormData(formData) as FormObject

    const response = await athorincate(username, password) 

    isLoading = false
    status = response.status

    if (status === 200) {
        navigate('/dashboard')
    }
}

</script>

<div class="flex flex-col h-full justify-center items-center">
    <div class="card w-96 bg-base-200 shadow-xl">
        <div class="card-body">
           
            <Heading
                text="Login"
            />
    
            {#if status !== 200}
                <div class="alert shadow-lg alert-warning w-full">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>Warning: Invalid username or password</span>
                    </div>
                </div>
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
                    loading={isLoading}
                    label="Login"
                />
            </form>
        </div>
    
    </div>
    
    <p class="text-base-content mt-10">Username: neowise <br> Password: parool </p>
</div>


<style lang="postcss">
</style>
