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

window.addEventListener('load', () => li[0].classList.add('active'));

let liArray = li.map((item) => {
    item.addEventListener('click', function(){
        removingClass();
        this.classList.add("active");
    })
});

$('.tilt-card').tilt({
    maxTilt : 5,
    glare: true,
    maxGlare: 0.4
})