define(["backbone", "models/message"], function(e, t) {
    return Messages = e.Collection.extend({
        model: t,
        url: "/chat/api/"
    }), Messages
});