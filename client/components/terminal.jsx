import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import 'terminal-in-react/lib/css/index.css';

// currently not working
// can be integrated in the future

class Terminal extends Component {
  showMsg = () => 'Hello World'

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Terminal
          // color='green'
          // backgroundColor='black'
          // barColor='black'
          // style={{ fontWeight: "bold", fontSize: "1em" }}
          // commands={{
          //   'open-google': () => window.open('google.com', '_blank'),
          //   showmsg: this.showMsg,
          //   popup: () => alert('Terminal in React')
          // }}
          // descriptions={{
          //   'open-google': 'opens google.com',
          //   showmsg: 'shows a message',
          //   alert: 'alert', popup: 'alert'
          // }}
          // msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
      </div>
    );
  }
}

