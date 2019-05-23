(() => {
    'use strict';

    var module = angular.module("navbar");

    module.provider("$navbar", [function() {
        var $navbarElements = [];

        this.setNavbarElements = (elements) => {
            $navbarElements = elements;
        };

        // SERVICE INSTANCE __________________________________________________________________________________________________________________________________
        // ===================================================================================================================================================
        this.$get = [() => {

            var navbar = {}

            //Properties and Fields___________________________________________________________________________________________________________________________
            //================================================================================================================================================

            //Fields

            navbar.elements =
            {
                get: () => { return $navbarElements; },
                add: (element) => { $navbarElements.push(element); },
                empty: () => { $navbarElements.length = 0; }
            }

            return navbar;
        }];
    }]);

})();
