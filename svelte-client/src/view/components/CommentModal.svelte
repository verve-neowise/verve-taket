<script lang="ts">
  export let comment: string = ''
  
</script>

<div>
    <a href="#comments-modal" class="btn btn-sm btn-primary { comment === '' ? 'btn-disabled' : '' } text-xs">Cumments</a>

    <div class="modal" id="comments-modal">
        <div class="modal-box">
          <h3 class="font-bold text-xl">Comments</h3>
          <p class="py-4">{comment}</p>
          <div class="modal-action">
           <!-- svelte-ignore a11y-missing-attribute -->
           <a href="#comment-modal" class="btn">Close</a>
          </div>
        </div>
    </div>
</div>