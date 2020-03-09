import animateTo from '@runroom/purejs/lib/animateTo';
import events from '@runroom/purejs/lib/events';
import forEach from '@runroom/purejs/lib/forEach';
import isExplorer from '@runroom/purejs/lib/isExplorer';
import touchable from '@runroom/purejs/lib/touchable';

// polyfills and helpers should be before any other component
import './helpers/polyfills';

touchable();

if (isExplorer()) {
  document.documentElement.classList.add('browser-ie');
}

events.onDocumentReady(() => {
  // For small projects or low use of javascript, you can add events in this
  // same file, as follows. Eventhough the module import method is preferred.
  const anchors = document.querySelectorAll('.js-anchor');

  if (anchors) {
    forEach(anchors, anchor => {
      anchor.addEventListener('click', event => {
        const element = event.target.dataset.anchor || event.target.getAttribute('href');
        animateTo({ element, speed: 300 });
      });
    });
  }
});