const { createRouter, createMemoryHistory } = require("vue-router");
const { createSSRApp } = require("vue");
const { renderToString } = require("@vue/server-renderer");
const App = require('./dist/App.js').default;
const Hi = require('./dist/Hi.js').default;

async function render() {
  const app = createSSRApp(App);
  const router = createRouter({
    routes: [
      {
        path: '/hi',
        name: 'Hi',
        component: Hi
      }
    ],
    history: createMemoryHistory(),
  });

  app.use(router);

  await router.push({ name: 'Hi' });

  await router.isReady();

  const html = await renderToString(app);

  console.log('rendered', html);
}

render();