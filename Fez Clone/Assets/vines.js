#pragma strict

var person:GameObject;
static var climb:boolean;

function OnTriggerEnter (player: Collider){
	climb = true;
}

function OnTriggerExit (player:Collider){
	climb = false;
}