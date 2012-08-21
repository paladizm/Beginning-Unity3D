#pragma strict

function Start () {

}

function Update () {
	var halfW : float = Screen.width*0.5;
	var halfH : float = Screen.height*0.5;
	transform.position.x = (Input.mousePosition.x - halfW)/halfW;
	transform.position.z = (Input.mousePosition.y - halfH)/halfH;
}