<template>
  <div class="p-4 bg-white rounded-lg">
    <div class="text-blue-600 underline flex flex-col space-y-2">
      <router-link :to="{ name: 'cube3d' }">Cube 3D</router-link>
      <router-link :to="{ name: 'gallery' }">Gallery</router-link>
    </div>
  </div>
</template>
