import React from "react";
import { Header, Home } from "./";

const App = () => {
  return (
    /*pixel size: full width - x-large for desktop device , padding for top and bottom 32 pix, from left 4 pixs
    however: for large devices it will be px 12, mobile 4  */
    <div className= " w-full xl:[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">

     {/* particles container (Background) */}
     
      {/*header */}
    <Header />
      {/* home container */}
    <Home />

      {/* about container */}

      {/* skills container */}

      {/* projects container */}


      {/* contact container */}

      {/* footer container */}
    </div>
  );
};

export default App;
