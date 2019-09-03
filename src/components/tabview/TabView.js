import React, { useState } from 'react';
// Components
import { Nav } from 'react-bootstrap';
import About from 'components/about/About';
import Resume from 'components/resume/Resume';
import Projects from 'components/projects/Projects';
import Construction from 'components/construction/Construction';

function TabView() {
  // Tracks selected tab
  const [tab, setTab] = useState("about");

  return (
    <div>
      <Nav
        variant="pills"
        defaultActiveKey={tab}
        className="pt-3 justify-content-center"
        onSelect={(eventKey, _) => setTab(eventKey)}>
        <Nav.Link eventKey="about">about</Nav.Link>
        <Nav.Link eventKey="projects">projects</Nav.Link>
        <Nav.Link eventKey="resume">resume</Nav.Link>
      </Nav>
      <div className="row justify-content-center">
        <div className="col-10">
          <hr />
        </div>
      </div>
      {(() => {
        switch (tab) {
          case "about": return <About />;
          case "resume": return <Resume />;
          case "projects": return <Projects />;
          default: return <Construction />;
        }
      })()}
    </div>
  );
}

export default TabView;
