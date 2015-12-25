#pragma strict

var thirdBlock: Vector3;
var person:GameObject;

function OnTriggerEnter(player: Collider){
	person.transform.position.z = thirdBlock.z;
}