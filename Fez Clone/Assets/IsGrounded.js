#pragma strict

static var isGrounded:boolean;

function OnTriggerStay(player: Collider){
	isGrounded = true;
}

function OnTriggerExit(player: Collider){
	isGrounded = false;
}