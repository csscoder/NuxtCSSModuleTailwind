<template>
  <div :class="[extClass('page')]">
    <div :class="[extClass('page__box')]">
      <div :class="[extClass('page__title')]">
        Choose a right plan for you
      </div>

      <ul :class="[extClass('price-period')]">
        <li :class="[extClass('price-period__item')]">
          <div :class="[extClass('price-period__item-note')]">
            Annually
          </div>
        </li>
        <li
          :class="[extClass('price-period__item price-period__item--featured')]"
        >
          <div :class="[extClass('price-period__item-note')]">
            Monthly
          </div>
        </li>
        <li :class="[extClass('price-period__item')]">
          <div :class="[extClass('price-period__item-note')]">
            Yearly
          </div>
        </li>
      </ul>

      <div :class="[extClass('price')]">
        <div :class="[extClass('price__item')]">
          <div :class="[extClass('price__item-box')]">
            <div :class="[extClass('price__item-title')]">
              basic
            </div>

            <div :class="[extClass('price__coast')]">
              <div :class="[extClass('price__coast-col')]">
                <div :class="[extClass('price__coast-decor')]"></div>
              </div>
              <div :class="[extClass('price__coast-col')]">
                <div :class="[extClass('price__coast-title')]">$10</div>
              </div>
              <div :class="[extClass('price__coast-col')]">
                <div :class="[extClass('price__coast-decor')]"></div>
              </div>
            </div>

            <div :class="[extClass('price__note')]">Storage 15 GB</div>
            <div :class="[extClass('price__note')]">Transfer no limits</div>
            <div :class="[extClass('price__note')]">Database 10/2</div>

            <div :class="[extClass('price__hr')]"></div>

            <div :class="[extClass('price__note')]">
              SSL Certificate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                :class="[extClass('price__note-ico price__note-ico--red')]"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <div :class="[extClass('price__note')]">
              SSH Access
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                :class="[extClass('price__note-ico price__note-ico--red')]"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <button :class="[extClass('price__button')]">GET STARTED</button>
          </div>
        </div>

        <div :class="[extClass('price__item')]">
          <div :class="[extClass('price__item-box')]">
            <div :class="[extClass('price__item-title')]">
              standard
            </div>

            <div :class="[extClass('price__coast')]">
              <div :class="[extClass('price__coast-col')]">
                <div :class="[extClass('price__coast-decor')]"></div>
              </div>
              <div :class="[extClass('price__coast-col')]">
                <div :class="[extClass('price__coast-title')]">$15</div>
              </div>
              <div :class="[extClass('price__coast-col')]">
                <div :class="[extClass('price__coast-decor')]"></div>
              </div>
            </div>

            <div :class="[extClass('price__note')]">Storage 15 GB</div>
            <div :class="[extClass('price__note')]">Transfer no limits</div>
            <div :class="[extClass('price__note')]">Database 10/2</div>

            <div :class="[extClass('price__hr')]"></div>

            <div :class="[extClass('price__note')]">
              SSL Certificate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                :class="[extClass('price__note-ico price__note-ico--red')]"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <div :class="[extClass('price__note')]">
              SSH Access
              <svg
                :class="[extClass('price__note-ico price__note-ico--green')]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"
                />
              </svg>
            </div>
            <button
              :class="[extClass('price__button price__button--featured')]"
            >
              GET STARTED
            </button>

            <div :class="[extClass('price__featured')]">
              <div :class="[extClass('price__featured-box')]">
                <svg
                  :class="[extClass('price__featured-ico')]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.947,9.179c-0.129-0.378-0.47-0.645-0.868-0.676L15.378,8.05l-2.467-5.461C12.75,2.23,12.393,2,12,2	s-0.75,0.23-0.911,0.588L8.622,8.05L2.921,8.503C2.53,8.534,2.193,8.791,2.06,9.16s-0.039,0.782,0.242,1.056l4.213,4.107	l-1.49,6.452c-0.092,0.399,0.069,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22c0.193,0,0.387-0.056,0.555-0.168L12,18.202	l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082l-1.829-6.4l4.536-4.082	C21.966,9.976,22.075,9.558,21.947,9.179z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div :class="[extClass('price__item')]">
          <div :class="[extClass('price__item-box')]">
            <div :class="[extClass('price__item-title')]">
              professional
            </div>

            <div :class="[extClass('price__coast')]">
              <div :class="[extClass('price__coast-col')]">
                <div :class="[extClass('price__coast-decor')]"></div>
              </div>
              <div :class="[extClass('price__coast-col')]">
                <div :class="[extClass('price__coast-title')]">$25</div>
              </div>
              <div :class="[extClass('price__coast-col')]">
                <div :class="[extClass('price__coast-decor')]"></div>
              </div>
            </div>

            <div :class="[extClass('price__note')]">Storage 15 GB</div>
            <div :class="[extClass('price__note')]">Transfer no limits</div>
            <div :class="[extClass('price__note')]">Database 10/2</div>

            <div :class="[extClass('price__hr')]"></div>

            <div :class="[extClass('price__note')]">
              SSL Certificate
              <svg
                :class="[extClass('price__note-ico price__note-ico--green')]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"
                />
              </svg>
            </div>
            <div :class="[extClass('price__note')]">
              SSH Access
              <svg
                :class="[extClass('price__note-ico price__note-ico--green')]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"
                />
              </svg>
            </div>
            <button :class="[extClass('price__button')]">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
    <div :class="[extClass('copyright')]">
      Designed by
      <a href="#" :class="[extClass('copyright__link')]">Shyamol Jyoti</a>
      || TailwindCSS || From dribbble shot
      <a
        href="https://dribbble.com/shots/9247376-Pricing-plan"
        target="_blank"
        :class="[extClass('copyright__link')]"
        >Pricing Plan</a
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>
<style lang="scss" src="./_index.scss" module />
