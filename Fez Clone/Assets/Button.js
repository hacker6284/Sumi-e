#pragma strict

function Start () {

}

function OnTriggerEnter (player: Collider) {
	if (Camera.main.orthographic == false) {
		Camera.main.orthographic = true;
	}
	else {
		Camera.main.orthographic = false;
		}
}