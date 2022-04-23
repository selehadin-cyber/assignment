import { ChangeEvent, useEffect, useState } from "react"

interface NoteInputProps {
  addNote(title: string, description: string): void
}


const NoteInput: React.FC <NoteInputProps>= ({ addNote }) => {

  const [title, setTitle] = useState("")
  const [descriptionText, setDescriptionText] = useState("")

  useEffect(() => {
    console.log("usedefffect")
  }, [title])
  

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const updateNoteD = (event: ChangeEvent<HTMLInputElement>) => {
    setDescriptionText(event.target.value)
  }

  const addNoteClick = () => {
    addNote(title, descriptionText);
    setTitle("")
    setDescriptionText("")
  }

  return (
    <div>
        <input
        type="text"
        name=""
        value={title}
        id=""
        placeholder="description here"
        onChange={updateNote}
      />
      <input
        type="text"
        name=""
        value={descriptionText}
        id=""
        placeholder="Notes here"
        onChange={updateNoteD}
      />
      <button onClick={addNoteClick}>
        save
      </button>
    </div>
  )
}

export default NoteInput