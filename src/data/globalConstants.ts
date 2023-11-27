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

const SEASONS_INFO = [
  {
    name: "74/75",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    images: [
      { src: "./74-75-2.avif", alt: "" },
      { src: "./74-75-1.avif", alt: "" },
    ],
  },
  {
    name: "75/76",
    relat:
      "ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    images: [
      { src: "./75-76-2.avif", alt: "" },
      { src: "./75-76-1.avif", alt: "" },
    ],
  },
  {
    name: "76/77",
    relat:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    images: [
      { src: "./76-77-2.avif", alt: "" },
      { src: "./76-77-1.avif", alt: "" },
    ],
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
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta nisl quis dui tristique, id mattis felis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
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

const RELATS_PROPS = {
  colors: {
    blue: "rgba(8, 67, 149, 0.90)",
    orange: "rgba(251, 115, 38, 0.84)",
  },
  width: { short: 19.5, large: 38.625 },
};

const SEASONS_LAYOUT = [
  {
    imgLeft: 12.5,
    imgTop: 32,
    img2Left: 24,
    img2Top: 5,
    relatLeft: 48.5,
    relatTop: 24,
    relatColor: RELATS_PROPS.colors.blue,
    relatWidth: RELATS_PROPS.width.short,
  },
  {
    imgLeft: 0,
    imgTop: 30,
    img2Left: 61,
    img2Top: 5,
    relatLeft: 24.5,
    relatTop: 40,
    relatColor: RELATS_PROPS.colors.orange,
    relatWidth: RELATS_PROPS.width.large,
  },
  {
    imgLeft: 20,
    imgTop: 5,
    img2Left: 65.06,
    img2Top: 40,
    relatLeft: 8,
    relatTop: 40,
    relatColor: RELATS_PROPS.colors.blue,
    relatWidth: RELATS_PROPS.width.short,
  },
];

export {
  POST_FIELDS,
  CONFIG_PAGES,
  TEAM_PAGES,
  IMAGE_FIELDS,
  OPTIONS,
  SEASONS_INFO,
  SEASONS_LAYOUT,
  RELATS_PROPS
};

