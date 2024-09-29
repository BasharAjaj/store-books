document.getElementById("loginBtn").onclick = function() {
    document.getElementById("loginPopup").style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("loginPopup").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("loginPopup")) {
        document.getElementById("loginPopup").style.display = "none";
    }
}
