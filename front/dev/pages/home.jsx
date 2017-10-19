import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/main.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    alert() {
        fetch('/test').then((data) => {
            return data.json()
        }).then((data) => {
            this.setState({
                buttonChange: data.a
            })
        })
    }
    render() {
        return ( <
            div className = "home-wrapper" >
            <
            p > 你好我是home < /p> <
            a href = "/index" > { this.state.buttonChange || "点s回去" } < /a> <
            button onClick = { this.alert.bind(this) } > 点我交 < /button> < /
            div >
        )
    }
}

ReactDOM.render( <
    Home / > ,
    document.querySelector('#root')
)