/// <reference path='../_all.ts' />
var todos;
(function (todos) {
    'use strict';
    var ESCAPE_KEY = 27;
    /**
     * Directive that cancels editing a todo if the user presses the Esc key.
     */
    function todoEscape() {
        return {
            link: function ($scope, element, attributes) {
                element.bind('keydown', function (event) {
                    if (event.keyCode === ESCAPE_KEY) {
                        $scope.$apply(attributes.todoEscape);
                    }
                });
                $scope.$on('$destroy', function () { element.unbind('keydown'); });
            }
        };
    }
    todos.todoEscape = todoEscape;
})(todos || (todos = {}));
//# sourceMappingURL=TodoEscape.js.map