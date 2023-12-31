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

export {
  POST_FIELDS,
  CONFIG_PAGES,
  TEAM_PAGES,
  IMAGE_FIELDS,
};

