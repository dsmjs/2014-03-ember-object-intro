App = Ember.Application.create();

App.Router.map(function() {
    this.resource("people", { path: "/" });
});

App.PeopleRoute = Ember.Route.extend({
    model: function() {
        var first = {name: 'first'};
        var last = {name: 'last'};
        return [first, last];
    }
});
