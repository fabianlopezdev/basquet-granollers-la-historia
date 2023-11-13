//Import constants
import {
  CONFIG_PAGES,
} from './globalConstants';

//Import apiFunctions
import {
  getImagesBySlug,
  getPageBySlug,
} from '@services/apiFunctions';

//Import functions
import {
  extractBottomFooterInfo,
  extractTopFooterInfo,
} from "@utils/helperFunctions";


export const [
  socialMediaInfo,
  footerData,
] = await Promise.all([
  getImagesBySlug(CONFIG_PAGES.socialMedia),
  getPageBySlug(CONFIG_PAGES.footer, ['content']),
]);

const {
  content: { rendered: footerContent },
} = footerData[0];

const topFooterContent = extractTopFooterInfo(footerContent);

export const { generalLinks, fixedLinks } = topFooterContent;



export const bottomFooterLinks = extractBottomFooterInfo(footerContent);

  