let li = [
    document.getElementById('home'),
    document.getElementById('project'),
    document.getElementById('about'),
    document.getElementById('contact'),
];
// console.log(li)

// let activeList = li.map(i => {
//     return li[i].addEventListener('click', () => {
//         li.classList.remove('active');
//         li[i].classList.add('active');
//     })
// })

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