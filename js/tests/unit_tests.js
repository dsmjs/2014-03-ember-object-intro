test("hello world", function() {
    var person = new App.Person('joel', 'taddei');
    var fullname = person.get('fullname');
    equal('joel taddei', fullname);
    var bark = person.get('bark');
    equal('RUFF', bark);
    var purr = person.get('purr');
    equal('wat', purr);
    var cat = person.get('cat');
    equal(cat, true);
    var dogg = person.get('dog');
    equal(dogg, true);
    var wait = person.get('wait');
    equal(wait, 'person');
});

test("class level methods work well", function() {
    equal(App.Person.wow, 'nice')
});

test("basic inheritance works", function() {
    var animal = new App.Animal('make', 'it');
    var fullname = animal.get('fullname');
    equal('make it', fullname);
    var other = animal.get('other');
    equal('other stuff', other);
    var wait = animal.get('wait');
    equal(wait, 'animal');
});
