

export async function getPokemonById(id: number | string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar Pokémon');
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    types: data.types
      .map((item: any) => item.type.name)
      .join(', '),
    image: data.sprites.front_default,
  };
}
