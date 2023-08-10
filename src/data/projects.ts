interface project {
	title: string;
	stack: string[];
	subtitle: string;
	description: string;
	logo: string;
	printsURL: string[];
	url: string;
	repo: string;
}

export const projects: project[] = [
	{
		title: 'Cia do Fusca',
		stack: ['svelte', 'javascript', 'tailwindcss', 'pocketbase'],
		subtitle: 'Tu já andou de fusca? Se ainda não, um dia vai andar.',
		description:
			'Nesse projeto utilizei as tecnologias mais inovadoras do mercado para criar o website da loja de carros clássicos Cia do Fusca.',
		logo: 'ciadofusca.png',
		printsURL: ['ciadofusca-print-001', 'ciadofusca-print-002', 'ciadofusca-print-003'],
		url: 'https://ciadofusca.com.br',
		repo: 'https://github.com/thiagomagano/ciadofusca'
	},
	{
		title: 'Pokémon Team Builder',
		stack: ['react', 'javascript', 'nodejs', 'prisma'],
		subtitle: 'Quem é este pokémon?',
		description:
			'Nesse projeto eu precisava testar minhas habilidades em React e Nodejs, então peguei uma coisa divertida de construir e criei um aplicativo para gerenciar times de pokemons, por que não né?',
		logo: 'pokemon-team-builder-logo.png',
		printsURL: ['pokemontb-print-001', 'pokemontb-print-002', 'pokemontb-print-003'],
		url: 'https://pokemonteambuilder.vercel.app/',
		repo: 'pokemon-team-builder-frontend'
	}
];
