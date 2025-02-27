<template>
    <div>
      <!-- Render the page content -->
      <NuxtPage />
  
      <!-- Chat widget container -->
      <div id="chat-widget">
        <NuxtChild />
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional logic is required here unless you want to add global chat behavior.
  </script>
  
  <style scoped>
  #chat-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 320px;
    height: 450px;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 9999;
  }
  </style>
  