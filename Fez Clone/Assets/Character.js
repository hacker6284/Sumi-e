#pragma strict

var playerspeed:float = -2;
var spriteObject:GameObject;
var walkSprite:animatedwalk;
var idleSprite:animatedstand;
var myMaterials : Material[];
var halfW:float;
var halfH:float;
var rotate:int;
var yrot:float;
var jump:float = 4;
var left:boolean;
var isRotating:boolean = false;
var center:GameObject;

function Start () {
	spriteObject = GameObject.Find("person");
	walkSprite = GetComponentInChildren(animatedwalk);
	idleSprite = GetComponentInChildren(animatedstand);
	print(Physics.gravity);
}

function OnGUI () {
	
	if ((GUI.RepeatButton(Rect(halfW+(halfW/2)-50,halfH+(halfH/2),50,50),">>") || Input.GetAxis("Horizontal")>0)&&(!isRotating)){
		playerspeed = -.5;
		walkSprite.enabled = true;
		idleSprite.enabled = false;
		spriteObject.GetComponent.<Renderer>().material = myMaterials[1];
		left = false;
	}
	
	else if ((GUI.RepeatButton(Rect(halfW - (halfW/2), halfH + (halfH/2), 50, 50),"<<")|| Input.GetAxis("Horizontal")<0)&&(!isRotating)){
		playerspeed = .5;
		walkSprite.enabled = true;
		idleSprite.enabled = false;
		spriteObject.GetComponent.<Renderer>().material = myMaterials[2];
		left = true;
	}
	
	else {
		playerspeed = 0;
		walkSprite.enabled = false;
		idleSprite.enabled = true;
		
		if (left == true){
			spriteObject.GetComponent.<Renderer>().material = myMaterials[3];
		}
		
		else if (left == false){
			spriteObject.GetComponent.<Renderer>().material = myMaterials[0];
		}
	}
	
	if (GUI.Button(Rect(Screen.width-100,halfH-25,75,50),"Rotate>")){
		rotate = -1;
		isRotating = true;
	}
	
	else if (GUI.Button(Rect(25,halfH-25,75,50),"<Rotate")){
		rotate = 1;
		isRotating = true;
	}
	
	else if (((GUI.RepeatButton(Rect(halfW-25,halfH+(halfH/2),50,50),"^^") || Input.GetButton("Jump"))&& ((IsGrounded.isGrounded == true)||(vines.climb==true))&&(!isRotating))){
		GetComponent.<Rigidbody>().WakeUp();
		if (!vines.climb){
			GetComponent.<Rigidbody>().AddForce(Vector3.up * jump);
		}
		else {
			GetComponent.<Rigidbody>().AddForce(Vector3.up * 10);
		}
	}

}

function Update(){
	transform.Translate(0,0,playerspeed*Time.deltaTime);
	halfW = Screen.width/2;
	halfH = Screen.height/2;
	if(isRotating){
		if (rotate == -1){
			yrot -= 1;
		}
		
		else if (rotate == 1){
			yrot += 1;
		}
		if(yrot%90 == 0){
			isRotating = false;
		}
		GetComponent.<Rigidbody>().isKinematic = true;
	}
	
  	else{
  		GetComponent.<Rigidbody>().isKinematic = false;
  	}
	
	transform.eulerAngles = Vector3(0, yrot, 0);
	center.transform.eulerAngles = Vector3(0, yrot, 0);
	center.transform.position.y = transform.position.y;
}