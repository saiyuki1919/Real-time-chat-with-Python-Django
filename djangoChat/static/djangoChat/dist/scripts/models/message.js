define(["backbone", "jquery"], function(e, t) {
    return Message = e.Model.extend({
        validate: function(e) {
            m = e.msg;
            if (t.trim(m) === "") return "empty messege"
        },
        initialize: function() {
            this.on("invalid", function(e, t) {
                console.log(t)
            })
        }
    }), Message
});