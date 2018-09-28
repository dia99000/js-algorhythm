let app = new Vue({
	el: '#app',
	data: {
		arr: [],
		number: null,
		isAdded: false,
		sortedArr: [],
		isSorted: false,
	},
	methods: {
		//入力を受け取って配列に格納
		addNumber: function(event){
			if(isNaN(parseInt(this.number, 10)) === false){
				console.log(this.number);
				this.isAdded = true;
				this.arr.push(parseInt(this.number, 10));
			};
			this.number = null;
		},
		putArr: function(){
			this.sortedArr = this.arr;
			this.isSorted = true;
		},
		bubbleSort: function(event){
			this.putArr();
			// console.log("bubbleSortよばれた");
			for(let i = 0; i < this.sortedArr.length; i++){
				console.log("1回目のfor文");
				for(let j = this.sortedArr.length-1; j > i; j--){
					if(this.sortedArr[j] < this.sortedArr[j-1]){
						let tmp = this.sortedArr[j];
						this.sortedArr[j] = this.sortedArr[j-1];
						this.sortedArr[j-1] = tmp;
						console.log(this.arr);

					}
				}
			}
		},
		selectionSort: function(event){
			this.putArr();
		},
		insertionSort: function(event){
			this.putArr();
		},
	},
})
//バブルソート
//選択ソート
//挿入ソート
//フープソート
//マージソート
//クイックソート