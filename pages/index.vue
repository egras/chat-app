<template>
    <div class="chat-container">
      <div class="chat-header">Chat Assistant</div>
      <div class="chat-body">
        <div v-for="message in messages" :key="message.id" class="chat-message">
          <strong>{{ message.sender }}:</strong> {{ message.text }}
        </div>
      </div>
      <div class="chat-input">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Type your message..."
          @keyup.enter="sendMessage"
        />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const messages = ref([
    { id: 1, sender: 'Bot', text: 'Hello! How can I help you today?' }
  ])
  const newMessage = ref('')
  
  function sendMessage() {
    if (newMessage.value.trim()) {
      messages.value.push({
        id: messages.value.length + 1,
        sender: 'You',
        text: newMessage.value.trim()
      })
      newMessage.value = ''
    }
  }
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .chat-header {
    background: #007bff;
    color: white;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    font-size: 1.1em;
  }
  
  .chat-body {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    background: #f9f9f9;
  }
  
  .chat-message {
    margin-bottom: 10px;
  }
  
  .chat-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
    background: #fff;
  }
  
  .chat-input input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .chat-input button {
    margin-left: 10px;
    padding: 8px 16px;
    background: #007bff;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  