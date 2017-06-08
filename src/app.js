export class App {
  configureRouter(config, router) {
    var postRender = new PostRenderStep();
    this.router = router;

    config.addPostRenderStep(postRender);
    config.title = 'La Tatuadora';
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: 'pages/homepage/homepage',
        title: 'Inicio',
        nav: true
      },
      {
        route: 'news',
        name: 'news',
        moduleId: 'pages/homepage/homepage',
        title: 'News',
        nav: true
      },
      {
        route: 'inspirate',
        name: 'inspirate',
        moduleId: 'pages/inspirate/inspirate',
        title: 'Inspírate',
        nav: true
      },
      {
        route: 'buscartatuador',
        name: 'search_artist',
        moduleId: 'pages/homepage/homepage',
        title: 'Busca un tatuador',
        nav: true
      },
      {
        route: 'tatuate',
        name: 'get_tattoo',
        moduleId: 'pages/homepage/homepage',
        title: 'Tatúate',
        nav: true
      },
      {
        route: 'flashes',
        name: 'flashes',
        moduleId: 'pages/flashes/flashes',
        title: 'Flashes',
        nav: false
      },
      {
        route: 'cotiza/:artist?',
        name: 'quotation',
        moduleId: 'pages/quotation/quotation',
        title: 'Cotiza',
        nav: false
      },
      {
        route: 'cotiza/resultados',
        name: 'quotation_results',
        moduleId: 'pages/quotation-results/quotation-results',
        title: 'Resultados de tu cotización',
        nav: false
      }
    ]);
  }
}

class PostRenderStep {
  run(instruction, next) {
    window.scrollTo(0, 0);
    return next();
  }
}