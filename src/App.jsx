import { BrowserRouter } from "react-router-dom";

import {Timeline, Hero, Navbar, Tech, Contact} from "./components";
import {experiences, education} from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Timeline experiences={experiences} title="Work Experience." idName="work" preTitle="What I have done so far"/>
        <Timeline experiences={education} title="Education." idName="education" />
        <Tech />
        <Contact idName="contact"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
