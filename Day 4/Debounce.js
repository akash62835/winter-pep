function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Log Debounced Events
const logEvent = debounce(() => {
    const logDiv = document.getElementById('log');
    const timestamp = new Date().toLocaleTimeString();
    logDiv.innerHTML += `<div>Resize event at ${timestamp}</div>`;
    logDiv.scrollTop = logDiv.scrollHeight; // Auto-scroll to the latest message
}, 300);

window.addEventListener('resize', logEvent);