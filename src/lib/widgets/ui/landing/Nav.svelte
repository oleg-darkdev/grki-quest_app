<script>
  const navigation = [
    {
      title: 'Aplikacja',
      href: '/app'
    },
    {
      title: 'Zabytki przyrody',
      href: '#nature'
    },
    {
      title: 'Pomniki historii',
      href: '#historical'
    },
    {
      title: 'Trasa',
      href: '#track'
    },
    {
      title: 'F.A.Q.',
      href: '#faq'
    },

  ]
</script>

<section  role="banner" class="nav__bar w-nav">
      <div class="nav__contain">
        <a href="/" aria-current="page" class="brand-2 w-nav-brand w--current">
          <img src="images/logo.svg" loading="lazy" alt="" class="logo">
        </a>


        <nav role="navigation" class="nav__menu w-nav-menu">
          <div class="nav__menu-center">
            {#each navigation as {title, href}}
            <!-- <div  class=" "> -->
              <!-- <div class=""> -->

                  <a href='{href}' class="mx-4 nav__text">{title}</a>

              <!-- </div> -->
            <!-- </div> -->
            {/each}

            <!-- <div  class="dropdown sports w-dropdown">
              <div data-w-id="7cb2aff2-c386-0ae5-e092-9ed511552911" class="drop__toggle w-dropdown-toggle">
                <div class="nav__text">Lorem impsum</div>
                <img src="images/63762e7f7359609f60afc526_arrow-chevron-down.svg" loading="lazy" alt="" class="drop__icon">
              </div>
              <nav class="drop__list w-dropdown-list">
                <div class="row menu"></div>
                <div class="drop__contain">
                  <div class="nav__collumn">
                    <div class="nav__links">
                      <a href="/" class="nav__content w-inline-block">
                        <img src="images/63d8d4097de2b7e626d3096b_ic_greencity_solutions.svg" loading="lazy" alt="" class="icon__32">
                        <div class="nav__header light">Solutions</div>
                      </a>
                      <a href="/" class="nav__content w-inline-block">
                        <img src="images/63d8d409dd3a6b4515017685_ic_greencity_cases.svg" loading="lazy" alt="" class="icon__32">
                        <div class="nav__header light">Cases</div>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div> -->

            <div class="contact-button">
              <div  class="dropdown contact w-dropdown">
                <div data-w-id="7cb2aff2-c386-0ae5-e092-9ed51155298e" class="drop__toggle-contact w-dropdown-toggle">
                  <div class="nav__text">contact</div>
                  <img src="images/63762e7f7359609f60afc526_arrow-chevron-down.svg" loading="lazy" alt="" class="drop__icon">
                </div>
                <nav class="drop__list w-dropdown-list">
                  <div class="drop__contain">
                    <div class="row menu">
                      <div class="nav__collumn">
                        <div class="nav__links">
                          <a href="/" class="nav__content w-inline-block">
                            <img src="images/63d81757706f9e4fdb00f70f_ic_office.svg" loading="lazy" alt="" class="icon__32">
                            <div class="nav__header light">Headquarter &amp; regional offices</div>
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </nav>
        <div class="menu_button w-nav-button">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </section>
