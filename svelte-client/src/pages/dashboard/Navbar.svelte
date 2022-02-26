<script lang='ts'>
import { Link } from "svelte-navigator";


</script>

<div class="navbar bg-base-200 shadow-md">
    <div class="flex-1">
      <Link to="/" class="btn btn-ghost normal-case text-xl text-base-content">Dashboard</Link>
    </div>
    <Link to="/profile" class="btn btn-ghost">
      <div class="flex-none flex gap-5 items-center">
  
        <div class="text-md text-base-content font-medium">Olimjon Mahmudov</div> 
  
        <div class="avatar">
          <div class="w-10 mask mask-squircle">
            <img alt="avatar" src="https://api.lorem.space/image/face?hash=47449">
          </div>
        </div>
      </div>
    </Link>
</div>