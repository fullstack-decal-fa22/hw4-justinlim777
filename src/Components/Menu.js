import React from 'react';
import Color from './Color';
import Block from './Block';
import { useState } from 'react';
/* Add any imports you think you might need here! */

const Menu = () => { 
  const [block, setBlock] = useState([]);
  function whenClicked(c) {
    setBlock(block => [<Block color = {c}/>, ...block]);
  }
  const posts = block.map((item) => (item));
    return (
      <div> 
        <div className="colorOptions">
          {/* TODO */}
          <Color color="red" handleClick = {whenClicked}/>
          <Color color="pink" handleClick = {whenClicked}/>
          <Color color="blue" handleClick = {whenClicked}/>
          <Color color="green" handleClick = {whenClicked}/>
        </div>
        {posts}
      </div>
    );
}

export default Menu;