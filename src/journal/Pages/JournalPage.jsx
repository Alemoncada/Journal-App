import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos vel numquam dolore eveniet! Aut sint accusantium iste maxime debitis adipisci nisi, assumenda temporibus, quidem, praesentium ducimus magnam et modi.</Typography> */}
      {/* < NothingSelectedView/> */}
      <NoteView />
    </JournalLayout>
    
  )
}
