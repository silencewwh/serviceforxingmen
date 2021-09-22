Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "pages/index/index2",
      iconPath: "/ui/icon-发布.png",
      selectedIconPath: "/ui/icon-发布.png",
      text: "发布"
    }, {
      pagePath: "pages/index/index3",
      iconPath: "/ui/icon-历史.png",
      selectedIconPath: "/ui/icon-历史.png",
      text: "历史"
    },
  {
    pagePath: "pages/index/index4",
    iconPath: "/ui/icon-我的.png",
    selectedIconPath: "/ui/icon-我的.png",
    text: "我的"
  }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})