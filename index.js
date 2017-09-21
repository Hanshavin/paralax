class Paralax {

	constructor(el, data) {
		this.el = el
		this.delta = data.delta
	}

	move () {
		var d = window.pageYOffset * this.delta
		this.el.style.webkitTransform = "translate3d(0px,-"+ d +"px,0px)";
	}
}

var paralax1 = new Paralax(document.querySelector('.element.bg1'), {
	delta: 0
})
var paralax2 = new Paralax(document.querySelector('.element.bg2'), {
	delta: 0.5
})
var paralax3 = new Paralax(document.querySelector('.element.bg3'), {
	delta: 1
})
var paralax4 = new Paralax(document.querySelector('.element.bg4'), {
	delta: 1.5
})
var paralax5 = new Paralax(document.querySelector('.element.content'), {
	delta: 1.5
})

window.onscroll = function (e) {
	paralax1.move()
	paralax2.move()
	paralax3.move()
	paralax4.move()
	paralax5.move()
}
