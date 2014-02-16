var Workspace = Backbone.Router.extend({

    routes: {
        "help": "help",
        "search/:query": "search"
    },

    help: function() {
        console.log("help page triggered.");
    },

    search: function(query) {
        console.log("search triggered.");
    }
});

Backbone.history.start({pushState: true});
