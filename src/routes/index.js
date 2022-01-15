const siteRoute = require('./site');
const newsRoute = require('./news');
const coursesRoute = require('./courses');
const meRoute = require('./me');

function route(app) {
  app.use('/me', meRoute);

  app.use('/news', newsRoute);

  app.use('/courses', coursesRoute);

  app.use('/', siteRoute);
}

module.exports = route;
