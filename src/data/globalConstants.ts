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
  {
    name: "74/75",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "75/76",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "76/77",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "77/78",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "78/79",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "79/80",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "80/81",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "82/83",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "83/84",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "84/85",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "85/86",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "86/87",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "87/88",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    name: "88/89",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  
];

export {
  POST_FIELDS,
  CONFIG_PAGES,
  TEAM_PAGES,
  IMAGE_FIELDS,
  OPTIONS,
  SEASONS,
};

