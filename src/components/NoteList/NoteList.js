import { deleteNote } from "../../redux/actions/noteActions";
import "./NoteList.css";
import { useDispatch, useSelector } from "react-redux";

function NoteList() {
  const notes = useSelector((state)=>state.noteReducer.notes);
  const disptach = useDispatch();
    // const notes=[];
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
            onClick={()=>disptach(deleteNote(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
