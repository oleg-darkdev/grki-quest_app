<script>
	import { allArr } from '$lib/shared';
  import { RouteCard, EndRouteCard } from '$lib/entities';
</script>

<section class="section">
  <div class="container">
    <div class="wrapper">
      <div class="center__div">
        <div class="_850__wrap">
          <div class="centered_wrap">
            <div class="tag_green">Interaktywny przewodnik</div>
            <h2 class="heading-2 center"> text of the printing and typesetting industry.</h2>
            <div class="wrap_buttons">
              <a href="/app" target="_blank" class="cta-container w-inline-block">
                <div class="cta__text">Przejdź do trasy</div>
                <img src="images/63a183bd0c5c8e5ee8773811_arrow-right-white.svg" loading="lazy" alt="" class="cta__arrow">
              </a>
            </div>
          </div>
        </div>
      </div>
       <div class="timeline_wrap _72t">
        {#each allArr.slice(0, allArr.length-1) as routePoint}
          <RouteCard {routePoint}  />
        {/each}
        <EndRouteCard routePoint={allArr[allArr.length-1]}/>
      </div>
    </div>
  </div>
</section>
