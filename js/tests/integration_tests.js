test('template will show each person in the template', function() {
    App.reset();
    visit("/").then(function() {
        var rows = find("table tr").length;
        equal(rows, 2, rows);
    });
});
