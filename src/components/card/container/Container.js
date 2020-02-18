import React from "react";
import Cards from '../cards/Cards';

const Container = () => {
    

    return (
      <div>
        <span>Recent</span>
        <div>
          <Cards />
        </div>
        <span>Popular</span>
        <div>
          <Cards />
        </div>
      </div>
    );
}

export default Container;