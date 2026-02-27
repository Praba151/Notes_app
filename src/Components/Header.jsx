function Header({ search, setsearch }) {
  return (
    <>
      <div
        style={{height: "100px",display: "flex",justifyContent: "center",alignItems: "center"}}>
        
        <input value={search} onChange={(e) => setsearch(e.target.value)} placeholder="search notes"
          style={{paddingLeft:"20px",border: "3px solid green",borderRadius:"80px",height: "50px",outline: "none",width: "60%",fontSize:"1rem",fontWeight:"bold"}}
        ></input>
      </div>
    </>
  );
}
export default Header;
