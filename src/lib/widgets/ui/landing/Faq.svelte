<script>
  import { faqData } from '$lib/shared';
</script>


<section class="section">
  <div class="container">
    <div class="wrapper _0_top">
      <div class="center__div">
        <div class="column gap__48 align__center">
          <a name="faq"></a>
          <div class="_950__wrap center">
            <h2>Często zadawane pytania</h2>
          </div>
          <div class="_850__wrap">
            <div class="column gap__24">
              <div id="bunker" class="faq-group">
                <div class="collection-wrap w-dyn-list">

                  <div role="list" class="column gap__8  w-dyn-items">
                    {#each faqData as faq}
                    <div role="listitem" class="mx-auto faq-item w-dyn-item">
                      <div  class="faq-question-wrap">
                        <button on:click={()=> faq.showMore = !faq.showMore} class="faq-question-bar w-inline-block">
                          <div class="subhead">{faq.q}</div>
                          <div class="faq-circle">
                            <img src="images/63886d5011d3ac3789b83942_plus.svg" alt="" class="plus-icon">
                          </div>
                        </button>
                        {#if faq.showMore}
                          <div class="faq-content">
                            <div class="faq__rich w-richtext">
                              {#each faq.a as answer}
                                <p>{answer}</p>
                              {/each}
                            </div>
                          </div>
                        {/if}
                      </div>
                    </div>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<style>
.faq-item {
  /* width: 100%; */
}
</style>
