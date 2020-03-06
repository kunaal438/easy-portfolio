let li = [
    document.getElementById('home'),
    document.getElementById('project'),
    document.getElementById('about'),
    document.getElementById('contact'),
];

function removingClass(){
    for (var i = 0; i < li.length;i++){
        li[i].classList.remove("active");
    }
}

window.addEventListener('load', () => navItemClasses());

$('.tilt-card').tilt({
    maxTilt : 5,
    glare: true,
    maxGlare: 0.4
})

//////////////////////////////////////nav item class change on scroll/////////////////////////////////////////////////////


window.addEventListener('scroll', () => {
    navItemClasses();
})
function navItemClasses() {
    var scrollPos = window.scrollY;
    if (scrollPos >= 618 && scrollPos < 2405) {
        removingClass();
        li[1].classList.add('active');
    }
    else if (scrollPos >= 2405 && scrollPos < 3210) {
        removingClass();
        li[2].classList.add('active');
    }
    else if (scrollPos >= 3210) {
        removingClass();
        li[3].classList.add('active');
    }
    else {
        removingClass();
        li[0].classList.add('active');
    }
}

