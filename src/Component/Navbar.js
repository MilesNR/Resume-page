import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav-Container">
      <div className="Nav-left">
        <button className="logo-s">S</button>
        <p className="smile"> Smile </p>
        <p className="nattakit"> Nattakit </p>
      </div>
      <div className="Nav-right">
        <p className="menu">About me</p>
        <p className="menu">Experience & Education</p>
      </div>
    </div>
  );
}

export default Navbar;
