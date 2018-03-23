

export default class UserLoggedRetriever {

    getUser() {
      return {
        name: "Eizoca",
        lastName: "Nishime"
      };
    }

    getCurrentUserFromRequest(req) {
      return {
        name: "Eizoca,  ID: " + req.query.id,
        lastName: "Nishime",
        timestamp: Date.now()
      };
    }
}