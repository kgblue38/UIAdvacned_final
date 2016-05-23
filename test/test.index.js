requirejs.config({
    baseUrl: "/Users/leedhcf92/jwp-workspace/webUI-workspace/UIAdvacned_final/js/",
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery',
        'handlebars': '../node_modules/handlebars/dist/handlebars.amd',
        'EventEmitter': '../bower_components/eventEmitter/EventEmitter'
    }
});

require(['Squire'], function(Squire) {

    var injector = new Squire();

    injector.mock("dataStore", {
        "getTodo": function(param, fp) {
            fp({
                todo1: { "message": "hello1", "insertId": 10 },
                todo2: { "message": "hello2", "insertId": 15 }
            });
        }
    });
});


// var assert = chai.assert;
// var expect = chai.expect;
// var simple = require('simple-mock');
// chai.use(chaiHttp);

// describe("Pagenav MVP Test", function() {
//     describe("Pagenav Model", function() {
//         var pagenav;
//         // var injector = new Squire();
//         it("hello", function() {
//             assert.equal(100, 100);
//         });
//         // injector.mock("dataStore", {
//         //     "getTodo": function(param, fp) {
//         //         fp({
//         //             todo1: { "message": "hello1", "insertId": 10 },
//         //             todo2: { "message": "hello2", "insertId": 15 }
//         //         });
//         //     }
//         // });
//         // beforeEach(function() {
//         //     spinboxModel = new SpinboxModel();
//         // });

//     });
// });

// // });



