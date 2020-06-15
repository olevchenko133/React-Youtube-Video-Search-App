import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">


                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="term" > Search Video</label>
                        <input type="text" value={this.state.term} onChange={this.handleChange} name="term" id="term" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
