import React from "react";
import API from "../utils/API";

class Discover extends React.Component {
    state = {
        match: false,
        result: "",
        friends: 0
    };

    componentDidMount() {
        this.randomPuppy();
    }

    randomPuppy = () => {
        API.random()
            .then(res => {
                console.log(res.data.message);
                this.setState({ 
                    result: res.data.message,
                    match: false
                })
            })
            .catch(err => console.log(err))
    }

    handleYes = () => {
        let count = Math.floor(Math.random() * 5);
        console.log(count)
        if (count === 0) {
            this.setState(
                {
                    friends: this.state.friends + 1,
                    match: true,
                }
            )
        } else {
            this.randomPuppy();
        }
    }

    handleNo = () => {
        this.randomPuppy();
    }

    matchBanner = () => {
        if (this.state.match) {
            return (
                <div className="alert alert-primary" role="alert">
                    You matched with a friend!
                </div>
            )
        }
    }

    render() {
        return (
            <div className="card" style={{ width: "300px" }}>
                <img src={this.state.result} className="card-img-top" alt={this.state.result}></img>
                <div className="card-body">
                    <p className="card-text">Friends Count: {this.state.friends}</p>
                    <button className="btn btn-danger" onClick={this.handleNo}>
                        No
                    </button>
                    <button className="btn btn-primary" onClick={this.handleYes}>
                        Yes
                    </button>{" "}
                </div>
                {this.matchBanner()}
            </div>
        )
    }
}

export default Discover;