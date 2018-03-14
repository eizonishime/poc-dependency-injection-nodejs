
import { createContainer, InjectionMode, asClass } from 'awilix';

var container = createContainer();

container.loadModules(['services/**/*.js'], {
    formatName: 'camelCase',
    resolverOptions: {
      injectionMode: InjectionMode.PROXY,
      register: asClass
    }
  });

console.log(container)

console.log("User1: " + JSON.stringify(container.cradle.userController.getUser()))
