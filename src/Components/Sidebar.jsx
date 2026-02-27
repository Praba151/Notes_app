function Sidebar({addnote,donecount,pinnedcount,deletedcount,activeview,setactiveview}){
    const userview=(view)=>({
        paddingTop:"20px",
        fontSize:"1.5rem",
        cursor:"pointer",
        fontWeight:activeview===view?"bold":"normal",
        color:activeview===view?"yellow":"white"
    })
    return(
        <>
        <div style={{marginLeft:"40px",paddingTop:"30px"}}>
            <h1>NotesList</h1>
            <div style={{paddingLeft:"20px",paddingTop:"30px"}}>
                <div style={userview("all")} onClick={()=>setactiveview("all")}>AllNotes({donecount})</div>
                <div style={userview("pinned")} onClick={()=>setactiveview("pinned")}>Pinned({pinnedcount})</div>
                <div style={userview("trash")} onClick={()=>setactiveview("trash")}>Trash({deletedcount})</div>
            </div>
            <button onClick={addnote} style={{backgroundColor:"#67b488",fontWeight:"bold",textAlign:"center",cursor:"pointer",color:"white",marginTop:"100px",paddingleft:"2px",fontSize:"1.5rem"}}>NewNotes</button>
        </div>
        
        </>
    )
}
export default Sidebar