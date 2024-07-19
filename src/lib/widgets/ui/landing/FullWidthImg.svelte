<div class="hero-img__large"></div>
<!-- <div class="section hide">
  <div class="container shape">
    <div class="wrapper">
      <div class="center__div">
        <div class="column gap__32 align__center">
          <div class="_850__wrap">
            <div class="centered_wrap">
              <img src="images/63d82209832daa2b46ee8873_ic_capillary.svg" loading="lazy" alt="CapillaryFlow Icon" class="large_icon">
              <h2>Proven. Patented. <span class="highlight_text">Sustainable.</span>
              </h2>
              <h3>Performance like no other</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->


<style>
.hero-img__large {
  z-index: -1;
  background-image: url("/images/overlay.svg"), url("/images/banner.jpg");
  background-position: 50%, 50%;
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
  width: 100%;
  height: 780px;
  margin-top: -9vh;
  /* position: relative; */
}


@media screen and (max-width: 991px) {
  .hero-img__large {
    background-position: 100%, 100%;
    height: 600px;
    margin-top: -8vh;
  }
}


@media screen and (max-width: 767px) {
  .hero-img__large {
    height: 420px;
    margin-top: -6vh;
  }
}

@media screen and (max-width: 479px) {
  .hero-img__large {
    height: 250px;
    margin-top: -2vh;
  }
}
</style>
