var container = document.querySelector('.container');
var start = document.querySelector('.start-btn');
var number_balls = document.querySelector('.number_balls');
var number_boxes = document.querySelector('.number_boxes');
var create_btn = document.querySelector('.create-btn');

function productBoxes(a) {
    num = 0;

for(let i = 1; i <= a; i++) {
    if(num == 0) {
        num = 1;
    }
    else {
        num = num + 1;
    }
    container.insertAdjacentHTML('afterbegin', `
        
                                     <div class="box-cont box-cont-${i}">
                                         ${product(num, 'box')}
                                     </div>   

                                            `)
}


container.insertAdjacentHTML('afterbegin', `
                                    <div class="box-cont box-cont-${num + 1}">
                                         ${product(num + 1, 'last-box')}
                                     </div>    
        `)



}



function product(x, cls) {
    var inner = '';
    for(let i = 1; i <= x; i++) {
        inner += `<div class="${cls}"></div>`
    }
    return inner;
}

function game() {
    var num_arr = [0];

    for(let i = 1; i <= num + 1; i++) {
        if(i == 1) {
            document.querySelector(`.box-cont-1`).children[0].classList.add('selected');
        }
        else{
            var last = num_arr[num_arr.length - 1];
            var ran_num = Math.random() < 0.5 ? last : last + 1;
            num_arr.push(ran_num);
            var child = document.querySelector(`.box-cont-${i}`).children;
            child[ran_num].classList.add('selected');
        }
        
    }

    

    document.querySelectorAll('.last-box').forEach(element => {

        if(element.classList.contains('selected')) {
            element.innerHTML += `<div class="ball"></div>`
        
        }
    });
}



function reset() {
    document.querySelectorAll('.box').forEach(element => {
        element.classList.remove('selected');
    });
    document.querySelectorAll('.last-box').forEach(element => {
        element.classList.remove('selected');
    });
}

create_btn.addEventListener('click', function() {
    container.innerHTML = '';
    productBoxes(number_boxes.value);
})

start.addEventListener('click', function () {
    for (let i = 1; i <= number_balls.value; i++) {
        setTimeout(function () {
            reset();
            game();

        }, i * 10);
    }
});

productBoxes(15);





