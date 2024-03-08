document.addEventListener('DOMContentLoaded', function(
) {
  // Fade out the loader when the document is ready
document.querySelector('.loader').style.opacity = '0';

  // Delay to allow the proxy website to load
setTimeout(function(
) {
    // Replace 'https://now.gg/apps/uncube/7074/now.html' with the URL of the website you want to load through the proxy
const proxyFrame = document.querySelector('#proxyFrame');
    const urlToLoad = 'https://now.gg/apps/uncube/7074/now.html';
    proxyFrame.src = urlToLoad;
  }, 2000); // Adjust the delay (2000ms = 2s) as needed
});
