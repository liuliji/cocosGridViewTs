# cocosGridViewTs
cocos的滚动视图，实现了复用，用TypeScript书写
该项目和上一个cocosGridView实现了相同的功能，只不过上一个项目用JavaScript书写，该项目用TypeScript书写。
该项目在已有项目的基础上进行了改进，不再需要手动添加scrollEvents了，在代码逻辑中，实现了事件的添加。
此外，也对之前出现的部分bug进行了修复。

之前的bug: 当滚动到指定位置之后，刷新视图显示，可能会出现视图中没有任何item。
修改之后，不管在何时，即使在滑动时刷新了视图的数据，也不会出现任何错误。
