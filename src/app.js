export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'bindings'], name: 'bindings',      moduleId: 'bindings',      nav: true, title: 'Bindings' },
      { route: 'svg',            name: 'svg',           moduleId: 'svg',           nav: true, title: 'SVG Component' },
      { route: 'transclusion',   name: 'transclusion',  moduleId: 'transclusion',  nav: true, title: 'Transclusion' },
      { route: 'services',       name: 'services',      moduleId: 'services',      nav: true, title: 'Services' }
    ]);

    this.router = router;
  }
}
