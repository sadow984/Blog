import React from "react";
import Cards from '../cards/Cards';

const Container = () => {
    

    return (
      <div>
        <span>Recent</span>
        <Cards />
        <Cards />
        <span>Popular</span>
        <Cards />
        <Cards />
      </div>
    );
}

export default Container;