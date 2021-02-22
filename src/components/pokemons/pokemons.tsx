import React, { memo } from "react";
import { Pokemon } from "../pokemon/pokemon";
import { useGetAllPokemonsQuery } from "./__generated__/queries";


export const Pokemons = memo(() => {

  const { data, loading } = useGetAllPokemonsQuery();

  if (loading && !data?.pokemons?.results) {
    return <>Loading...</>;
  }

  return (
    <>
      {
        data?.pokemons?.results?.map(pokemonItem => {
          return (
            <Pokemon
              key={ pokemonItem?.id }
              backgroundImageUrl={ pokemonItem?.image! }
              headerContent={ pokemonItem?.name! }
              footerContent={ pokemonItem?.url! }
              pokemonName={ pokemonItem?.name! }
            />
          );
        })
      }
    </>
  );
});
