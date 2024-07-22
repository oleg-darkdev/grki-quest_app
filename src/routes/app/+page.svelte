
<script>
	import { startedPositions, allArr } from '$lib/shared';
  import { AppStartLocationCard, RouteCard, EndRouteCard } from '$lib/entities'

  $: selectedPosition = '';
</script>

<div class="section no_overflow">
  <div class="container">
    <div class="wrapper">
      <div class="_850__wrap">
        <div class="centered_wrap">
          <div class="tag_green">{selectedPosition ? selectedPosition.title : 'początek trasy'}</div>
          <h3>{selectedPosition ? '': 'Wybierz miejsce, od którego chcesz rozpocząć trasę.'}</h3>
        </div>
      </div>
      {#if !selectedPosition}
      <div class="w-full pt-10">
        <div role="list"  class="mx-auto flex justify-between max-w-3xl flex-row flex-wrap w-dyn-list">
          {#each startedPositions as startedPosition}
              <AppStartLocationCard {startedPosition} bind:selectedPosition/>
          {/each}
        </div>
      </div>
      {:else}

        <div class="timeline_wrap _72t">
          {#each allArr as routePoint}
            <RouteCard {routePoint}  />
          {/each}
          <EndRouteCard routePoint={allArr[allArr.length-1]}/>
        </div>
      {/if}

    </div>
  </div>
</div>
