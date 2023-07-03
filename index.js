const redirectButton = document.getElementById('redirectButton');
const urlInput = document.getElementById('urlInput');

redirectButton.addEventListener('click', () => {
    const url = urlInput.value.trim();
    const checkProtocolUrl = url.indexOf('http://') === 0 || url.indexOf('https://') === 0 ? url : `http://${url}`;
    window.location.href = checkProtocolUrl;
});