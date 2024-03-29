import type { PostFields } from "../types/types";

/*Pages to exclude when generating dynamic routes*/

const IMAGE_FIELDS = [
  "id",
  "source_url",
  "title",
  "alt_text",
  "caption",
  "description",
];

/*API constants fields*/
const POST_FIELDS: PostFields[] = [
  "title",
  "content",
  "link",
  "slug",
  "categories",
  "date",
  "image",
  "id",
];

const CONFIG_PAGES = {
  header: "capcalera",
  footer: "peu-de-pagina",
  socialMedia: "xarxes-socials",
  homePageJoinSection: "la-familia-cbg",
  homePageTeamsSection: "equips",
  homePageMainSponsorsWhite: "patrocinadors-principals-logos-blancs",
  homePageMainSponsorsBlue: "patrocinadors-principals-logos-blaus",
  homePageOtherSponsors: "altres-patrocinadors",
};

const TEAM_PAGES = {
  allTeams: "equips",
  maleTeams: "equips-masculins",
  femaleTeams: "equips-femenins",
  school: "escola-de-basquet",
  wheelchair: "basquet-en-cadira-de-rodes",
  maleSenior: "jugadors-equip-senior-masculi",
  femaleSenior: "jugadores-equip-senior-femeni",
  coaches: "entrenadors-i-entrenadores",
};

const OPTIONS = ["relats", "jugadors", "resultats", "social"];

