import React from "react";

interface AvatarProps {
  name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name }) => (
  <span className="avatar">{name[0]}</span>
);
