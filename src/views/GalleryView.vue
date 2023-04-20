<template>
  <div
    data-name="viewport"
    class="max-w-screen max-h-screen w-screen h-screen bg-[#f0e9dd] flex flex-col space-y-10 justify-center items-center perspective-5"
  >
    <div
      data-name="bottomtier"
      class="animate-rotate grid grid-flow-col grid-cols-4 gap-10 w-[300px] h-[169px] bg-[url('src/assets/images/parent.png')] transform-style-3d -translate-z-280 rotate-y-0 mt-200"
    >
      <div
        data-name="toptier"
        class="grid grid-flow-col grid-cols-4 gap-10 w-[300px] h-[169px] bg-[url('src/assets/images/parent.png')] transform-style-3d -translate-y-250"
      >
        <img
          class="absolute w-[300px] opacity-70 rounded-[4px] translate-z-160"
          src="src/assets/images/pic1.jpg"
          alt="pic1"
        />
        <img
          class="absolute w-[300px] opacity-70 rounded-[4px] translate-x-160 rotate-y-90"
          src="src/assets/images/pic2.jpg"
          alt="pic2"
        />
        <img
          class="absolute w-[300px] opacity-70 rounded-[4px] -translate-z-160 rotate-y-180"
          src="src/assets/images/pic3.jpg"
          alt="pic3"
        />
        <img
          class="absolute w-[300px] opacity-70 rounded-[4px] -translate-x-160 -rotate-y-90"
          src="src/assets/images/pic4.jpg"
          alt="pic4"
        />
      </div>
      <img
        class="absolute w-[300px] opacity-70 rounded-[4px] translate-z-280"
        src="src/assets/images/pic5.jpg"
        alt="pic5"
      />
      <img
        class="absolute w-[300px] opacity-70 rounded-[4px] translate-x-280 rotate-y-90"
        src="src/assets/images/pic6.jpg"
        alt="pic6"
      />
      <img
        class="absolute w-[300px] opacity-70 rounded-[4px] -translate-z-280 rotate-y-180"
        src="src/assets/images/pic7.jpg"
        alt="pic7"
      />
      <img
        class="absolute w-[300px] opacity-70 rounded-[4px] -translate-x-280 -rotate-y-90"
        src="src/assets/images/pic8.jpg"
        alt="pic8"
      />
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
