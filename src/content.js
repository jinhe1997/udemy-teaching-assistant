// Create a container for our React app
const container = document.createElement('div');
container.id = 'udemy-ai-assistant-root';
document.body.appendChild(container);

// Load our React app
const script = document.createElement('script');
script.src = chrome.runtime.getURL('dist/main.js');
script.type = 'module';
document.body.appendChild(script);