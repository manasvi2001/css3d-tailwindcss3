<template>
  <div
    data-name="viewport"
    class="w-screen h-screen perspective-5 flex items-center justify-center bg-shadow bg-no-repeat bg-center bg-[#f0e9dd]"
  >
    <div
      data-name="cube"
      class="transform absolute w-400 h-400 bg-transparent transition-transform duration-[400ms] -translate-z-200 transform-style-3d origin-50-50-0 [&>*]:bg-blue-500 [&>*]:w-full [&>*]:h-full [&>*]:border [&>*]:border-red-700 [&>*]:absolute [&>*]:opacity-70"
      :class="{
        '-rotate-y-90': animate.right,
        '-rotate-y-180': animate.back,
        '-rotate-y-270': animate.left,
        '-rotate-y-270 -rotate-z-90': animate.top,
      }"
    >
      <div
        data-name="front"
        class="translate-z-200 !bg-[#f4d37a] !opacity-100 border-none"
      >
        <div
          class="container h-full flex flex-col space-y-4 px-24 justify-center items-center"
        >
          <div
            class="font-sans text-lg leading-none text-center font-extralight mt-1 mb-3"
          >
            Sign In
          </div>
          <div class="relative">
            <span
              class="font-liga text-[#f4d37a] absolute inset-y-0 left-0 flex items-center pl-2"
              >.</span
            >
            <input
              type="text"
              value=""
              class="bg-[#4f3b3b] text-white py-1 px-5 pl-7 rounded-3xl focus:outline-none focus:bg-[#4f3b3b] autofill:bg-[#4f3b3b]"
            />
          </div>
          <div class="relative">
            <span
              class="font-liga text-[#f4d37a] absolute inset-y-0 left-0 flex items-center pl-2"
              >w</span
            >
            <input
              type="password"
              value=""
              class="bg-[#4f3b3b] text-white py-1 px-5 pl-7 rounded-3xl focus:outline-none focus:bg-[#4f3b3b] autofill:bg-[#4f3b3b]"
            />
          </div>
          <div class="self-end">
            <button
              @click="handleAnimation('right')"
              class="px-4 py-2 rounded-full bg-white text-#4f3b3b transition-all duration-300 hover:bg-[#cd9c50] hover:text-white"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div
        data-name="right"
        class="translate-x-200 rotate-y-90 !bg-[#f4d37a] !opacity-100 border-none"
      >
        <div
          class="w-full h-full mx-auto bg-wheat bg-cover bg-no-repeat text-white"
        >
          <div class="flex flex-col w-full h-full">
            <h1 class="m-10 mb-5 text-4xl font-extralight">EWD UI</h1>
            <p class="max-w-prose m-10 mt-0 text-xl font-extralight">
              Open source UI Kit...
            </p>
            <button
              @click="handleAnimation('back')"
              class="z-20 cursor-pointer self-end mr-5 text-center bg-[#4f3b3b] px-4 py-1 rounded-full"
              data-anim="back"
            >
              Find out more...<span
                class="inline-flex justify-center items-center text-center text-[#4f3b3b] p-1 -mr-2 bg-white rounded-full w-7 h-7"
                >&gt;</span
              >
            </button>
            <ul class="flex flex-row h-full mt-12">
              <li
                class="flex w-full justify-center items-center text-center bg-[#4f3b3b] border-r border-[#959595]"
              >
                <div class="text-2xl font-extralight flex flex-col space-y-4">
                  <div class="font-liga">O</div>
                  <div>1,567</div>
                </div>
              </li>
              <li
                class="flex w-full justify-center items-center text-center bg-[#4f3b3b] border-r border-[#959595]"
              >
                <div class="text-2xl font-extralight flex flex-col space-y-4">
                  <div class="font-liga">T</div>
                  <div>1,900</div>
                </div>
              </li>
              <li
                class="flex w-full justify-center items-center text-center bg-[#4f3b3b] border-[#959595]"
              >
                <div class="text-2xl font-extralight flex flex-col space-y-4">
                  <div class="font-liga">S</div>
                  <div>567</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        data-name="back"
        class="-translate-z-200 rotate-y-180 !bg-[#4f3b3b] !opacity-100 border-none"
      >
        <div>
          <video
            src="src/assets/videos/ocean_waves.mp4"
            width="400"
            controls
          ></video>
          <p class="p-4 text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            corrupti totam obcaecati maiores voluptate vero corporis,
            voluptatibus reiciendis odit quia.
          </p>
          <div class="p-4 flex flex-row justify-evenly">
            <button
              @click="handleAnimation('right')"
              class="px-2 py-1 bg-white rounded-full hover:bg-[#cd9c50] hover:text-white"
            >
              <span class="font-liga">&#211;</span>&nbsp;Back
            </button>
            <button
              @click="handleAnimation('left')"
              class="px-2 py-1 bg-white rounded-full hover:bg-[#cd9c50] hover:text-white"
            >
              Next&nbsp;<span class="font-liga">&#214;</span>
            </button>
          </div>
        </div>
      </div>
      <div
        data-name="left"
        class="-translate-x-200 -rotate-y-90 p-4 text-justify flex flex-col justify-center items-center space-y-4 !opacity-100 border-none bg-lightbg bg-cover bg-no-repeat"
      >
        <p class="font-extralight text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem eius
          aspernatur, rerum amet iste delectus totam adipisci exercitationem
          perspiciatis, ea a consequatur magni impedit, autem vel modi nam.
          Nesciunt doloribus quasi placeat expedita dolorum nostrum, rerum sed
          architecto? Inventore obcaecati ullam consequuntur nihil assumenda
          commodi neque autem odio sequi expedita labore, quasi nemo corrupti
          reprehenderit rem quisquam ab quam soluta?
        </p>
        <p class="font-extralight text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo rerum
          sapiente reiciendis quaerat neque quasi praesentium provident eius
          culpa quos, distinctio, unde delectus. At cupiditate ullam quasi
          delectus esse.
        </p>
        <button
          @click="handleAnimation('top')"
          class="px-2 py-1 rounded-full bg-[#4f3b3b] text-white hover:bg-[#f4d37a] hover:text-[#4f3b3b]"
        >
          <span class="font-liga">&#243;</span>&nbsp;Finish
        </button>
      </div>
      <div
        data-name="top"
        class="-translate-y-200 rotate-x-90 rotate-z-90 p-4 flex flex-col justify-center items-center space-y-4 !opacity-100 border-none bg-darkbg bg-cover bg-no-repeat"
      >
        <h1 class="text-4xl text-white">Thank you!</h1>
        <div class="font-liga text-4xl text-white">&#243;</div>
      </div>
      <div data-name="bottom" class="translate-y-200 rotate-x-90"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const prevAnim = ref("front");
const animate = ref({
  left: false,
  right: false,
  top: false,
  bottom: false,
  front: false,
  back: false,
});
const handleAnimation = (value) => {
  animate.value[prevAnim.value] = false;
  animate.value[value] = true;
  prevAnim.value = value;
};
</script>

<style scoped>
/* div[data-name="cube"] {
  transform: rotateX(45deg);
} */
</style>
