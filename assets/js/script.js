$(document).ready(function() {
    var barToBeSetValues = [];
    //console.log('barTobeSet :' , barToBeSetValues);
    var animateStartValues = new Array();
    // console.log('animateStartValues :' , animateStartValues)
    var progressbar = $('.nes-progress');
    
    function loading(i) {
        
        animateStartValues[i] +=4;
        // console.log('current array : ', animateStartValues);
        // console.log('Final array:', barToBeSetValues);
        if(animateStartValues[i] <= barToBeSetValues[i]){
            progressbar[i].value = animateStartValues[i];
        }
        else{   
            // console.log('i should not print this');
            clearInterval(animate());
        }
        
    };
    
    function animate(i, barToBeSet ,time){
        // console.log("animate called for:" , i);
        
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
    
});