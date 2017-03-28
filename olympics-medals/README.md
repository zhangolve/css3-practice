# olympics-medals-rank

# 主要功能

- 通过选择国家和奖牌类型来确定某个国家得到某一种奖牌，通过按动添加按钮将该枚奖牌计入该国奖牌榜之中。
- 奖牌榜显示每个国家（在这里为了方便只挑选了五个国家作为示例，分别为中国、美国、加拿大、日本和巴西）的金牌、银牌、铜牌及奖牌总数
- 添加奖牌之后奖牌榜随即发生相应的变化。

# 主要技术实现

- 采用Jquery 作为主要技术实现
- 使用了[font-awesome](https://www.bootstrapcdn.com/fontawesome/) 中的<i class="fa fa-trophy" aria-hidden="true"></i> 这个icon作为奖牌图标
- 采用了[bootstrap-select](https://silviomoreto.github.io/bootstrap-select/)这款Jquery插件来优化下拉菜单。需注意的是他同时也要求依赖bootstrap.js 以及Jquery.js
- 奖牌榜的table采用了[datatables](https://datatables.net/) 这款Jquery插件，他也能够美化表格。

# TODO

- 奖牌榜排序还存在一些问题，这主要是datatables造成的，希望解决之。
- 通过Ajax来将表单信息上传到后端，使数据能够长期保存。
- 添加对移动端的适配
