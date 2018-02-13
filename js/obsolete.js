function obsoleteModal () {
    var al = document.createElement('div'),
        content = document.createElement('div'),
        contain = document.createElement('div'),
        h2 = document.createElement('h2'),
        p = document.createElement('p'),
        btn = document.createElement('button'),
        body = document.querySelector('body');
    body.appendChild(al);
    al.classList.add('al');
    al.classList.add('modals');
    al.style.display = "block";
    al.appendChild(content);
    content.classList.add('modalContent');
    content.appendChild(contain);
    contain.classList.add('modalContainer');
    contain.appendChild(h2);
    h2.innerText = "NOTIFICATION: THIS VERSION OF MY SITE IS OBSOLETE.";
    contain.appendChild(p);
    p.innerText = "This version is out of date, fashion, and is no longer under development. I am working on a brand new version of a site, but it goes slow due to lack of time and overloading with regular job and test tasks. But still it is coming soon :-)";
    p.style.marginBottom = 50 + "px";
    contain.appendChild(btn);
    btn.classList.add('hireMeBtn1');
    btn.innerText = 'Continue with this';
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        al.style.transition = "background-color .5s";
        al.style.backgroundColor = "rgba(255, 255, 255, 0)";
        content.style.transition = "opacity .5s";
        content.style.opacity = 0;
        setTimeout(function(){
            body.removeChild(al);
        },500);
    });
}

document.addEventListener('DOMContentLoaded', obsoleteModal());