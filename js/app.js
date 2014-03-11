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

App.Dog = Ember.Mixin.create({
    init: function() {
        this.set('dog', true);
    },
    bark: function() {
        return "RUFF";
    }.property()
});

App.Cat = Ember.Mixin.create({
    init: function() {
        this.set('cat', true);
        this._super();
    },
    purr: function() {
        return "wat";
    }.property()
});

App.Person = Ember.Object.extend(App.Dog, App.Cat, {
    init: function(first, last) {
        this.set('first', first);
        this.set('last', last);
        this._super();
    },
    fullname: function() {
        return this.get('first') + ' ' + this.get('last');
    }.property()
});
