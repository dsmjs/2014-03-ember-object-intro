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
});
