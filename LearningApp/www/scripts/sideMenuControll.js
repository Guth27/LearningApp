(function () {
    var menu = document.getElementById("sideMenu");
    var button = document.getElementById("sideMenuButton");
    button.addEventListener("click", menuButtonClicked);

    function menuButtonClicked() {
        console.log("click");
        if (menu.style.left == "-200px") {
            menu.style.left = "0px";
        }
        else {
            menu.style.left = "-200px";
        }
    }
})();