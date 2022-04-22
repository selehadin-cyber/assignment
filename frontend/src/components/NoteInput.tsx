import { ChangeEvent, useState } from "react"

interface NoteInputProps {
  addNote(note: string): void
}


const NoteInput: React.FC <NoteInputProps>= ({ addNote }) => {

  const [note, setNote] = useState("")
  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const addNoteClick = () => {
    addNote(note)
    setNote("")
  }

  return (
    <div>
        <input
        type="text"
        name=""
        id=""
        placeholder="Notes here"
        onChange={updateNote}
      />
      <button onClick={addNoteClick}>
        save
      </button>
    </div>
  )
}

export default NoteInput