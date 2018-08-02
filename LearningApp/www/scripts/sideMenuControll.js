(function () {
    var menu = document.getElementById("sideMenu");
    document.getElementById("sideMenuButton").addEventListener("click", menuButtonClicked);
    document.getElementById("sideMenuCloseButton").addEventListener("click", menuButtonClicked);
    document.getElementById("logOutButton").addEventListener("click", logOut);
    document.getElementById("menuItem_Profile").addEventListener("click", profileClicked);
    document.getElementById("menuItem_Options").addEventListener("click", optionsClicked);

    function menuButtonClicked() {
        console.log(menu.style.left);
        if (menu.style.left == "-200px" || menu.style.left == "") {
            menu.style.left = "0px";
        }
        else {
            menu.style.left = "-200px";
        }
    }
    function logOut() {
        window.location.href = "index.html";
    }

    function profileClicked() {
        window.location.href = "profileScreen.html";
    }
    function optionsClicked() {
        window.location.href = "optionsScreen.html";
    }
})();