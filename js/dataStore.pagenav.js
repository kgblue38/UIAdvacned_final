define( [
	"jquery"
], function($) {
	return {
		"getItems": function(param, fp){
	        $.ajax(param).done(fp);
		}
	};
});