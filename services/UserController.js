

export default class UserController {
    constructor({ userLoggedRetriever }) {
      this.userLoggedRetriever = userLoggedRetriever
    }

    getCurrentUser() {
      return this.userLoggedRetriever.getUser()
    }
}


