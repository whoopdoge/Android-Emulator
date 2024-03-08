document.addEventListener('DOMContentLoaded', function(
) {
  // Fade out the loader when the document is ready
document.querySelector('.loader').style.opacity = '0';

  // Delay to allow the proxy website to load
setTimeout(function(
) {
    // Replace 'https://example.com' with the URL of the website you want to load through the proxy
const proxyObject = document.querySelector('#proxyObject');
    proxyObject.setAttribute('data', 'https://example.com');
  }, 2000); // Adjust the delay (2000ms = 2s) as needed
});
