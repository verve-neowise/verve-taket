<script lang="ts">
import Alert from "../../components/Alert.svelte";
import Contain from "../../components/Contain.svelte";
import Indeterminate from "../../components/Indeterminate.svelte";

import { mapFormDataToArray } from "../../../functions/forms";

import { details } from "../../../store/homeworks.store";
import { Loading, Success, Error } from "../../../store/network-result";
import Comment from "./Comment.svelte";
import TextArea from "./TextArea.svelte";
import Title from "./Title.svelte";

  function sendSolves(event) {
    let data = mapFormDataToArray(new FormData(event.target));
    console.log(data);
  }
</script>

<div class="card flex-3 p-5 w-full bg-base-200 ml-10">

  {#if $details instanceof Success}

    <Title value={ $details.result.name }/>
    <Comment value={$details.result.comment}/>

    <div class="card-body min-h-50">

      <p class="text-base">{$details.result.details}</p>

      <form on:submit|preventDefault={sendSolves} class="flex flex-col gap-3 mt-5">

        {#each $details.result.problems as problem}
          <TextArea data={problem}/>
        {/each}

        <div class="justify-end card-actions pt-2">
          <button type="submit" class="btn btn-primary btn-sm">Send all solves</button>
        </div>
      </form>
</div>

  {:else if $details instanceof Loading}

    <Contain>
      <Indeterminate />
    </Contain>

  {:else if $details instanceof Error}

    <Contain>
      <Alert message={$details.message} />
    </Contain>

  {/if}
</div>