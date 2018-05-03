import React, { Component } from 'react';
import './App.css';
import BookTable from './components/BookTable';
import AddBookForm from './components/AddBookForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      //   books: [{
      //     id: 1,
      //     customerName: "Kratika",
      //     bookName: "kite runner",
      //     bookId: "KR01",
      //     delivered: true
      //   },
      //   {
      //     id: 2,
      //     customerName: "srishti",
      //     bookName: "2 States",
      //     bookId: "2S01",
      //     delivered: false
      //   }
      //   ]
      // }
      books: []
    }
  }


  handleNewBook(newBook) {
    // let { books } = this.state;
    //     books = books.concat(newBook);
    //     this.setState({ books });


    let api = `http://localhost:8080/books`;
    fetch(api, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook)
    }).then(response => response.json()).catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

    let { books } = this.state;
    let promise = fetch(api);
    promise
      .then(response => response.json())
      .then(books => {
        this.setState({ books });
      });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.books) {
      console.log(nextProps);
    }
  }

  componentDidMount() {
    let { books } = this.state;
    let api = "http://localhost:8080/books";
    let promise = fetch(api);
    promise
      .then(response => response.json())
      .then(books => {
        this.setState({ books });
      });
  }

  render() {
    //this.getData();
    let { books } = this.state;
    return (
      <div className="container">
        <div className="jumbotron">
          <h3 className="display-3">Book App</h3>
        </div>
        <BookTable books={books} />
        <div>
          <AddBookForm onNewBook={(newBook) => { this.handleNewBook(newBook) }} />

        </div>
      </div>
    )
  }
}

export default App;
