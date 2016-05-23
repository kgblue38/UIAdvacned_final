define([
    "EventEmitter", 
    "jquery",
    "model.pagenav",
    "view.pagenav"
    ], function(EventEmitter, $, navModel, navView) {
    function pagenav(element, options) {
        this.ee = new EventEmitter();
        this.ele = $(element);
        bindEvents();
        this.init();
    }
    
    function bindEvents() {
        $(".center-block").on("click", "a", $.proxy(this, "_movePageByNumber"));
        $(".center-block").on("click", ".left-single-arrow", $.proxy(this, "_movePageBySingleArrow"));
        $(".center-block").on("click", ".right-single-arrow", $.proxy(this, "_movePageBySingleArrow"));
    }
    
    pagenav.prototype.init = function() {
        navModel.getItems({index: 1, max: 3}).done(navView.renderItems);
    }
    
    pagenav.prototype._movePageByNumber = function(e) {
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
    
    pagenav.prototype._movePageBySingleArrow = function(e) {
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
    
    pagenav.prototype.on = function(eventName, fp) {
        this.ee.addListener(eventName, fp);    
    }
    pagenav.prototype.off = function(eventName, fp) {
        this.ee.removeListener(eventName, fp);
    }    
});