

class UserController {
    constructor({ userService }) {
      this.userService = userService
    }

    getUser() {
      return this.userService.getUser()
    }
}

module.exports = {
  UserController,
};