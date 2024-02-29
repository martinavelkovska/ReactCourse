
import User from './User';

import classes from './Users.module.css';
import { Component } from 'react';



// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class Users extends Component {
// to define state i should use a constructor,
// in the constructor i can do initializing state


constructor () {
  super(); // mora da go povikame konstuktorot od super classata: Component
  this.state = { // imam samo eden state object sto gi grupira site states
    showUsers: true,
    moreState: 'Test' // ovoj second state piece nema da bide lost
    //moze da imam i nestedObject nested:{}
    //eraseState data: []

  }; // vo klasno bazirana komponenta, state e objekt
}

componentDidUpdate(){
  if(this.props.users.length === 0){
    throw new Error('No users provided!');
  }
}

toggleUsersHandler () {
//  this.state.showUsers = false; //NOT correct
 this.setState((curState) => { // za UPDATE NA STATE
  return {showUsers: !curState.showUsers};
 }); // specijalen metod koj e provided od Component  , sekogas prima objekt - koj sto sodrzi nov state koj sto sakame da go stavime no nema da go override stariot state
 //react kej go mergne objektot sto ovde se prakja so vekje postoeckiot state
//moze da koristeme state updating function
//mora d vrateme objekt
}

  render(){

    
  const usersList = (
    <ul>
      {this.props.users.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );

  }
}
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
