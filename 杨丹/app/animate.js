
//评论淡入动画
function fadeComment(){
            return {
                enter: function (element, done) {
                    element.css('display', 'none');
                    $(element).fadeIn(1000);
                }, 
                leave: function (element, done) {
                	//element.css('display', 'none');
                    $(element).fadeOut(1000);
                },
                move: function (element, done) {
                    //element.css('display', 'none');
                    $(element).slideDown(500);
                }
            }
        }