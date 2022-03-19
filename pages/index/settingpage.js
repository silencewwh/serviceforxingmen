Page({
  data: {
    dialogShow: false,
    buttons: [{text: '取消'}],
	items: [
		//{value: "1rem", valuePage: "0.64rem", name: '小', checked: false,style: "0.7rem"},
		//{value: "1.2rem", valuePage: "0.66rem", name: '中', checked: false,style: "0.8rem"},
		//{value: "1.4rem", valuePage: "0.68rem", name: '大', checked: false,style: "0.9rem"},
		//{value: "1.6rem", valuePage: "0.75rem", name: '特大', checked: false,style: "1rem"},
	],
	rootFontSize: wx.getStorageSync('rootFontSize'),
	pageFontSize: wx.getStorageSync('pageFontSize'),
  },
  tapDialogButton() {
	this.setData({
		dialogShow: false
	})
  },
  radioChange(e) {
		console.log('radio发生change事件，携带value值为：', e.detail.value)
		const items = this.data.items
		for (let i = 0, len = items.length; i < len; ++i) {
			items[i].checked = items[i].value === e.detail.value
		}
		this.setData({
			items
		})
	},
	getCurrentValue: function () {
		let _this = this;
		let rootFontSize = _this.data.rootFontSize;
		let items = [
			{value: "1rem", valuePage: "0.64rem", name: '小', checked: false,style: "0.7rem"},
			{value: "1.2rem", valuePage: "0.66rem", name: '中', checked: false,style: "0.8rem"},
			{value: "1.4rem", valuePage: "0.68rem", name: '大', checked: false,style: "0.9rem"},
			{value: "1.6rem", valuePage: "0.75rem", name: '特大', checked: false,style: "1rem"},
		]
		
		items.map((item, index)=>{
			if(rootFontSize){
				if(item.value === rootFontSize){
					item.checked = true
				}
			}else{
				items[1].checked = true
			}
		})
		_this.setData({
		  items: items
		})
		// debugger
	},
	handleAdd: function () {
		let _this = this;
		let rootFontSize = _this.data.rootFontSize
		_this.data.items.map((item, index)=>{
			if(item.checked === true){
				wx.setStorageSync("rootFontSize", item.value);
				wx.setStorageSync("pageFontSize", item.valuePage);
				app.toast('设置成功!重新进入小程序即可生效', 200)
			}
		})
		// debugger
	},
})
