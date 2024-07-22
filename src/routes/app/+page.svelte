
<script>
	import { startedPositions } from '$lib/shared';
  import { AppStartLocationCard } from '$lib/entities'
</script>

<div class="section no_overflow">
  <div class="container">
    <div class="wrapper">
      <div class="_850__wrap">
        <div class="centered_wrap">
          <div class="tag_green">początek trasy</div>
          <h3>Wybierz miejsce, od którego chcesz rozpocząć trasę.</h3>
        </div>
      </div>
      <div class="w-full pt-10">
        <div role="list"  class="mx-auto flex justify-between max-w-3xl flex-row flex-wrap w-dyn-list">
          {#each startedPositions as startedPosition}
              <AppStartLocationCard {startedPosition}/>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
