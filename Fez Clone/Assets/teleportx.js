#pragma strict

var fourthBlock: Vector3;
var person:GameObject;

function OnTriggerEnter(player: Collider){
	person.transform.position.x = fourthBlock.x;
}