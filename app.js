var mainApp = function() {
    var data = {};

    data.hasHeader = true;
    data.header_items = [
        {title: "Repositories"},
        {title: "Starred"},
        {title: "Recent Activity"},
        {title: "Profile"}
    ];

    data.viewType = ViewType.LIST;
    data.body_items = [
        {primaryText: "Item1"},
        {primaryText: "Item2}
    ];

    TemplateEngine.render("layout", "mainApp", data);
};

mainApp();

