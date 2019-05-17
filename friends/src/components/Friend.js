import React from "react";

const Friend = props => {
    return <p>Name: {props.friend.name}, Age: {props.friend.age}, Email: {props.friend.email} <button>Delete</button></p>
}

export default Friend;