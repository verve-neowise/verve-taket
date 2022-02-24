<script lang="ts">
import Input from "./../components/Input.svelte";

const submitForm = (e: SubmitEvent) => {

    const formData = new FormData(e.target as HTMLFormElement)
    
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
}

</script>

<div class="card w-96 bg-base-200 shadow-xl">
    <div class="card-body">
        <h1 class="justify-center  text-center my-3">Login</h1>

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
            
            <button type="submit" class="btn btn-block btn-primary">Login</button>
        </form>
    </div>
</div>

<style lang="postcss">
</style>
