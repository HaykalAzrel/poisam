<script setup>
import backgroundUrl from "./icon/background.svg";
</script>

<template>
  <section
    class="h-screen"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="container px-6 py-12 h-full">
      <div class="flex justify-around items-center h-full g-6 text-gray-800">
        <div
          class="md:w-8/12 absolute left-0 top-0 h-1 w-2 bg lg:w-3/12 mb-12 md:mb-0"
        >
          <img src="./icon/Logo.svg" class="w-12" alt="Phone image" />
        </div>
        <div
          class="md:w-8/12 lg:w-5/12 lg:ml-10 mr-24 px-24 py-24 rounded-md bg-teal-300"
        >
          <form>
            <div
              class="flex justify-center font-semibold text-3xl mb-10 font-sans text-gray-900"
            >
              Registrasi
            </div>
            <div class="mb-6">
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Nama"
              />
            </div>

            <div class="mb-6">
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
              />
            </div>

            <!-- Passeord input -->
            <div class="mb-6">
              <input
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="password"
              />
            </div>

            <!-- confirm Password input -->
            <div class="mb-6">
              <input
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Confirm Password"
              />
            </div>

            <div class="flex justify-between items-center mb-6">
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck3"
                  checked
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="exampleCheck2"
                  >Remember me</label
                >
              </div>
            </div>

            <!-- Submit button -->
            <a   class="shadow-md px-7 flex justify-center py-3 bg-teal-600 text-white font-medium text-sm leading-snug uppercase rounded hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out w-full"
             href="/login">

                Regist
            </a>
          </form>
        </div>
        
        <div class="w-1/3 font-sans text-xl">
          <p class="text-2xl font-bold w-3/5">
            Rorem ipsum dolor sit amet, consectetur
          </p>
          <p>
            adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
            sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
            condimentum velit, sit amet feugiat lectus. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
