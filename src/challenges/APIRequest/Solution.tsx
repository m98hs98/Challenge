import React, { useState, useEffect } from "react";
import axios from "axios";


export const Solution = () => {

  const [pokemon, setPokemon] = useState<string[]>([]);
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
      .then((response) => {
        if (!response.data || !response.data.results) {
          throw new Error("Invalid data received from the API");
        }
        const sortedPokemon = response.data.results
          .map((result: any) => result.name)
          .sort();
        setPokemon(sortedPokemon);
      })
      .catch((error) => setErrors(error.message));
  }, []);

  if (errors) {
    return <div>Error: {errors}</div>;
  }


  return (
    <article className="prose lg:prose-l">
      <h1>Solution</h1>
      <div>
        {pokemon.map((name) => (
          <p key={name}>{name}</p>
        ))}
      </div>
    </article>
  );
};






// import React, { useState, useEffect } from "react";

// export const Solution = () => {
//   const [pokemon, setPokemon] = useState<string[]>([]);
//   const [errors, setErrors] = useState<string | null>(null);

//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network request failed");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (!data || !data.results) {
//           throw new Error("Invalid data received from the API");
//         }
//         const sortedPokemon = data.results.map((result: any) => result.name).sort();
//         setPokemon(sortedPokemon);
//       })
//       .catch((error) => setErrors(error.message));
//   }, []);

//   if (errors) {
//     return <div>Error: {errors}</div>;
//   }

//   return (
//     <article className="prose lg:prose-l">
//       <h1>Solution</h1>
//       <div>
//         {pokemon.map((name) => (
//           <p key={name}>{name}</p>
//         ))}
//       </div>
//     </article>
//   );
// };