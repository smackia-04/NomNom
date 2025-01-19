import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                login : "Dummy Name",
                location : "Dummy Location",
            },
        }
    }

    async componentDidMount() {
        const response = await fetch("https://api.github.com/users/smackia-04");
        const data = await response.json();
        this.setState({
           userInfo : data,
        })
    }

    render() {
        return (
            <div className="profile">
                <h1>This is my Profile page.</h1>
                <h3>Name : {this?.state?.userInfo?.login}</h3>
                <h3>Location : {this?.state?.userInfo?.location}</h3>
                <img src = {this?.state?.userInfo?.avatar_url} ></img>
            </div>
        )
    }
}
export default Profile;