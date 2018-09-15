import React, {Component} from 'react';

// class based component for tracking state 
class SearchBar extends Component {
    //  need to render and return jsx

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    
        onInputChange(term) {
            this.setState({ term });
            this.props.onSearchTermChange(term);
        }
    }




export default SearchBar;

