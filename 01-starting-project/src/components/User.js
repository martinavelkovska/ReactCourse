import {Component} from 'react';
import classes from './User.module.css';
//kako da ja transforimare vo class-based komponenta

class User  extends Component{ // makes ur class worr as a component i dodava props property
  // constructor() {

  // } //initialization

  componentWillUnmount(){
    console.log('User will unmount!');
  }
  render () {  //specificen metod ocekuvan od React, kade React go povikuva koga kje vidi deka komponentata se koristi  vo jsx === kako return vo funkcionalna komponenta
    return <li className={classes.user}>{this.props.name}</li>;
  }
}


// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
