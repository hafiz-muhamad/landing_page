document.querySelector(".mobile-nav").addEventListener('click', function() {
    console.log('click')
    let check = document.querySelector("#nav-checkbox");
    check.checked = !check.checked;

    if(check.checked == true) {
        let nav = document.querySelector(".mobile-navbar");
        nav.style.position = 'sticky';
        nav.style.top = '0px';
    }
    else {
        let nav = document.querySelector(".mobile-navbar");
        nav.style.position = 'absolute';
        nav.style.top = '-700px';
    }
})