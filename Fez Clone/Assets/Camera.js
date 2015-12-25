#pragma strict

function Start () {

}

function Update () {
transform.position.z = Mathf.Clamp(transform.position.z,-23.16,4.52);
}