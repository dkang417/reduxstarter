import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// create a new component. this component should produce
// some html 
const API_KEY = 'AIzaSyBkQGAt3Lyb_WGpNbz0byzxFMqF9pr_F6k';


const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// take this component's generated html and 
// put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
