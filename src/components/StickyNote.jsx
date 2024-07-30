import React from 'react'
import Note from './Note';

function StickyNote(){
    const notesData = [
        {title: 'note 1', content: 'content 1'}, 
        {title: 'note 2', content: 'content 2'}, 
        {title: 'note 3', content: 'content 3'}, 
        {title: 'note 4', content: 'content 4'}
    ]
    const notes = notesData.map((note, index) => <Note title={note.title} content={note.content} key={index} />)
    return <ul>
                {notes}
            </ul>
}


export default StickyNote;