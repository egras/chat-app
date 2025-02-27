(function () {
    let chatContainer = document.createElement("div");
    chatContainer.id = "chatbot-widget";
    chatContainer.style.position = "fixed";
    chatContainer.style.top = "20px";
    chatContainer.style.right = "20px";
    chatContainer.style.width = "320px";
    chatContainer.style.height = "450px";
    chatContainer.style.background = "white";
    chatContainer.style.border = "1px solid #ccc";
    chatContainer.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    chatContainer.style.borderRadius = "10px";
    chatContainer.innerHTML = `<iframe src="https://egras.github.io/chat-app/" style="width:100%; height:100%; border:none;"></iframe>`;
    document.body.appendChild(chatContainer);
  })();
  