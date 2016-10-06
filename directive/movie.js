
(function () {
    imdb.directive("movie", movie);

    function movie() {
        return {
            restrict: "A",
            scope: {
                templete: Name: @ lenght: @ actors: @ director: @
            },
            
            template: 
							"<div class=\"panel panel-default\">
								
								+ "<div class=\"panel-body\"><img ng-src=\"https://image.tmdb.org/t/p/w185_and_h278_bestv2{{a.poster_path}}\"  ng-click=\"getActorsInMovie(a) ; a.selected = !a.selected ; movieName=null ; ActorName=null\" 
    																			+ "class=\"img-responsive\" 
  																   		  	   + "ng-class=\"{'selected-image': a.selected}\" >
								+ "</div>"
								+ "<div class=\"panel-heading\"><a target=\"_blank\" ng-href=\"{{id}}.html\">{{title}}</a></div>"
								+ "<div class=\"panel-heading\"><a target=\"_blank\" ng-href=\"{{id}}.html\">{{lenght}}</a></div>"
								+ "<div class=\"panel-heading\"><a target=\"_blank\" ng-href=\"{{id}}.html\">{{director}}</a></div>"
							+ "</div>""
						+ "</div>"



            link: link
        }

        function link(scope, element, attr) {
            // console.log("scope", scope)
            // console.log("element", element)
            // console.log("attr", attr)
            element[0].onclick = function () {
                alert(attr.number)
            }
        }
    }

})();