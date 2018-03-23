
export default class NewSchedulerService {
    constructor({ newSchedulerNotifications, currentUser }) {
        this.newSchedulerNotifications = newSchedulerNotifications;
        this.currentUser = currentUser;
    }

    scheduleVisit(user, house) {
        //  TODO: Schedule visit.
        for (var n of this.newSchedulerNotifications) {
            n.sendMessage();
        }

        return "Visit scheduled";
    }

    scheduleVisitFromWeb() {

        for (var n of this.newSchedulerNotifications) {
            n.sendMessage();
        }
        const messageReturn = `Scheduling visit for ${JSON.stringify(this.currentUser)}`;
        console.log(messageReturn);

        return messageReturn;
    }
}