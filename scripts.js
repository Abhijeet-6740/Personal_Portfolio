function opentab(tabname){
    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");    
}

function openmenu(){
    var sidemenu=document.getElementById("sidemenu");
    sidemenu.style.right="0";
}

function closemenu(){
    var sidemenu=document.getElementById("sidemenu");
    sidemenu.style.right="-200px";
}

