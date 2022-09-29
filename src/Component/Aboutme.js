import "./Aboutme.css";

function Aboutme() {
  return (
    <div className="main-container">
      <div className="Aboutme-container">
        <div>
          <img src={require("./img/profile.jpg")} className="avatar" />
        </div>
        <div className="Aboutme-detail">
          <p className="Job-postions">
            Restaurant Managers | Developer-in-Training
          </p>
          <p className="Name-title">Nattakit Rattanakeha (Smile)</p>
          <p className="jd">
            Web Developers design and update websites and online applications
            using various programming languages and design tools. A regular
            example resume for this job mentions responsibilities such as
            creating webpage layouts, writing code, editing website content, and
            making adjustments based on client feedback.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
