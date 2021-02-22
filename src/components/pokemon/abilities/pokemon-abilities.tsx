import React, { memo } from "react";
import { useGetPokemonByNameQuery } from "../__generated__/queries";


export const PokemonAbilities = memo(({ name }: { name: string; }) => {

	const { data, loading } = useGetPokemonByNameQuery({ variables: { name: name! } });

	if (loading && !data?.pokemon) {
		return <>Loading</>;
	}
	return (
		<ul style={ { backgroundColor: "white" } }>
			{ data?.pokemon?.abilities?.map((item, index) => {
				return <li key={ index }>{ item?.ability?.name }</li>;
			}) }
		</ul>
	);
});
