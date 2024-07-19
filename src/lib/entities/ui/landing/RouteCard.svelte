<script>
  export let routePoint;
</script>

<div class="timeline__collumn">
  {#if routePoint.align == 'right'}
      <div class="timeline__row hid"></div>
    <div class="timeline__row line first">
      <div class="circle"></div>
      <div class="line"></div>
    </div>
  {/if}

  <div class="timeline__row">
    <div class="col_wrap">
      <div class="img_container">
        <img src="images/routes/{routePoint.banner}" loading="lazy" width="465" sizes="(max-width: 479px) 78vw, (max-width: 767px) 80vw, (max-width: 991px) 38vw, 39vw" alt="{routePoint.title} photo"  class="image__main xs">
        <div class="location_tag_curve tags {routePoint.align == 'left' ? 'right': ''}">
          <img src="images/{routePoint.align == 'right' ? '63d50347d8cef93927c52327_end_curve.svg' : '63d50347f7e09bde3c233af0_start_curve.svg'}" loading="lazy" alt="" class="{routePoint.align == 'right' ? 'img_curve_end':'img_curve_start right'} ">
          <div class="tag green">step {routePoint.id}</div>
          <img src="images/{routePoint.align == 'right' ? '63d50347f7e09bde3c233af0_start_curve.svg' : '63d50347d8cef93927c52327_end_curve.svg'}" loading="lazy" alt="" class="{routePoint.align == 'right' ? 'img_curve_start': 'img_curve_end right'}">
        </div>
      </div>
      <h3 class="heading-3 {routePoint.align == 'right' ? '': 'right'}">{routePoint.title}</h3>
      <p class="paragraph main {routePoint.align == 'right' ? '':'right'}">
        {routePoint.shortDesc}
      </p>
    </div>
  </div>
  {#if routePoint.align == 'left'}
  <div class="timeline__row line">
    <div class="line small"></div>
    <div class="circle"></div>
    <div class="line"></div>
  </div>
  <div class="timeline__row hid"></div>
  {/if}
</div>
