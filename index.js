"use strict";
(function(){
    var objA = document.getElementsByTagName('a');
    for(let i=0,len=objA.length;i<len;i++){
        objA[i].addEventListener('mouseover', mouseover, false);
        objA[i].addEventListener('mouseout', mouseout, false)
    }

    var objLi = document.getElementsByTagName('li');
    var hoverObj = objLi[objLi.length-1];

    //console.log(hoverObj);

    function mouseover(e){
        hoverObj.style.left = this.offsetLeft +'px';
        hoverObj.style.width = this.offsetWidth + 'px';

    }

    function mouseout(){
        //console.log(this);
    }

})()
