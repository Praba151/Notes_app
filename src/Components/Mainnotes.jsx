function Mainnotes({notes,setnotes,activeview,search}){
    const visiblenotes=notes.filter((n)=>{
        if(activeview==="all")    return !n.deleted
        if(activeview==="pinned") return n.pinned && !n.deleted
        if(activeview==="trash")  return n.deleted
    }).filter((n)=>
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.content.toLowerCase().includes(search.toLowerCase())
    )
    return(<>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",padding:"10px"}}>
        {visiblenotes.map((note)=>(
            <div key={note.id}style={{border:"1px solid gray",borderRadius:"10px",padding:"16px",heigth:"200px",width:"100%",display:"flex",flexDirection:"column"}}>
                <input value={note.title}
                placeholder="Title" style={{border:"none",fontSize:"2rem"}}
                onChange={(e)=>{
                    let changes=notes.map((n)=>
                    n.id===note.id ?{...n,title:e.target.value}:n)
                    setnotes(changes)
                }}/>
                <textarea value={note.content}placeholder="write your note" style={{height:"150px",border:"none",resize:"none",padding:"8px"}}
                onChange={(e)=>{
                    let changed=notes.map((n)=>
                    n.id===note.id ?{...n,content:e.target.value}:n
                    )
                    setnotes(changed)
                }}
                />
                <div style={{marginTop:"10px",display:"flex",gap:"10px"}}>
                    <button onClick={()=>{
                        let pins=notes.map((n)=>n.id===note.id ? {...n,pinned:!n.pinned}:n)
                        setnotes(pins)
                    }}>Pinned</button>
                    <button onClick={()=>{
                        let deletes=notes.map((n)=>n.id===note.id ? {...n,deleted:true}:n)
                        setnotes(deletes)
                    }}>Delete</button>
                    {note.deleted && (
                        <>
                        <button onClick={()=>{
                            let restore=notes.map((n)=>n.id===note.id ? {...n,deleted:false}:n)
                            setnotes(restore)
                            }}>Restore</button>
                            
                        <button onClick={()=>{
                            let permdelete=notes.filter((n)=>n.id!==note.id)
                            setnotes(permdelete)}}>Delete Forever</button>
                        </>
                            )}
                </div>
            </div>
        ))}
        {visiblenotes.length === 0 && (
            <p style={{color:"gray", textAlign:"center"}}>
                Add new notes...
            </p>
        )}
    </div>
    </>)
}
export default Mainnotes