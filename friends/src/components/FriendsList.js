import React from "react";
import Friend from './Friend';
import {connect} from "react-redux";
import {fetchFriends} from "../actions"

class FriendsList extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        if(this.props.fetchingFriends) {

        }
        return (
            <div>
                {(this.props.friends).map(friend => {
                    return <Friend key={friend.name} friend={friend} />;
                })}
            </div>
        )
    }
        
}

const mapStateToProps = state => {
    console.log(state);
    return {
      friends: state.friends,
      error: state.error,
      fetchingFriends: state.fetchingFriends
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchFriends }
  )(FriendsList);