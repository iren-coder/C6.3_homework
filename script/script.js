const icon1 = document.querySelector('.btn_icon1');

const icon2 = document.querySelector('.btn_icon2');

document.querySelector(".btn").addEventListener("click", () => {
	icon1.classList.toggle("rotate");
	icon2.classList.toggle("rotate");
})