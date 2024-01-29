import { BrowserRouter } from "react-router-dom";

import {  Timeline, Hero, Navbar, Tech } from "./components";
import {experiences, education} from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Timeline experiences={experiences} title="Work Experience." idName="work"/>
        <Timeline experiences={education} title="Education." idName="education" />
        <Tech />

      </div>
    </BrowserRouter>
  );
}

export default App;
