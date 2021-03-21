var anchorTags = document.querySelectorAll('.navbar a');
 
for(var i = 1; i < anchorTags.length; i++){

        anchorTags[i].addEventListener("click", function(event){
           event.preventDefault();
        var targetId = this.textContent.toLowerCase();

    
        var targetSection = document.getElementById(targetId);
                console.log(targetSection);
                var interval = setInterval(function(){
                var target  = targetSection.getBoundingClientRect();

                if(target.top <= 0){
                    clearInterval(interval);
                    return;
                }

                window.scrollBy(0, 50);

            }, 20);

        })

}

var scrollbar = document.querySelectorAll('.skill-progress');



