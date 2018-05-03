import React, { Component } from 'react';

class AddBookForm extends Component {
    constructor(props){
        super(props);
        this.state={
            showForm:false,
            id:"",
            customerName:"",
            bookName:"",
            bookId:"",
            delivered:false

        }
    }
    toggleForm(){
        let {showForm}=this.state;
        this.setState({showForm:!showForm, id:0,
        customerName:"",
        bookName:"",
        bookId:"",
        delivered:false})
      }
      handleForm(e) {
        e.preventDefault();
        let newBook = {
            id: this.refs.id.value,
            customerName: this.refs.customerName.value,
            bookName: this.refs.bookName.value,
            bookId:this.refs.bookId.value,
            delivered:this.refs.delivered.value
        };
        this.props.onNewBook(newBook);
        this.toggleForm();
    }
      renderForm()
      {
          let {showForm}=this.state;
          if(!showForm){
           return( <div>
                <button onClick={()=>this.toggleForm()}> Add Book</button>
                </div>)
            }else{return (
                   
                    <div className="card">
                        <div className="card-header">Review Form</div>
                        <div className="card-body">
                            <form  onSubmit={(e) => { this.handleForm(e) }}>
                                <div className="form-group">
                                    <label>Id</label>
                                    <input className="form-control" type="number" ref="id"/>
                                </div>
                                <div className="form-group">
                                    <label>Customer Name</label>
                                    <input className="form-control" type="text" ref="customerName"/>
                                </div>
                                <div className="form-group">
                                    <label>Book Name</label>
                                    <input className="form-control" type="text" ref="bookName"/>
                                </div>
                                <div className="form-group">
                                    <label>Book Id</label>
                                    <input className="form-control" type="text" ref="bookId"/>
                                </div>
                                <div className="form-group">
                                    <label>Delivered</label>
                                    <input className="form-control" type="boolean" ref="delivered"/>
                                </div>
                                <div>
                                    <button className="btn btn-primary">Submit</button>
                                    <button className="btn btn-danger" onClick={()=>this.toggleForm()}>Close</button>
                                </div>
                            </form>
                        </div>
                    </div>

            )}
      }
    render() {
        return(
            <div>
                {this.renderForm()}
            </div>
        )}
}

export default AddBookForm;