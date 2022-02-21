import GameClass from './template';
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '💀 Gulag: 1928-1953',
	shortName: '💀 Gulag',
	banner: 'img/games/banners/gulag_banner.png',
	landingBanner: '',
	logo: 'img/games/logos/gulagUSSR_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#E73C20',
	id: 'gulag-ussr',
	price: '',
	categories: [categoriesGames[1], categoriesGames[2], categoriesGames[5], categoriesGames[6]]
};
game.roles = {
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/banners/persons_banner.png',
	characters: [
		{
			name: 'Lydia Korneyevna Chukovskaya',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/chukovskaya_person.png'
		},
		{
			name: 'Yury Osipovich Dombrovsky',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/dombrovsky_person.png'
		},
		{
			name: 'Nikolay Stepanovich Gumilyov',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/gumilyov_person.png'
		},
		{
			name: 'Daniil Ivanovich Kharms',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/kharms_person.png'
		},
		{
			name: 'Boris Petrovich Kornilov',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/kornilov_person.png'
		},
		{
			name: 'Osip Emilyevich Mandelstam',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/mandelstam_person.png'
		},
		{
			name: 'Boris Andreyevich Pilnyak',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/pilnyak_person.png'
		},
		{
			name: 'Yaroslav Vasilevich Smelyakov',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/smelyakov_person.png'
		},
		{
			name: 'Aleksandr Isayevich Solzhenitsyn',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/solzhenitsyn_person.png'
		},
		{
			name: 'Varlam Tikhonovich Shalamov',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/varlamov_person.png'
		},
		{
			name: 'Nikolay Alekseyevich Zabolotsky',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/zabolotsky_person.png'
		},
		{
			name: '',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: ''
		},
		{
			name: '',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: ''
		},
		{
			name: '',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: ''
		},
		{
			name: '',
			bgColor: '#e73c20',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: ''
		}
	]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'gulagUSSR'
	},
	goal: ''
};


export default game;
// console.log(game)
