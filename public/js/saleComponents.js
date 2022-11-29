Vue.directive('scroll',{
    inserted: function(el,bulding){
        let f = function(evt){
            if(bulding.value(evt, el)){
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }

});