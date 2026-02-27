import './App.css'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header' 
import Mainnotes from './Components/Mainnotes'
import { useState,useEffect } from 'react'

function App() {
    const saved = localStorage.getItem("notes");
    const [notes, setnotes] = useState(saved ? JSON.parse(saved) : []);
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    const[activeview,setactiveview]=useState("all")
    const [search, setsearch] = useState("")
    function addnotes(){
        const newnote={id:notes.length+1,title:"",content:"",done:false,pinned:false,deleted:false}
        setnotes([...notes,newnote])
    }
    // const donecount=notes.filter((n)=>n.done===true).length
    const pinnedcount=notes.filter((n)=>n.pinned===true && !n.deleted).length
    const deletedcount = notes.filter((n) => n.deleted === true).length
    return(<>
    <div style={{display:"flex"}}>
        <div style={{backgroundColor:"#5252ad",width:"25vw",height:"100vh"}}><Sidebar addnote={addnotes} donecount={notes.filter((n)=>!n.deleted).length} pinnedcount={pinnedcount} deletedcount={deletedcount} activeview={activeview} setactiveview={setactiveview}/></div>
        <div style={{flex:"1"}}>
            <div >
                <Header search={search} setsearch={setsearch}/>
            </div>
            <div>
                <Mainnotes notes={notes} setnotes={setnotes} activeview={activeview} search={search}/>
            </div>
        </div>
    </div>
    </>)
}

export default App
