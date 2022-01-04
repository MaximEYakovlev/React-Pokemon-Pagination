import { v4 as uuidv4 } from "uuid";

export const PokemonList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={uuidv4()}>{p}</div>
      ))}
    </div>
  );
};
