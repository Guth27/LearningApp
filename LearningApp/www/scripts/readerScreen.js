(function () {
    document.getElementById("topicname").innerHTML = getTopicName();
    console.log(getTopicName());

    document.getElementById("previousButton").addEventListener("click", previous);
    document.getElementById("nextButton").addEventListener("click", next);

    var db = window.openDatabase("Database", "1.0", "subjectdata", 200000);
    db.transaction(getFirstPage, errorCB, successCB);

    var currentpage = 1;
    var tablename = localStorage.getItem("topicname") + "text";
    var maxpage = 3;

    function previous() {
        console.log("prev");
        if (currentpage > 1) {
            currentpage = currentpage - 1;
        }
        var db = window.openDatabase("Database", "1.0", "subjectdata", 200000);
        db.transaction(getpage, errorCB, successCB);
    }

    function next() {
        console.log("maxpage");
        if (currentpage < maxpage) {
            currentpage = currentpage + 1;
        }
        var db = window.openDatabase("Database", "1.0", "subjectdata", 200000);
        db.transaction(getpage, errorCB, successCB);
    }

    function getpage(tx) {
        tx.executeSql("SELECT * FROM " + tablename + " WHERE page=\'" + currentpage + "\'", [], function (tx, value) {
            document.getElementById("contentHolder").innerHTML = value.rows.item(0)["pagetext"];
        });
    }
    function getFirstPage(tx) {
 
        console.log(tablename);

       tx.executeSql("CREATE TABLE IF NOT EXISTS " + tablename + " (page, pagetext)");
     // tx.executeSql("INSERT INTO " + tablename + " VALUES(\'1\', \'Page one example text.\')");
     // tx.executeSql("INSERT INTO " + tablename + " VALUES(\'2\', \'Page two example text.\')");
     // tx.executeSql("INSERT INTO " + tablename + " VALUES(\'3\', \'Page three example text.\')");
      //
       tx.executeSql("SELECT * FROM " + tablename + " WHERE page=\'1\'", [], function (tx, value) {
           document.getElementById("contentHolder").innerHTML = value.rows.item(0)["pagetext"];
       });
    }

    function errorCB(tx, err) {
        console.log("Error processing SQL: " + err);
    }

    function successCB() {
        console.log("success!");
    }
})();