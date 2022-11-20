import DemoApp from './app';

const app = new DemoApp(document.getElementById('app'));

window.addEventListener('load', () => {
  app.render();
  app.startInterview();
});
