import React from "react";

export default function FamilyMember({ imageURL, name }) {
  return (
    <div>
      <img src={imageURL} alt={name} />
      <p>{name}</p>
    </div>
  );
}
