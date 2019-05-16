import React from "react";

const FriendsList = props => {
    return (
        <div>
            {(props.friends).map(friend => {
                return <Friend key={friend.name} friend={friend} />;
            })}
        </div>
    )
        
}

export default FriendsList;