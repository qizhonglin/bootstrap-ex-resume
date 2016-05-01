/**
 * Created by 310031267 on 2016/5/1.
 */
angular.module('bootstrapExApp')
  .directive('scrollTo', ['$anchorScroll', function($anchorScroll){
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function (event) {
          event.preventDefault();
          event.stopPropagation();
          var location = attrs.scrollTo;
          $anchorScroll(location);
        });
      }
    };
  }]);
