import React from "react";
import Friend from './Friend';
import {connect} from "react-redux";
import {fetchFriends} from "../actions";
import {withRouter} from 'react-router-dom';

class FriendsList extends React.Component {
   
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {

        return (
            <div>
                {this.props.friends.map(friend => 
                     <Friend key={friend.id} friend={friend} />)}
            </div>
        )
    }
        
}

const mapStateToProps = ({ friends, fetchingFriends }) => ({
    friends,
    fetchingFriends
});
  
export default withRouter(
    connect(
        mapStateToProps,
        { fetchFriends }
    )(FriendsList)
);