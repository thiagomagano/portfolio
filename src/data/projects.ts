export interface Project {
	title: string;
	stack: string[];
	subtitle: string;
	description: string;
	logo: string;
	printsURL: string[];
	url: string;
	repo: string;
	slug: string;
}

export const projects: Project[] = [
	{
		title: 'Cia do Fusca',
		stack: ['javascript', 'svelte', 'tailwindcss', 'pocketbase', 'amazonaws'],
		subtitle: 'Tu já andou de fusca?',
		description:
			'Nesse projeto utilizei as tecnologias mais inovadoras do mercado para criar o website da loja de carros clássicos Cia do Fusca.',
		logo: 'ciadofusca.png',
		printsURL: ['ciadofusca-print-001', 'ciadofusca-print-002', 'ciadofusca-print-003'],
		url: 'https://ciadofusca.com.br',
		repo: 'https://github.com/thiagomagano/ciadofusca',
		slug: 'ciadofusca'
	},
	{
		title: 'Pokémon Team Builder',
		stack: ['react', 'tsnode', 'prisma', 'postgresql', 'vercel'],
		subtitle: 'Quem é este pokémon?',
		description:
			'Eu precisava testar minhas habilidades em React e Nodejs, então peguei uma coisa divertida de construir e criei um aplicativo para gerenciar times de pokémon.',
		logo: 'pokemon.png',
		printsURL: ['pokemontb-print-001', 'pokemontb-print-002', 'pokemontb-print-003'],
		url: 'https://pokemonteambuilder.vercel.app/',
		repo: 'https://github.com/thiagomagano/pokemon-team-builder-frontend',
		slug: 'pokemon-team-builder'
	}
];
