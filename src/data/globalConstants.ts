// import type { PostFields } from "../types/types";

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
// const POST_FIELDS: PostFields[] = [
//   "title",
//   "content",
//   "link",
//   "slug",
//   "categories",
//   "date",
//   "image",
//   "id",
// ];

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



const RELATS_PROPS = {
  colors: {
    blue: "rgba(8, 67, 149, 0.90)",
    orange: "rgba(251, 115, 38, 0.84)",
  },
  width: { short: 19.5, large: 38.625 },
};

const SEASONS_LAYOUT = [
  {
    firstLayout: true,
    img2: {
      colStart: 13,
      colEnd: 24,
      rowStart: 39,
      rowEnd: 50,
      colStartShortHg: 14,
      colEndShortHg: 24,
      rowStartShortHg: 41,
      rowEndShortHg: 50,
      colStartMobile: 1,
      colEndMobile: 9,
      rowStartMobile: 16,
      rowEndMobile: 20,
    },
    img1: {
      colStart: 22,
      colEnd: 45,
      rowStart: 4,
      rowEnd: 34,
      colStartShortHg: 21,
      colEndShortHg: 38,
      rowStartShortHg: 5,
      rowEndShortHg: 34,
      colStartMobile: 4,
      colEndMobile: 22,
      rowStartMobile: 2,
      rowEndMobile: 4,
    },
    relatProps: {
      colStart: 44,
      colEnd: 57,
      rowStart: 33,
      rowEnd: 50,
      colStartMobile: 10,
      colEndMobile: 24,
      rowStartMobile: 7,
      rowEndMobile: 9,
      color: RELATS_PROPS.colors.blue,
      hoverColor: RELATS_PROPS.colors.orange,
      width: RELATS_PROPS.width.short,
    },
  },
  {
    secondLayout: true,
    img1: {
      colStart: 20,
      colEnd: 36,
      rowStart: 4,
      rowEnd: 50,
      colStartShortHg: 24,
      colEndShortHg: 37,
      rowStartShortHg: 3,
      rowEndShortHg: 27,
      colStartMobile: 16,
      colEndMobile: 24,
      rowStartMobile: 4,
      rowEndMobile: 24,
    },
    img2: {
      colStart: 56,
      colEnd: 75,
      rowStart: 33,
      rowEnd: 66,
      colStartShortHg: 57,
      colEndShortHg: 74,
      rowStartShortHg: 38,
      rowEndShortHg: 66,
      colStartMobile: 11,
      colEndMobile: 25,
      rowStartMobile: 11,
      rowEndMobile: 24,
    },
    relatProps: {
      colStart: 11,
      colEnd: 29,
      rowStart: 40,
      rowEnd: 59,
      colStartMobile: 1,
      colEndMobile: 5,
      rowStartMobile: 1,
      rowEndMobile: 15,
      color: RELATS_PROPS.colors.orange,
      hoverColor: RELATS_PROPS.colors.blue,
      width: RELATS_PROPS.width.large,
    },
  },
];

export {
  // POST_FIELDS,
  CONFIG_PAGES,
  TEAM_PAGES,
  IMAGE_FIELDS,
  OPTIONS,
  SEASONS_LAYOUT,
  RELATS_PROPS,
};
