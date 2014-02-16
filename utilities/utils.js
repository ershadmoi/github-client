var ViewType = {
    'LIST': "list",
    'GRID': "grid",
};

var TemplateEngine = {};

TemplateEngine.render = function(templateid, targetid, data) {
    var template = $(templateid).html();

    $(targetid).html(_.template(template, data));
};
