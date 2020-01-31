<template>
  <div class="bg-gray-900 h-full md-min-h-screen">
    <div class="container mx-auto py-24 px-10">
      <div class="text-white text-center text-4xl font-semibold mb-8">
        Choose a right plan for you
      </div>
      <ul class="flex max-w-3xl mx-auto items-center">
        <li class="flex-1 -mr-1">
          <div
            class="text-center text-lg block py-4 px-4 bg-gray-700 rounded text-white"
          >
            Annually
          </div>
        </li>
        <li class="flex-1 z-20">
          <div
            class="text-center text-lg block py-6 px-5 bg-purple-500 shadow rounded text-white"
          >
            Monthly
          </div>
        </li>
        <li class="flex-1 -ml-1">
          <div
            class="text-center text-lg block py-4 px-4 bg-gray-700 rounded text-white"
          >
            Yearly
          </div>
        </li>
      </ul>
      <div class="flex flex-wrap max-w-5xl mx-auto mt-24">
        <div class="w-full md-w-1/3 px-6 mb-6 md-mb-0">
          <div class="bg-gray-700 shadow">
            <div class="text-center text-white py-4 uppercase font-semibold">
              basic
            </div>
            <div class="flex mx-8 items-center">
              <div class="w-1/3">
                <div class="border-b border-gray-600"></div>
              </div>
              <div class="w-1/3">
                <div class="text-white text-center text-4xl">$10</div>
              </div>
              <div class="w-1/3">
                <div class="border-b border-gray-600"></div>
              </div>
            </div>
            <div class="text-center text-gray-500 my-2">Storage 15 GB</div>
            <div class="text-center text-gray-500 my-2">Transfer no limits</div>
            <div class="text-center text-gray-500 my-2">Database 10/2</div>
            <div class="border-b border-gray-600 mx-8 my-3"></div>
            <div class="text-center text-gray-500 my-2">
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
                class="feather text-red-500 inline-block feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <div class="text-center text-gray-500 my-2">
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
                class="feather text-red-500 inline-block feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <button class="text-white text-base bg-gray-800 w-full py-3 mt-3">
              GET STARTED
            </button>
          </div>
        </div>
        <div class="w-full md-w-1/3 px-6 mb-6 md-mb-0">
          <div class="bg-gray-700 relative overflow-hidden">
            <div class="text-center text-white py-4 uppercase font-semibold">
              standard
            </div>
            <div class="flex mx-8 items-center">
              <div class="w-1/3">
                <div class="border-b border-gray-600"></div>
              </div>
              <div class="w-1/3">
                <div class="text-white text-center text-4xl">$15</div>
              </div>
              <div class="w-1/3">
                <div class="border-b border-gray-600"></div>
              </div>
            </div>
            <div class="text-center text-gray-500 my-2">Storage 15 GB</div>
            <div class="text-center text-gray-500 my-2">Transfer no limits</div>
            <div class="text-center text-gray-500 my-2">Database 10/2</div>
            <div class="border-b border-gray-600 mx-8 my-3"></div>
            <div class="text-center text-gray-500 my-2">
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
                class="feather text-red-500 inline-block feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <div class="text-center text-gray-500 my-2">
              SSH Access
              <svg
                class="fill-current text-green-500 inline-block"
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
            <button class="text-white text-base bg-purple-500 w-full py-3 mt-3">
              GET STARTED
            </button>
            <div
              class="absolute right-0 top-0 -mt-3 -mr-8 h-12 w-20 bg-purple-500 shadow-lg"
              style="transform: rotate(45deg);"
            >
              <div class="flex justify-center mt-6">
                <svg
                  class="fill-current text-white"
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
        <div class="w-full md-w-1/3 px-6 mb-6 md-mb-0">
          <div class="bg-gray-700">
            <div class="text-center text-white py-4 uppercase font-semibold">
              professional
            </div>
            <div class="flex mx-8 items-center">
              <div class="w-1/3">
                <div class="border-b border-gray-600"></div>
              </div>
              <div class="w-1/3">
                <div class="text-white text-center text-4xl">$25</div>
              </div>
              <div class="w-1/3">
                <div class="border-b border-gray-600"></div>
              </div>
            </div>
            <div class="text-center text-gray-500 my-2">Storage 15 GB</div>
            <div class="text-center text-gray-500 my-2">Transfer no limits</div>
            <div class="text-center text-gray-500 my-2">Database 10/2</div>
            <div class="border-b border-gray-600 mx-8 my-3"></div>
            <div class="text-center text-gray-500 my-2">
              SSL Certificate
              <svg
                class="fill-current text-green-500 inline-block"
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
            <div class="text-center text-gray-500 my-2">
              SSH Access
              <svg
                class="fill-current text-green-500 inline-block"
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
            <button class="text-white text-base bg-gray-800 w-full py-3 mt-3">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center py-4 px-16 text-gray-400">
      Designed by
      <a
        href="#"
        class="text-purple-500 border-b-2 hover:text-purple-700 border-purple-400"
        >Shyamol Jyoti</a
      >
      || TailwindCSS || From dribbble shot
      <a
        href="https://dribbble.com/shots/9247376-Pricing-plan"
        target="_blank"
        class="text-purple-500 border-b-2 border-purple-400 hover:text-purple-700"
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
