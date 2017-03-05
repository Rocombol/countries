function Mediator () {
    var events = {};

    this.sub = function (eventName, callback) {
        if (!events[eventName]) {
            events[eventName] = [];
        }
        events[eventName].push(callback);
    };

    this.pub = function (eventName, argone, argtwo) {
        if (events[eventName]) {
            events[eventName].forEach(function (callback) {
                callback(argone, argtwo);
            });
        }
    };

    return this;
}
