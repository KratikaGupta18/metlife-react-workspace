import React, { Component } from 'react';

class BookTable extends Component {
    renderTable() {
        let { books } = this.props;
        return books.map((item, idx) => {
            return (<tr key={idx}>
                <td>{item.id}</td>
                <td>{item.customerName}</td>
                <td>{item.bookName}</td>
                <td>{item.bookId}</td>
                <td>{item.delivered ? "Yes" : "No"}</td>
                <td><a href="/">Edit</a></td>
                <td><a href="/">Delete</a></td>
            </tr>)
        })
    }
    render() {
        return (
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Book Id</th>
                            <th scope="col">Delivered</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookTable;