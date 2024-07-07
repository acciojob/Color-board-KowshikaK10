//your JS code here. If required.
const container=document.querySelector('.container');
for(let i=1;i<=800;i++){
	let square=`<div class='square'></div>`
	container.innerHTML+=square
}

const squares=document.querySelectorAll('.square');
	squares.forEach(square=>{
		square.addEventListener('mouseover',()=>{
			square.style.backgroundColor=randomColor();
		});
		square.addEventListener('mouseout',()=>{
			setTimeout(() => {			  
				square.style.backgroundColor='';
			}, 1000);
		});
})

function randomColor(){
	let color='';
	for (var i=0; i<6; i++) {
        color += (Math.random()*16|0).toString(16);
    }
    return '#'+color;
}