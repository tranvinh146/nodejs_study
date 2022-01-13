const siteRoute = require('./site');
const newsRoute = require('./news');
const coursesRoute = require('./courses');

function route(app) {
  app.use('/news', newsRoute);

  app.use('/courses', coursesRoute);

  app.use('/', siteRoute);
}

module.exports = route;
