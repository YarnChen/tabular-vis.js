'use strict';

const swapTableVis=(click,ctF)=>{
      let cavDiv = ctF.querySelector('.tabular_container')
      // remove canvas everytime
      if(!click){
        if(cavDiv.firstElementChild){
          cavDiv.removeChild(cavDiv.firstElementChild)
        }
        ctF.style.width='400px';
        ctF.style.height='500px';
        ctF.style.animation = 'tabular 1s';
        // compatible to Chrome and Safari;
        ctF.style.WebkitAnimation= 'tabular 1s';
        ctF.style.cursor = 'pointer';
        return true;
      }
      else{
        if(ctF.style.width!="0px"){
          ctF.removeAttribute('style');
          ctF.style.width = "0";
          ctF.removeChild(ctF.firstElementChild);
          return false;
        }
        else {
          ctF.style.width='400px';
          ctF.style.height='500px';
          ctF.style.animation = 'tabular 1s';
          // to Chrome and Safari;
          ctF.style.WebkitAnimation= 'tabular 1s';
          ctF.style.cursor = 'pointer';
          return true;
        }
      }

}

export default swapTableVis;
