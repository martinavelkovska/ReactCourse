import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBondary from './ErrorBoundary';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];
class UserFinder extends Component{

    static contextType = UsersContext; // ovaa komponenta treba da ima pristap do user's context context

    constructor(){
        super();
        this.state = {
                filteredUsers: [],
                searchTerm: ''
        };
    }

    componentDidMount(){
        //send http request...
        this.setState({filteredUsers: this.context.users}); // ne treba da dodavame if checks bidejki componentDidMount samo ednska se izvrisuva za prv pat
    }

    componentDidUpdate(prevProps, prevState){ //go zamenuva useEffect
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }

    searchChangeHandler(event){
        this.setState({searchTerm: event.target.value});
    }

    render(){
        return(
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={this.searchChangeHandler.bind(this)} />
      </div>
      <ErrorBondary>
      <Users users={this.state.filteredUsers} />
      </ErrorBondary>
    </Fragment>
        );

    }
}
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;