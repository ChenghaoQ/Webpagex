;$(function()
{
    'use strict';/*严格模式*/
  
    var logo =$(".logo"),
        mask =$(".mask"),
        heading=$('.heading'),
        subheading=$('.subheading');
    
    function run(){
        window.location='home.html'
    }
    
    $(function(){mask.fadeIn(4000)}) 
    $(function(){logo.fadeIn(2000)})
    $(function(){heading.delay(3000).fadeIn(1000)})
    $(function(){subheading.delay(4300).fadeIn(1000)})
    $(function(){setTimeout(run,7000)})
    
    
})