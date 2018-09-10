import React, {Component} from 'react';

class SearchBar extends Component {
    // need to render and return jsx

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                {/* Value of the input: {this.state.term} */}
            </div>
        );
    }


}

export default SearchBar;

