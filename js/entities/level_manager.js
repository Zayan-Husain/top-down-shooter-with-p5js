///////////////level_manager///////////////////
class level_manager extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 4;
	  this.type = "level_manager";
  }//end constructor
  
  update()
  {
	var t = this;
	super.update();
  }//end update
  
  
}//end class
///////////////end level_manager///////////////////