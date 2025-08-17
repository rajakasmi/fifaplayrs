
import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", textAlign: "center" }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe:</strong> {team} <br />
          <strong>Nationalité:</strong> {nationality} <br />
          <strong>Numéro:</strong> {jerseyNumber} <br />
          <strong>Âge:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Props par défaut
Player.defaultProps = {
  name: "Joueur Inconnu",
  team: "Équipe Inconnue",
  nationality: "N/A",
  jerseyNumber: 0,
  age: "N/A",
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
