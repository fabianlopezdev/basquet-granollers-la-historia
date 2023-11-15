import type {
  PostFields,
} from '../types/types';

/*Pages to exclude when generating dynamic routes*/

const IMAGE_FIELDS = [
  'id',
  'source_url',
  'title',
  'alt_text',
  'caption',
  'description',
];



/*API constants fields*/
const POST_FIELDS: PostFields[] = [
  'title',
  'content',
  'link',
  'slug',
  'categories',
  'date',
  'image',
  'id',
];



const CONFIG_PAGES = {
  header: 'capcalera',
  footer: 'peu-de-pagina',
  socialMedia: 'xarxes-socials',
  homePageJoinSection: 'la-familia-cbg',
  homePageTeamsSection: 'equips',
  homePageMainSponsorsWhite: 'patrocinadors-principals-logos-blancs',
  homePageMainSponsorsBlue: 'patrocinadors-principals-logos-blaus',
  homePageOtherSponsors: 'altres-patrocinadors',
};

const TEAM_PAGES = {
  allTeams: 'equips',
  maleTeams: 'equips-masculins',
  femaleTeams: 'equips-femenins',
  school: 'escola-de-basquet',
  wheelchair: 'basquet-en-cadira-de-rodes',
  maleSenior: 'jugadors-equip-senior-masculi',
  femaleSenior: 'jugadores-equip-senior-femeni',
  coaches: 'entrenadors-i-entrenadores',
};

const OPTIONS = ['relats', 'jugadors', 'resultats', 'social']

const SEASONS = [
  "74/75",
  "75/76",
  "76/77",
  "77/78",
  "78/79",
  "79/80",
  "80/81",
  "81/82",
  "82/83",
  "83/84",
  "84/85",
  "85/86",
  "86/87",
  "87/88",
  // "88/89",
  // "89/90",
  // "90/91",
  // "91/92",
  // "92/93",
  // "93/94",
];

console.log(SEASONS.length)
export {
  POST_FIELDS,
  CONFIG_PAGES,
  TEAM_PAGES,
  IMAGE_FIELDS,
  OPTIONS,
  SEASONS,
};

