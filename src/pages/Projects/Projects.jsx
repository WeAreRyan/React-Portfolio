import "./Projects.css";

export default function Projects() {
    return (
        <>
    <h1>PROJECTS PAGE</h1>
    <div className="row">
        <div className="col-1"></div>
        <div className="col-3">
            <h2>My first true web application: "Solitaire"</h2>
            <img src="https://i.imgur.com/egmRaG2.png" className="project-img" />
            <a className="project-link" href="https://weareryan.github.io/SEI-Project-1-Solitare/">Check It Out!</a>
            <a className="project-link" href="https://github.com/WeAreRyan/SEI-Project-1-Solitare">Github Repo</a>
            <div>This simplified version of solitaire is the first web application I created from scratch. It is a simple single page application using vanilla HTML, CSS and JavaScript.</div>
        </div>
        <div className="col-3">
            <h2>Getting more complicated now: Stardew Valley Completion Tracker</h2>
            <img src="https://i.imgur.com/JDGRCjP.png" className="project-img" />
            <a className="project-link" href="https://stardew-valley-tracker.herokuapp.com/">Check It Out!</a>
            <a className="project-link" href="https://github.com/WeAreRyan/stardew-valley-completion-tracker">Github Repo</a>
            <div>This is a webapp with the intended purpose of allowing users to track their progress in the farming game Stardew Valley. The making of this application represents my first incursion into development using a framework, in this case the Express framework, and CRUD. </div>
        </div>
        <div className="col-3">
            <h2>Python and Team Programming: Macro Manager</h2>
            <img src="https://imgur.com/eO14L3f.png" className="project-img" />
            <a className="project-link" href="https://macromanagerp3.herokuapp.com/">Check It Out!</a>
            <a className="project-link" href="https://github.com/WeAreRyan/macromanager">Github Repo</a>
            <div>Macro Manager is the result of my first collaborative work as a developer and my first time programing in Python. Built using the Django framework this app is a tool designed to be used by small to medium size companies in order to track their workflow and employees. Credit to Eric Tau and James Devine as my partners in crime on this one... also Sean. </div>
        </div>
        <div className="col-2"></div>
    </div>
    <div className="row">
    <div className="col-1"></div>
        <div className="col-3">
            <h2>The capstone project: Rocks-R-Us</h2>
            <img src="https://i.imgur.com/E7kksbL.png" className="project-img" />
            <a className="project-link" href="https://rocks-r-us.herokuapp.com/">Check It Out!</a>
            <a className="project-link" href="https://github.com/WeAreRyan/rocks-r-us">Github Repo</a>
            <div>This mock store is the final application I created while still enrolled in my curriculum. Created using the React library/framework, while not completely function(when selecting checkout it just clears you cart) it is an exhibit of executing CRUD. </div>
        </div>
        <div className="col-2"></div>
    </div>
    </>
    )
}