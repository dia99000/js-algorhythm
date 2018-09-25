let app = new Vue({
	el: '#app',
	data: {
		arr: [],
		number: null,
		isAdded: false,
	},
	methods: {
		addNumber: function(event){
			if(isNaN(parseInt(this.number, 10)) === false){
				console.log(this.number);
				this.isAdded = true;
				this.arr.push(parseInt(this.number, 10));
			};
			this.number = null;
		},
	},
})