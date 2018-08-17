
    var pages;
    var currentPage = 0;

    function setName(name) {
        localStorage.setItem("topicname", name);
        
    }
    function setPages(pagenum) {
        localStorage.setItem("pages", pagenum);
    }
    function getTopicName() {
        return localStorage.getItem("topicname");
    }
    function getCurrentPage() {
        pages = localstorage.getItem(pages);
        if (currentPage == pages + 1) {
            return "end";
        } else {
            currentPage = currentPage + 1;
            return currentPage - 1;
        }
    }