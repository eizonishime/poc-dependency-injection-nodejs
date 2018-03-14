
const awilix = require('awilix')

const container = awilix.createContainer()

// Load our modules!
container.loadModules([
  // Globs!
  'services/**/*.js',
  'repositories/**/*.js'
], {
  // We want to register `UserService` as `userService` -
  // by default loaded modules are registered with the
  // name of the file (minus the extension)
  formatName: 'camelCase',
  // Apply resolver options to all modules.
  resolverOptions: {
    // We can give these auto-loaded modules
    // the deal of a lifetime! (see what I did there?)
    // By default it's `TRANSIENT`.
    lifetime: awilix.Lifetime.SINGLETON,
    // We can tell Awilix what to register everything as,
    // instead of guessing. If omitted, will inspect the
    // module to determinw what to register as.
    register: awilix.asClass
  }
})

// We are now ready! We now have a userService, userRepository and emailService!
container.resolve('userService').getUser(1)