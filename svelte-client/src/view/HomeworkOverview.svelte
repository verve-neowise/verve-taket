<script lang="ts">
import Alert from "./components/Alert.svelte";
import Contain from "./components/Contain.svelte";
import Indeterminate from "./components/Indeterminate.svelte";
import Comment from "./elements/Comment.svelte";
import TextArea from "./elements/Code.svelte";
import Element from './elements/Element.svelte'
import Title from "./components/Title.svelte";
import LinkElement from "./elements/LinkElement.svelte";
import Resources from "./elements/ResourceGroup.svelte";

import { mapFormDataToArray } from "../functions/forms";

import { details } from "../store/homeworks.store";
import { Loading, Success, Error } from "../data/network-result";
import { ProblemType } from "../data/model/homework.model";

  function sendSolves(event) {
    let data = mapFormDataToArray(new FormData(event.target));
    console.log(data);
  }
</script>

<div class="card flex-3 p-5 w-full bg-base-200 ml-10">

  {#if $details instanceof Success}

    <Title value={ $details.result.name }/>
    <Comment value={$details.result.comment}/>

    <p class="text-base py-5">{$details.result.details}</p>

    <Resources values={$details.result.resources}/>

    <div class="divider"></div>

      <form on:submit|preventDefault={sendSolves} class="flex flex-col gap-5">

        {#each $details.result.problems as problem}
          <Element title={problem.name} message={problem.comment} >
            
            {#if problem.type === ProblemType.code} 
              
              <TextArea data={problem} ></TextArea>
            
            {:else if problem.type === ProblemType.link}
            
              <LinkElement data={problem}/>

            {:else}
              
              <p>Unsupported element</p>

            {/if}
          </Element> 
        {/each}

        <div class="justify-end card-actions pt-2">
          <button type="submit" class="btn btn-primary btn-sm">Send all solves</button>
        </div>
      </form>

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