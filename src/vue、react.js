
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

/**
聊聊 Redux 和 Vuex 的设计思想

1. 全局管理数据，单一数据源
2. Redux 数据不可变  Vuex 数据可观察
3. dispatch 触发 action ，Redux 基于reducer得到新的state，Vuex actions 触发订阅组件更新

 */

/**
 聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的

 v-model 就是一个语法糖，@input  :value 合并 比如用户输入触发@input，改变value ,value 触发更新
 */

/**
Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。

Virtual DOM 本质也是需要去操作原生dom的，所以说理论上加上了diff逻辑，很多时候比直接操作dom要慢。
Virtual DOM 目的的目的并不是为了提升性能，而是为了代码的可维护性, 开发只用关注数据和ui的关系，即减少了代码量，提高了维护性

*/

/**
redux 的 reducer 为什么要是纯函数

redux的理念实现做一个时间旅行，记录状态的历史，当时看过一个视频dan在演示redux的时候，展示了一个类似于ppt的例子，可以返回上一步，也就是说状态可以回溯，那reducer 就必须做成纯函数，相同的输入等到相同的输出
 */

/**
 在 Vue 中，子组件为何不可以修改父组件传递的 Prop

 Vue 中数据的流动是单向的，子组件可以通过 emit 等方式了修改，虽然写起来更复杂，维护性更高，单向的数据流动更好排查定位。
 */

 /**
双向绑定和 vuex 是否冲突

当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 v-model 会比较棘手，既然不能直接修改，那么创建一个ref 中间值来处理
  */
