var mainApp = function() {
    var headerData = {};

    headerData.hasHeader = true;
    headerData.header_items = [
        {title: "Repositories"},
        {title: "Starred"},
        {title: "Recent Activity"},
        {title: "Profile"}
    ];

    TemplateEngine.render("#headerbar_layout", "#headerbar", {data: headerData});

    var bodyData = {};
    bodyData.viewType = ViewType.LIST;

    var user = new Gh3.User("ershadmoi");
    var gh3UserCallback = function(err, resUser) {

        if(err) {
            throw "fetch failed";
        }

        bodyData.body_items = [
            {primaryText: resUser.avatar_url}
        ];

        TemplateEngine.render("#body_layout", "#body", {data: bodyData});
    };

    user.fetch(gh3UserCallback); 
};

mainApp();

