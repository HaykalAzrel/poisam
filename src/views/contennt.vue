<script setup>
import navBar from "./nav.vue";
import sideBar from './side.vue'
import backgroundUrl from './icon/background.svg'

</script>

<template>
  
  <navBar/>

  <div class="h-screen" :style="{ backgroundImage: `url(${backgroundUrl})` }">
  
   <sideBar/>
  <!-- content oppen -->
  <div class="p-4 sm:ml-64 fixed w-screen top-10">
    <!-- indikasi awal -->
    <div
      class="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
    >
      <div class="flex gap-4 sm:ml-10 sm:mb-4 justify-evenly">
        <div class="flex items-center justify-center md:h-24 md:w-1/4"></div>
        <div
          class="h-36 sm:w-1/2 rounded sm:shadow-lg bg-teal-700"
        >
        <div class="flex justify-evenly mt-9 text-white">
          <div class="bg-teal-400  sm:h-24 w-48 sm:shadow-lg rounded-md">
            <div class="flex justify-center">
              <img src="./icon/poinwhite.svg" class="sm:w-8 h-10 " alt="">
              <div class=" h-10 w-10 flex justify-start font-mono text-md white items-center">
                poin
              </div>
            </div>
            <div class="flex justify-center text-black  sm:w-48  sm:h-10 items-center mt-2 ">
              <div class="bg-teal-200 shadow-xl am:h-10 w-36 flex rounded-md justify-center items-center">
                10.000
              </div>
            </div>
          </div>
          <div class="bg-teal-400  h-24 w-48 shadow-lg rounded-md">
            <div class="flex justify-center">
              <img src="./icon/Walletwhite.svg" class="w-12 mt-3 " alt="walet">
            </div>
            
            <div class="flex justify-center">
              Tukar Poin
            </div>
          </div>
          <div class="bg-teal-400  h-24 w-48 shadow-lg rounded-md">
            <div class="flex justify-center">
              <img src="./icon/QRwhite.svg" class="w-12 mt-3 " alt="walet">
            </div>
            
            <div class="flex justify-center">
              Scan
            </div>
          </div>
        </div>
        </div>
        <div class="flex items-center justify-center h-24 w-1/4"></div>
      </div>
    </div>
    <!-- indikasi end -->


    <!-- indikasi 2 awal -->
    <div
      class="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
    >
      <div class="flex gap-4 ml-10 mb-4 justify-evenly">
        
        <div class="flex items-center justify-center h-24 w-1/4"></div>
        <div
          class="h-96  w-2/4 rounded-md shadow-lg bg-gray-50 dark:bg-teal-400">
        <div class="flex justify-center h-10 items-center rounded-md text-white bg-teal-700">
          Riwayat
        </div>
        <div class="">
          <div class="text-black my-3 h-7 shadow-md bg-gray-100 rounded mx-10">
            riwayat 1
          </div>
          <div class="text-black my-3 h-7 shadow-md bg-gray-100 rounded mx-10">
            riwayat 2
          </div>
          <div class="text-black my-3 h-7 shadow-md bg-gray-100 rounded mx-10">
            riwayat 3
          </div>
        </div>
        </div>
        <div class="flex items-center justify-center h-24 w-1/4"></div>
      </div>
    </div>
    <!-- indikasi 2 end -->
  </div>
</div>
</template>
