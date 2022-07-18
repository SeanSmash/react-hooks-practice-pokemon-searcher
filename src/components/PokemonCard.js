import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, sprites }) {
  const [isFrontSprite, setIsFrontSprite] = useState(true)

  function handleImageClick(){
    setIsFrontSprite((isFrontSprite) => !isFrontSprite)
  }
  
  return (
    <Card>
      <div>
        <div className="image">
          <img 
            src={isFrontSprite ? sprites.front : sprites.back} 
            alt="oh no!"
            onClick={handleImageClick} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
