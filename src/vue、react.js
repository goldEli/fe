
/**
1. 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
 
key 就是元素的唯一身份，在 diff 的时候, 才知道哪一个移动到了哪里，哪一个被删除了
基于key创建map，用于后续的对比,移动 删除等操作
 */

/**
React 中 setState 什么时候是同步的，什么时候是异步的？

setState 在react 可控的回调中 比如生命周期 event 是"异步"的 
setState 在不可控的回到中 比如 setTimeout 是同步的

这个异步不是真正的异步，只是在更新时放到队列中，统一批量更新，由于更新时机靠后 导致 react 提供的一些方法拿不到最新值，而呈现出异步的效果
 */

/**
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};
// 0 0 2 3
 */