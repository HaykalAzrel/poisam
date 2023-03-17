<script>
export default {
  Name: "sideBar",
};
</script>
<template>
  <div class="">
    <button
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 ml-2 text-sm mt-12 bg-teal-300 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="default-sidebar"
      class="fixed sm:top-12 sm:left-48 sm:z-40 sm:w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div
        class="h-5/6 px-3 py-4 mt-5 overflow-y-auto rounded-md bg-gray-50 dark:bg-teal-500"
      >
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal sm:text-white sm:rounded-lg dark:text-white hover:bg-gray-100 shadow-lg dark:hover:bg-teal-600"
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="sm:ml-3">Dashboard</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center shadow-md p-2 text-base font-normal sm:text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-teal-600"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <span class="flex-1 ml-3 whitespace-nowrap">Pesan</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center sm:shadow-md p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-teal-600"
            >
              <img src="./icon/logoMabs.svg" class="w-6 " alt="">
              <span class="flex-1 ml-3 whitespace-nowrap">Maps</span>
            </a>
          </li>
        </ul>
        <div class="relative h-96 ">
          <ul>

            <li>
              <a
                href="/login"
                class="flex items-center absolute bottom-11 shadow-md p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-teal-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-white group-hover:text-teal-500 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">log in</span>
              </a>
            </li>
            <li>
              <a
                href="/login"
                class="flex items-center absolute bottom-0 shadow-md p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-teal-700"
                >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-white group-hover:text-teal-500 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                    ></path>
                  </svg>
                  
                  <span class="flex-1 ml-3 whitespace-nowrap">log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

    </aside>
    <!-- side barr end -->
  </div>
</template>
