<script lang="ts">
import Alert from "./components/Alert.svelte";
import Contain from "./components/Contain.svelte";
import Indeterminate from "./components/Indeterminate.svelte";
import TextArea from "./elements/Code.svelte";
import Element from './elements/Element.svelte'
import Title from "./components/Title.svelte";
import LinkElement from "./elements/LinkElement.svelte";
import Resources from "./elements/ResourceGroup.svelte";

import { mapFormDataToArray } from "../functions/forms";

import { details } from "../store/homeworks.store";
import { Loading, Success, Error } from "../data/network-result";
import { ProblemType } from "../data/model/homework.model";
import CommentModal from "./components/CommentModal.svelte";
import FileElement from "./elements/FileElement.svelte";
import StatusElement from "./elements/StatusElement.svelte";

  function sendSolves(event) {
    let data = mapFormDataToArray(new FormData(event.target));
    console.log(data);
  }
</script>

<div class="card flex-3 p-5 w-full bg-base-200">

  {#if $details instanceof Success}

    <div class="flex justify-between items-center p-4">
      <Title value={ $details.result.name }/>
      <p class="opacity-50 text-base-content text-xs">01.02.2003</p>
    </div>
    <!-- <Comment value={$details.result.comment}/> -->

    <p class="text-base py-5">{$details.result.details}</p>

    <div class="flex justify-between items-center">
      <Resources values={$details.result.resources}/>
      <div class="flex gap-5 items-center">
        <StatusElement value={$details.result.status}/>
        <CommentModal
          comment={$details.result.comment}
        />
      </div>
    </div>

    <div class="divider"></div>

      <form on:submit|preventDefault={sendSolves} class="flex flex-col gap-5">

        {#each $details.result.problems as problem}
          <Element title={problem.name} type={problem.type} message={problem.comment} >
            
            {#if problem.type === ProblemType.code} 
              
              <TextArea data={problem} ></TextArea>
            
            {:else if problem.type === ProblemType.link}
            
              <LinkElement data={problem}/>


            {:else if problem.type === ProblemType.file}

              <FileElement data={problem}/>

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