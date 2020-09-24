import React from "react";
import API from "../utils/API";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for a Puppy"
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Search
            </button>
            </div>
        </form>
    )
}

function ResultList(props) {
    console.log(props.results)
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result}>
                    <img alt={result} className="img-fluid" src={result} />
                </li>
            ))}
        </ul>
    )
}

class Search extends React.Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount() {
        this.searchPuppy("hound");
    }

    searchPuppy = query => {
        API.search(query.split(" ").join("").toLowerCase())
            .then(res => {
                console.log(res.data.message.slice(0, 10))
                this.setState({ results: res.data.message.slice(0,10) })
            })
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchPuppy(this.state.search);
    };

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList
                    results={this.state.results}
                />
            </div>
        )
    }
}

export default Search;