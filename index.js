
import { createContainer, InjectionMode, asClass, listModules, asValue } from 'awilix';
import { asArray } from './helper/AwilixHelper';
import NewShedulerPushNotificationSender from './notifications/NewShedulerPushNotificationSender';
import NewShedulerSmsNotificationSender from './notifications/NewShedulerSmsNotificationSender';
import app from './config/bootstrap'



const configureScopeWeb = (app, container) => {
  app.use((req, res, next) => {

    console.log(`Creating scope per request`);
    // create a scoped container
    req.scope = container.createScope();

    const userLoggedRetriever = req.scope.cradle.userLoggedRetriever;

    // register some request-specific data..
    req.scope.register({
      currentUser: asValue(userLoggedRetriever.getCurrentUserFromRequest(req))
    })

    next();
  })
}

const configureScheduleVisitRoute = (app) => {
  app.get('/schedule', (req, res) => {
    const newSchedulerService = req.scope.cradle.newSchedulerService;
    var result = newSchedulerService.scheduleVisitFromWeb(null);
    res.status(200).send(result);
  })
}

const run = () => {
  var container = createContainer({
    injectionMode: InjectionMode.PROXY
  });

  container.register({
    newSchedulerNotifications: asArray([
      asClass(NewShedulerPushNotificationSender),
      asClass(NewShedulerSmsNotificationSender)
    ])
  });

  container.loadModules(['services/**/*.js'], {
      formatName: 'camelCase',
      resolverOptions: {
        injectionMode: InjectionMode.PROXY,
        register: asClass
      }
    });

  app.listen(10066);
  configureScopeWeb(app, container);
  configureScheduleVisitRoute(app);

  console.log(container)

  console.log("getUser(): " + JSON.stringify(container.cradle.userController.getCurrentUser()))
  //console.log("scheduleVisit(): " + JSON.stringify(container.cradle.newSchedulerService.scheduleVisit(null, null)));
}



run();


