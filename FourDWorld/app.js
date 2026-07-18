const appStoreLinks = document.querySelectorAll('[data-app-store]');
const source = new URLSearchParams(window.location.search).get('source');

if (source) {
  appStoreLinks.forEach((link) => {
    const url = new URL(link.href);
    url.searchParams.set('ct', `fourdworld_${source.slice(0, 32)}`);
    url.searchParams.set('mt', '8');
    link.href = url.toString();
  });
}

document.querySelectorAll('.demo-item').forEach((item) => {
  const video = item.querySelector('video');
  const button = item.querySelector('.video-toggle');

  button.addEventListener('click', async () => {
    if (video.paused) {
      document.querySelectorAll('.demo-item video').forEach((other) => {
        if (other !== video) other.pause();
      });
      await video.play();
    } else {
      video.pause();
    }
  });

  video.addEventListener('play', () => item.classList.add('is-playing'));
  video.addEventListener('pause', () => item.classList.remove('is-playing'));
});
