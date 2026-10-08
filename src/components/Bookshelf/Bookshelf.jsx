import { useState } from 'react';

function Bookshelf() {

    const [Books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    function handleInputChange(event) {
        console.log(event.target.value)
        setNewBook({...newBook,[event.target.name]: event.target.value});
    }

function handleSubmit(event) {
        event.preventDefault();
        if (newBook.title && newBook.author) {
            setBooks([...Books, newBook]);
            setNewBook({ title: '', author: '' });
        } else {
            alert("Both Fields should be filled");
        }
    }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title: </label>
                        <input onChange={handleInputChange} id="title" name="title" type="text" value={newBook.title} />

                        <label htmlFor="author">Author: </label>
                        <input onChange={handleInputChange} id="author" name="author" type="text" value={newBook.author} />
                        <br />
                        <button>Add</button>

                    </form>
                </div>
                <h3>All Books</h3>
                {Books.map((oneBook) =>
                    <div className="bookCardsDiv" key={oneBook.title}>
                        <p>{oneBook.title}  {oneBook.author}</p>
                    </div>
                )}
            </div>

        </>
    )
}

export default Bookshelf
