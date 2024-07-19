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
    desc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    locations: natureGroup
  },
    {
    icon: '63d3b6b2b5b3968d333abc11_ic_golf.svg',
    banner: '63d182aea1070d3d4f6e74ca_Beautiful%20Golf%20Bunkers%20and%20Golf%20Courses.jpg',
    title: 'Pomniki historii - stworzone przez człowieka.',
    subTitle: 'Pomniki historii',
    anchor: 'historical',
    desc: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
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
            <h2>Lorem Ipsum is simply dummy</h2>
            <p>
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.          </div>
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
