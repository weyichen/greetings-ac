System.register(['angular2/angular2', './app/greetings-ac'], function(exports_1) {
    var angular2_1, greetings_ac_1;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (greetings_ac_1_1) {
                greetings_ac_1 = greetings_ac_1_1;
            }],
        execute: function() {
            angular2_1.bootstrap(greetings_ac_1.GreetingsAcApp);
        }
    }
});
//# sourceMappingURL=app.js.map