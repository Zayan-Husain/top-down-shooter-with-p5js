///////////////power_ups///////////////////
class power_ups extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 4;
	  this.type = "power_ups";
  }//end constructor
  
  update()
  {
	var t = this;
	super.update();
  }//end update
  
  
}//end class
///////////////end power_ups///////////////////