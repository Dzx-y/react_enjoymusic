import React, {Component} from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }
        
        componentDidMount() {
            importComponent() //传进来的函数返回我们想要的组件
                .then(cmp => {//这里的cmp估计就是组件的返回值，类似promise的resolve写法
                    this.setState({component: cmp.default}); //把组件存起来
                });
        }
        
        render() {
            const C = this.state.component; //渲染的时候把组件B拿出来
            return C ? <C {...this.props}/> : null; //返回的其实就是组件B，并且把传给A的属性也转移到B上
        }
    }
};

export default asyncComponent;