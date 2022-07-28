import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";
// console.log(notes);

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    }
    
    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    
    return (<div>
        <Header />
        <Footer />
        <CreateArea onAdd={ addNote } />
         {/* <Note key={1} title="Note title" content="Note content" /> */}
        {/* {notes.map(note =>
        <Note
        key = {note.key} 
        title ={note.title}
        content = {note.content}
        />
        )} */}

        {notes.map((noteItem, index) => {  //index of the current item
            return (
                <Note
                    key= { index }
                    id = { index }
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}   
            
          />
        );
      })}
    </div>);
}

export default App;


// function App() {
//   return (
//     <div>
//       <Header />
//       <CreateArea />
//       <Note key={1} title="Note title" content="Note content" />
//       <Footer />
//     </div>
//   );
// }