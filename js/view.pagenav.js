define([
    "template.pagenav",
    "handlebars"
], function(template, Handlebars) {
    var makeItemsHTML = Handlebars.compile(template.itemsSource);
    
    function renderItems(items) {
        $(".collection").html(makeItemsHTML(items));
    }
    
    return {
        renderItems: renderItems
    }
});