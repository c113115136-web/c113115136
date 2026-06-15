function openTab(evt, seriesId) {
    var i, tabcontent, tablinks;


    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }


    var target = document.getElementById(seriesId);
    if (target) {
        target.style.display = "block";
        evt.currentTarget.classList.add("active");
    }
}