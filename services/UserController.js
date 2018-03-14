

export default class UserController {
    constructor({ userService }) {
      this.userService = userService
    }

    getUser() {
      return this.userService.getUser()
    }
}


