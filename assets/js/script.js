$(document).ready(function() {
    var barToBeSetValues = [];
    var animateStartValues = new Array();
    var progressbar = $('.nes-progress');
    
    function loading(i) {
        
        animateStartValues[i] +=4;
        if(animateStartValues[i] <= barToBeSetValues[i]){
            progressbar[i].value = animateStartValues[i];
        }
        else{   
            clearInterval(animate());
        }
        
    };
    
    function animate(i, barToBeSet ,time){
        setInterval(function() {
            loading(i);
        }, time);  
    }
    
    
    progressbar.each((i, probar) =>{
        let eachToBeSet = probar.value;
        let time = (1000/eachToBeSet)*3;
        barToBeSetValues[i] = eachToBeSet;
        animateStartValues[i] =0; 
        animate(i,barToBeSetValues[i],time)  
    })

    $(document).on('click', '.filter-button', function() {
        const value = $(this).attr('datafilter');
        console.log(value);

        if(value == 'all'){
            $('.filter').show('1000');
        }
        else{
            $('.filter').not('.'+value).hide('3000');
            $('.filter').filter("."+value).show('3000')
        }
    })
    
});