// import React, { Component } from 'react';

// class LogIn extends Component {
//     state = {
//         users:[]
//     }

//     getAllUsers = () => {
//         axios.get('localhost:3001/api/users').then(res => {
//             this.setState({users:res.data})
//         }
//         )
//     }
//     render() {
//         return (
//             <div>
//                 <h1> Log In </h1>
//                 <h3> Select Existing User</h3>
//                 {this.state.users.map(user=>{
//                     return(<Link to ={`/user/${user._id}`}> {user.userName}</Link>)
//                 })}
//             </div>
//         );
//     }
// }

// export default LogIn;