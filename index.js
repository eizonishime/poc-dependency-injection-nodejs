
import { createContainer, InjectionMode, asClass, listModules } from 'awilix';
import { asArray } from './helper/AwilixHelper';
import NewShedulerPushNotificationSender from './notifications/NewShedulerPushNotificationSender';
import NewShedulerSmsNotificationSender from './notifications/NewShedulerSmsNotificationSender';

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


console.log(container)

console.log("getUser(): " + JSON.stringify(container.cradle.userController.getUser()))
console.log("scheduleVisit(): " + JSON.stringify(container.cradle.newSchedulerService.scheduleVisit(null, null)));
