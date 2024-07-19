<script>
  export let group;
</script>


<div class="row fill">
  <div class="col_50">
    <div class="img_container">
      <img src="images/{group.banner}" loading="lazy" sizes="(max-width: 767px) 90vw, 44vw" width="716" alt="{group.subTitle} img" class="img_cover">
      <div class="location_tag_w-curve_right">
        <img src="images/63d50347f7e09bde3c233af0_start_curve.svg" loading="lazy" alt="" class="img_curve_start right">
        <img src="images/63d50347d8cef93927c52327_end_curve.svg" loading="lazy" alt="" class="img_curve_end right">
        <p class="location_tag right">{group.subTitle}</p>
      </div>
    </div>
  </div>

  <a name="{group.anchor}"></a>

  <div class="col_50">
    <div class="col_wrap middle">
      <img src="images/{group.icon}" loading="lazy" alt="" class="icon__40">
      <h3>{group.title}</h3>
      <p>
        {group.desc}
      </p>
      <div class="link_wrap">
        {#each group.locations as location}
        <!-- {location.id} -->
          <a data-w-id="eb314ca1-4c19-b5ef-8c6e-f3a88cd2f8c9" href="/" class="sport-info-contain">
            <div class="paragraph bold">{location.title}</div>
            <img src="images/63a183bd18ceba00f0e0f78a_arrow-right-black.svg" loading="lazy" alt="" class="cta__arrow">
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>



