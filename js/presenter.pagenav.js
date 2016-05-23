define([
    "model.pagenav",
    "view.pagenav",
    "jquery"    
], function(navModel, navView, $) {
    bindEvents();
    
    function init() {
        navModel.getItems({index: 1, max: 3}).done(navView.renderItems);
    }
    
    function bindEvents() {
        $(".center-block").on("click", "a", movePageByNumber);
        $(".center-block").on("click", ".left-single-arrow", movePageBySingleArrow);
        $(".center-block").on("click", ".right-single-arrow", movePageBySingleArrow);
    }
    
    function movePageByNumber(e) {
        $eTarget = $(e.target);
        navModel.getItems({
            "index": $eTarget.text(),
            "max": 3
        }).done(navView.renderItems);
        var $li = $eTarget.closest("li");
        $li.addClass("selected");
        $li.siblings().removeClass("selected");    
        disabledCheck();
    }
    
    function movePageBySingleArrow(e) {
        var $eTarget = $(e.target);
        var $selected = $(".selected");
        
        if ($eTarget.hasClass("disabled")) {
            return;
        }
        
        $selected.removeClass();
        if ($eTarget.text() === "<") {
            $selected.prev().addClass("selected");
        } 
        if ($eTarget.text() === ">"){
            $selected.next().addClass("selected");
        }
        
        navModel.getItems({
            "index": $(".selected").text(),
            "max": 3
        }).done(navView.renderItems);
        
        disabledCheck();
    }
    
    function disabledCheck() {
        var $selected = $(".selected");
        $(".left-single-arrow").removeClass("disabled");
        $(".right-single-arrow").removeClass("disabled");
        
        if ($selected.text() === "1") {
            $(".left-single-arrow").addClass("disabled");
        }
        if ($selected.text() === "5") {
            $(".right-single-arrow").addClass("disabled");
        }    
    }
    
    function movePageByDoubleArrow(e) {
        if ($(e.target).text() === "«") {
        } else {
        }
    }    
    
    return {
        init: init
    }
});