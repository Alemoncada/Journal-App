import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos vel numquam dolore eveniet! Aut sint accusantium iste maxime debitis adipisci nisi, assumenda temporibus, quidem, praesentium ducimus magnam et modi.</Typography> */}
      
      {/* < NothingSelectedView/> */}

      <NoteView />

      <IconButton
        size="large"            
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.7},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>

    </JournalLayout>
    
  )
}
