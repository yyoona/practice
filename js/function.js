   let dataMin, dataMax=0;
  
  function minMax(){
  
    for(let i=0;i<numRows;i++){
      if(table_1.getNum(i,1)>dataMax){
        dataMax = table_1.getNum(i,1);
      }
    }
    dataMin = dataMax;
    for(let i=0;i<numRows;i++){
      if(table_1.getNum(i,1)<dataMin){
        dataMin = table_1.getNum(i,1);
      }
    }
   // print("max value " + dataMax +" min value" +dataMin)
  }
  
  function newButton(x,y,w,h,t,tsize){
    if(dist(mouseX,mouseY,x,y)<w/2){
      fill('rgba(0,255,255,0.5)')
      cursor(HAND)
    }else{
      cursor(CROSS)
      noFill();
    }
    
    rectMode(CENTER);
    strokeWeight(0.5);
    stroke('black');
    rect(x,y,w,h);
    
    noStroke();
    fill('black');
    textAlign(CENTER,CENTER);
    textSize(tsize);
    text(t,x,y);
  }
  
  function newSlider(x,y,w,h,cX,cY){
    fill('black');
    noStroke();
    rect(x,y,w,h);
    fill(c)
    circle(cX,cY,h+5);
    if(dist(mouseX,mouseY,x,y)<w/2){
      cursor(HAND)
    }else{
      cursor(CROSS)
    }
  }
  