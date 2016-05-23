requirejs.config({
    baseUrl: "/Users/leedhcf92/jwp-workspace/webUI-workspace/UIAdvacned_final/js/",
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery',
        'handlebars': '../node_modules/handlebars/dist/handlebars.amd',
        'EventEmitter': '../bower_components/eventEmitter/EventEmitter',
    }    
});

require([
    "presenter.pagenav"
], function(navPresenter) {
    navPresenter.init();
})