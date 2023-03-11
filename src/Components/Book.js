import React, { Component } from 'react';

import BookWithUs from './HomePages/BookWithUs';
import NavigationBar from './NavigationBar';

class Book extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <NavigationBar/>
            <BookWithUs/>
            </>
        );
    }
}
 
export default Book;