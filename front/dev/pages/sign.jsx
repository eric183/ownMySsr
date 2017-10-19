import React from 'react';
import ReactDOM from 'react-dom';


class UserName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="user-content">
                <section>
                    <label for="userName">
                        用户名
                        <input id="userName" placeholder="请输入用户名" value={this.state.value}/>
                    </label>
                </section>
            </div>
        )
    }
}

class Poster extends React.Component {
    render() {
        return (
            <div className="button-content">
                <button></button>
            </div>
        )
    }
}

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    bindInput(value) {
        this.setState({
            value: value
        })
    }
    render() {
        return (
            <div className="sign-wrapper">
                <UserName dataValue={this.state.value} onChange={this.bindInput(dataValue).bind(this)} />
            </div>
        )
    }
}
ReactDOM.render(
    <SignUp/>,
    document.querySelector('#root')
)