const PLAYERS = [
  {
    name: "Joan 'Chichi' Creus",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
  {
    name: "Claude Riley",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
  {
    name: "Claude Riley",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
  {
    name: "Claude Riley",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
  {
    name: "Claude Riley",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
  {
    name: "Claude Riley",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
  {
    name: "Claude Riley",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
  {
    name: "Claude Riley",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
  {
    name: "Claude Riley",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
  {
    name: "Claude Riley",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
  {
    name: "Claude Riley",
    image: "/player-image.png",
    birth: "18/02/1995",
    nacionality: "Espanya",
    position: 'Base',
    height: "1,76",
    stats: { matches: "585", points: "7000", rebounds: "5000" },
    seasons: "16",
    start: "1983",
    end: "99",
  },
];

const SCORES = [
  {
    date: "27/10/74",
    rival: "C.B. Mollet",
    result1: "58",
    result2: "59",
    home: true,
  },
  {
    date: "03/11/74",
    rival: "C.B. Lliria",
    result1: "65",
    result2: "77",
    home: false,
  },
  {
    date: "10/11/74",
    rival: "C.B. Manresa",
    result1: "76",
    result2: "67",
    home: true,
  },
  {
    date: "17/11/74",
    rival: "C.B. Granada",
    result1: "89",
    result2: "58",
    home: true,
  },
  {
    date: "24/11/74",
    rival: "R.C.D. Espanyol",
    result1: "66",
    result2: "85",
    home: false,
  },
  {
    date: "27/10/74",
    rival: "C.B. Mollet",
    result1: "58",
    result2: "59",
    home: true,
  },
  {
    date: "03/11/74",
    rival: "C.B. Lliria",
    result1: "65",
    result2: "77",
    home: false,
  },
  {
    date: "10/11/74",
    rival: "C.B. Manresa",
    result1: "76",
    result2: "67",
    home: true,
  },
  {
    date: "17/11/74",
    rival: "C.B. Granada",
    result1: "89",
    result2: "58",
    home: true,
  },
  {
    date: "24/11/74",
    rival: "R.C.D. Espanyol",
    result1: "66",
    result2: "85",
    home: false,
  },
  {
    date: "27/10/74",
    rival: "C.B. Mollet",
    result1: "58",
    result2: "59",
    home: true,
  },
  {
    date: "03/11/74",
    rival: "C.B. Lliria",
    result1: "65",
    result2: "77",
    home: false,
  },
  {
    date: "10/11/74",
    rival: "C.B. Manresa",
    result1: "76",
    result2: "67",
    home: true,
  },
  {
    date: "17/11/74",
    rival: "C.B. Granada",
    result1: "89",
    result2: "58",
    home: true,
  },
  {
    date: "24/11/74",
    rival: "R.C.D. Espanyol",
    result1: "66",
    result2: "85",
    home: false,
  },
  {
    date: "27/10/74",
    rival: "C.B. Mollet",
    result1: "58",
    result2: "59",
    home: true,
  },
  {
    date: "03/11/74",
    rival: "C.B. Lliria",
    result1: "65",
    result2: "77",
    home: false,
  },
  {
    date: "10/11/74",
    rival: "C.B. Manresa",
    result1: "76",
    result2: "67",
    home: true,
  },
  {
    date: "17/11/74",
    rival: "C.B. Granada",
    result1: "89",
    result2: "58",
    home: true,
  },
  {
    date: "24/11/74",
    rival: "R.C.D. Espanyol",
    result1: "66",
    result2: "85",
    home: false,
  },
  {
    date: "17/11/74",
    rival: "C.B. Granada",
    result1: "89",
    result2: "58",
    home: true,
  },
  {
    date: "24/11/74",
    rival: "R.C.D. Espanyol",
    result1: "66",
    result2: "85",
    home: false,
  },
];

const SEASON_STANDINGS = [
  {
    team: "C.B. Granollers",
    pj: "22",
    pg: "18",
    pe: "0",
    pp: "4",
    pf: "1,779",
    pc: "1511",
    points: "36",
  },
  {
    team: "La salle Barcelona",
    pj: "22",
    pg: "17",
    pe: "0",
    pp: "5",
    pf: "2,006",
    pc: "1,653",
    points: "34",
  },
  {
    team: "C.B. Mollet",
    pj: "22",
    pg: "14",
    pe: "0",
    pp: "6",
    pf: "1,781",
    pc: "1,664",
    points: "28",
  },
  {
    team: "C.B. Marcol",
    pj: "22",
    pg: "12",
    pe: "2",
    pp: "8",
    pf: "1,793",
    pc: "1,717",
    points: "26",
  },
  {
    team: "C.B. Manresa",
    pj: "22",
    pg: "12",
    pe: "0",
    pp: "10",
    pf: "1,804",
    pc: "1,740",
    points: "24",
  },
  {
    team: "C.B. Granollers",
    pj: "22",
    pg: "18",
    pe: "0",
    pp: "4",
    pf: "1,779",
    pc: "1511",
    points: "36",
  },
  {
    team: "La salle Barcelona",
    pj: "22",
    pg: "17",
    pe: "0",
    pp: "5",
    pf: "2,006",
    pc: "1,653",
    points: "34",
  },
  {
    team: "C.B. Mollet",
    pj: "22",
    pg: "14",
    pe: "0",
    pp: "6",
    pf: "1,781",
    pc: "1,664",
    points: "28",
  },
  {
    team: "C.B. Marcol",
    pj: "22",
    pg: "12",
    pe: "2",
    pp: "8",
    pf: "1,793",
    pc: "1,717",
    points: "26",
  },
  {
    team: "C.B. Manresa",
    pj: "22",
    pg: "12",
    pe: "0",
    pp: "10",
    pf: "1,804",
    pc: "1,740",
    points: "24",
  },
  {
    team: "C.B. Marcol",
    pj: "22",
    pg: "12",
    pe: "2",
    pp: "8",
    pf: "1,793",
    pc: "1,717",
    points: "26",
  },
  {
    team: "C.B. Manresa",
    pj: "22",
    pg: "12",
    pe: "0",
    pp: "10",
    pf: "1,804",
    pc: "1,740",
    points: "24",
  }
];

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
      { src: "./76-77-1.avif", alt: "" },
      { src: "./76-77-2.avif", alt: "" },
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
    img1: {
      colStart: 3,
      colEnd: 5,
      rowStart: 8,
      rowEnd: 11,
    },
    img2: {
      colStart: 4,
      colEnd: 9,
      rowStart: 2,
      rowEnd: 4,
    },
    relatProps: {
      colStart: 8,
      colEnd: 15,
      rowStart: 7,
      rowEnd: 11,
      color: RELATS_PROPS.colors.blue,
      hoverColor: RELATS_PROPS.colors.orange,
      width: RELATS_PROPS.width.short,
    },
  },
  {
    img1: {
      colStart: 1,
      colEnd: 3,
      rowStart: 7,
      rowEnd: 9,
    },
    img2: {
      colStart: 9,
      colEnd: 13,
      rowStart: 3,
      rowEnd: 5,
    },
    relatProps: {
      colStart: 4,
      colEnd: 11,
      rowStart: 8,
      rowEnd: 12,
      color: RELATS_PROPS.colors.orange,
      hoverColor: RELATS_PROPS.colors.blue,
      width: RELATS_PROPS.width.large,
    },
  },
  {
    img1: {
      colStart: 4,
      colEnd: 9,
      rowStart: 2,
      rowEnd: 8,
    },
    img2: {
      colStart: 10,
      colEnd: 14,
      rowStart: 7,
      rowEnd: 11,
    },
    relatProps: {
      colStart: 2,
      colEnd: 7,
      rowStart: 7,
      rowEnd: 11,
      color: RELATS_PROPS.colors.blue,
      hoverColor: RELATS_PROPS.colors.orange,
      width: RELATS_PROPS.width.short,
    },
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
  RELATS_PROPS,
  PLAYERS,
  SCORES,
  SEASON_STANDINGS,
};
