interface project {
  title: string,
  stack: string[],
  description: string,
  logo: string,
  printsURL: string[],
  url: string,
  repo: string,
}

export const projects: project[] = [
  {
    title: "Cia do Fusca",
    stack: ["svelte", "javascript","tailwindcss", "pocketbase"],
    description: "É um website desenvolvido para loja de carros antigos Cia do Fusca, utilizando as tecnologias mais inovadoras do mercado, afim de melhor a experiência online do cliente da loja.",
    logo: "ciadofusca.png",
    printsURL: ["ciadofusca-print-001", "ciadofusca-print-002", "ciadofusca-print-003"],
    url: "https://ciadofusca.com.br",
    repo: "https://github.com/thiagomagano/ciadofusca"
  },
  {
    title: "Pokémon Team Builder",
    stack: ["react","javascript", "nodejs", "prisma"],
    description: "App realizado para testar os conhecimentos em React, Este app é um construtor de equipes pokemon, o título já é bem explicativo stuck_out_tongue_closed_eyes. O objetivo principal é selecionar até 6 pokémons para montar um time ideal, explorando os pontos fortes e fracos dos pokémons com base em seus tipos. Você poderá salvar suas equipes e depois consultá-las a hora que quiser.",
    logo: "pokemon-team-builder-logo.png",
    printsURL: ["pokemontb-print-001", "pokemontb-print-002", "pokemontb-print-003"],
    url: "https://pokemonteambuilder.vercel.app/",
    repo: "pokemon-team-builder-frontend"
  },
]
