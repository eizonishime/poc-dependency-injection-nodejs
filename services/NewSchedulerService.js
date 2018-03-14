
export default class NewSchedulerService {
    constructor({ newSchedulerNotifications }) {
        this.newSchedulerNotifications = newSchedulerNotifications;
    }

    scheduleVisit(user, house) {
        // Schedule visit.
        for (var n of this.newSchedulerNotifications) {
            n.sendMessage();
        }

        return "Visit scheduled"; 
    }
}