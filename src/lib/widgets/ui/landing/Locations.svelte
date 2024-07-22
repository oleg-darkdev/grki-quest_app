<script>
  import {LocationCard} from '$entities';
  import {natureGroup, historicalGroup,} from '$shared';

  const locationsGroups =
  [
    {
    icon: '63d3b6b2b5b3968d333abc11_ic_golf.svg',
    banner: '63d182aea1070d3d4f6e74ca_Beautiful%20Golf%20Bunkers%20and%20Golf%20Courses.jpg',
    title: 'Zabytki przyrody - naturalnego pochodzenia.',
    subTitle: 'Zabytki przyrody',
    anchor: 'nature',
    desc: `Każde miejsce to szansa na cieszenie się pięknem natury i samotnością.`,
    locations: natureGroup
  },
    {
    icon: '63d3b6b2b5b3968d333abc11_ic_golf.svg',
    banner: 'architecture.jpg',
    title: 'Pomniki historii - stworzone przez człowieka.',
    subTitle: 'Pomniki historii',
    anchor: 'historical',
    desc: `W tej kategorii znajdziesz zabytki historyczne stworzone przez człowieka, które opowiedzą ci o bogatym dorobku kulturowym regionu.`,
    locations: historicalGroup
  },
  ]
</script>


<section class="section">
  <div class="container">
    <div class="wrapper large">
      <div class="column gap__72">
        <div class="_800__wrap">
          <div class="centered_wrap">
            <h2>Dla tych, którzy chcą zanurzyć się w magii Górek.</h2>
            <p>
              Aplikacja webowa stworzona dla tych, którzy chcą zanurzyć się w magii Górek Zachodnich. Ten autorski przewodnik pomoże Ci odkryć najciekawsze atrakcje przyrodnicze i architektoniczne tego malowniczego regionu.
         </div>
        </div>
        <div class="column gap__152">
          {#each locationsGroups as group}
            <LocationCard {group}/>
          {/each}
        </div>
      </div>
    </div>

  </div>
</section>
