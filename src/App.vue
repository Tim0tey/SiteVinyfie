<script setup>
import { RouteLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <ul class="flex space-x-4 p-4 bg-gray-800 text-white">
        <li>
          <RouteLink to="/" class="hover:underline">Home</RouteLink>
        </li>
        <li>
          <RouteLink to="/about" class="hover:underline">About</RouteLink>
        </li>
      </ul>
      <RouterView />
    </nav>
  </header>
</template>

<style>
@import "tailwindcss";
</style>
