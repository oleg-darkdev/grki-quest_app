<script>
  // , step
  export let startedPosition, selectedPosition;
</script>

<div role="listitem" class="slider-item w-dyn-item">
  <div class="grid__container max_height">
    <div class="top__row">
      <div class="grid-img_contain _16__b">
        <img src="images/{startedPosition.img}" loading="lazy" alt="{startedPosition.subTitle} photo" class="grid-img">
        <div class="location_tag_curve">
          <img src="images/63d50347d8cef93927c52327_end_curve.svg" loading="lazy" alt="" class="img_curve_end">
          <p class="location_tag">{startedPosition.subTitle}</p>
          <img src="images/63d50347f7e09bde3c233af0_start_curve.svg" loading="lazy" alt="" class="img_curve_start">
        </div>
      </div>
      <div class="grid_info static">
        <h4>{startedPosition.title}</h4>
        <p class="paragraph small w-dyn-bind-empty"></p>
      </div>
    </div>
    <div class="cta__wrap">
      <button on:click={()=> {
        selectedPosition = startedPosition;
        // step++;
      }} class="cta-container w-inline-block">
        <div class="cta__text">Rozpoczęcie trasy</div>
        <img src="images/63a183bd0c5c8e5ee8773811_arrow-right-white.svg" loading="lazy" alt="" class="cta__arrow">
      </button>
    </div>
  </div>
</div>
