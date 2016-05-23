define([
    "dataStore.pagenav",
    "jquery"
], function(DataStore, $) {
    function getItems(data) {
        var dfd = $.Deferred();
        var itemsObj;
        var start = (data.index - 1) * 3;
        var url = "http://128.199.76.9:8002/kgblue38/page?start=" + start + "&limit=" + data.max;
        DataStore.getItems({
            "url": url,
            "type": "get"
        }, function(items) {
            itemsObj = { items: items };
            dfd.resolve(itemsObj);
        });
        return dfd.promise();
    }
    return {
        getItems: getItems
    }
});

$.ajax({
    
}).done(function(){
    
});