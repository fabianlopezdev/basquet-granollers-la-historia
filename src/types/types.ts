// // import type { Url } from 'url';

// export interface ConfigureOptions {
//   BASE_URL: string;
// }
// export type PostsWithId = `${'posts'}/${number}`;
// export type PagesWithId = `${'pages'}/${number}`;

// export type MediaWithId = `${'media'}/${number}`;

// export type CommonPagesAndPostsFields =
//   | 'author'
//   | 'comment_status'
//   | 'content'
//   | 'date'
//   | 'date_gmt'
//   | 'excerpt'
//   | 'featured_media'
//   | 'guid'
//   | 'id'
//   | 'image'
//   | 'link'
//   | 'meta'
//   | 'modified'
//   | 'modified_gmt'
//   | 'ping_status'
//   | 'slug'
//   | 'status'
//   | 'template'
//   | 'title'
//   | 'type';

// export type PostSpecificFields = 'categories' | 'format' | 'sticky' | 'tags';

// export type PageSpecificFields =
//   | 'generated_slug'
//   | 'menu_order'
//   | 'password'
//   | 'permalink_template';

// export type PageFields = CommonPagesAndPostsFields | PageSpecificFields;
// export type PostFields = CommonPagesAndPostsFields | PostSpecificFields;

// export type CategoryFields =
//   | 'count'
//   | 'description'
//   | 'id'
//   | 'link'
//   | 'meta'
//   | 'parent'
//   | 'name'
//   | 'slug'
//   | 'taxonomy';
// type IdAutosaves = `${number}/autosaves`;
// type PagesRevisionsWithID = `${'pages'}/${number}/revisions`;
// type PostsRevisionsWithID = `${'posts'}/${number}/revisions`;

// export type Endpoints =
//   | 'block-directory/search'
//   | 'block-rendered'
//   | IdAutosaves
//   | 'blocks'
//   | 'block-types'
//   | 'categories'
//   | 'comments'
//   | 'media'
//   | 'pages'
//   | PagesRevisionsWithID
//   | 'plugins'
//   | PostsRevisionsWithID
//   | 'posts'
//   | 'statuses'
//   | 'types'
//   | 'search'
//   | 'settings'
//   | 'tags'
//   | 'taxonomies'
//   | 'themes'
//   | 'users';

// export interface GlobalParams {
//   _fields?: string;
//   _embed?: string;
//   _method?: string;
//   _envelope?: string;
//   _jsonp?: string;
// }

// export interface PostParams extends GlobalParams {
//   context?: 'view' | 'embed' | 'edit';
//   page?: number;
//   per_page?: number;
//   search?: string;
//   after?: string;
//   author?: number | number[];
//   author_exclude?: number | number[];
//   before?: string;
//   parent?: number | number[];
//   exclude?: number | number[];
//   include?: number | number[];
//   offset?: number;
//   order?: 'asc' | 'desc';
//   orderby?:
//     | 'author'
//     | 'date'
//     | 'id'
//     | 'include'
//     | 'modified'
//     | 'parent'
//     | 'relevance'
//     | 'slug'
//     | 'include_slugs'
//     | 'title';
//   slug?: string | string[];
//   status?: string | string[];
//   categories?: number | number[] | string;
//   categories_exclude?: number | number[];
//   tags?: number | number[];
//   tags_exclude?: number | number[];
//   sticky?: boolean;
//   tax_relation?: 'AND' | 'OR';
// }

// // Type declarations

// export type Post = {
//   author: number;
//   categories: number[];
//   comment_status: string;
//   content: { rendered: string };
//   date: string;
//   date_gmt: string | null | Date;
//   excerpt: { rendered: string };
//   featured_media: number;
//   format: string;
//   guid: string;
//   id: { rendered: string; raw: string };
//   image: { url: string; title: string; alt: string }; //Note that this is not returned by the Wordpress API, this is used in addImageToPost function in helperFunctions, to add the link of a Wordpress post in the post returned by the API.
//   link: string | Url;
//   meta: Record<string, string | number | boolean | any[] | Record<string, any>>;
//   modified: string | Date;
//   modified_gmt: string | Date;
//   ping_status: string;
//   slug: string;
//   status: string;
//   sticky: string;
//   tags: number[];
//   template: string;
//   title: { rendered: string };
//   type: string;
// };

// export type Category = {
//   count: number;
//   description: string;
//   id: number;
//   link: string;
//   meta: Record<string, string | number | boolean | any[] | Record<string, any>>;
//   name: string;
//   slug: string;
//   taxonomy: string;
// };

// // A TypeScript type for a WordPress page
// export type Page = {
//   author: number;
//   categories?: number[]; //Note that this is not returned by the Wordpress API, this is used in detectRedirects function in helperFunctions, to convert a page into a post.
//   comment_status: 'open' | 'closed';
//   content: {
//     rendered: string;
//     raw?: string;
//     protected?: boolean;
//   };
//   date: string | null;
//   date_gmt: string | null;
//   excerpt: {
//     rendered: string;
//     raw?: string;
//     protected?: boolean;
//   };
//   featured_media: number;
//   generated_slug: string;
//   guid: {
//     rendered: string;
//   };
//   id: number;
//   image: { url: string; title: string; alt: string }; //Note that this is not returned by the Wordpress API, this is used in addImageToPost function in helperFunctions, to add the link of a Wordpress post in the post returned by the API.
//   link: string;
//   menu_order: number;
//   meta: Record<string, any>;
//   modified: string;
//   modified_gmt: string;
//   parent: number;
//   password: string;
//   permalink_template: string;
//   ping_status: 'open' | 'closed';
//   slug: string;
//   status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
//   template: string;
//   title: {
//     rendered: string;
//     raw?: string;
//   };
//   type: 'page';
// };

// export type Media = {
//   alt_text: string;
//   author: number;
//   caption: { rendered: string };
//   comment_status: 'open' | 'closed';
//   date: string | null;
//   date_gmt: string | null;
//   description: { rendered: string };
//   featured_media: number;
//   generated_slug: string;
//   guid: {
//     rendered: string;
//   };
//   id: number;
//   link: string;
//   media_details: {
//     width: number;
//     height: number;
//     file: string;
//     sizes: Record<string, any>;
//     image_meta: Record<string, any>;
//   };
//   media_type: string;
//   meta: Record<string, any>;
//   mime_type: string;
//   missing_image_sizes: string[];
//   modified: string;
//   modified_gmt: string;
//   permalink_template: string;
//   ping_status: 'open' | 'closed';
//   slug: string;
//   source_url: string;
//   status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
//   template: string;
//   title: {
//     rendered: string;
//     raw?: string;
//   };
//   type: 'page';
// };

// export interface ExtendedMedia extends Media {
//   source_url: string;
//   title: {
//     rendered: string;
//   };
//   caption: {
//     rendered: string;
//   };
// }

// export type CustomEndpoint = 'media-by-url';

// export type CustomImage = {
//   ID?: number;
//   id?: number;
//   url: string;
//   title: string;
//   alt: string;
//   caption: string;
// };

// export class FetchError extends Error {
//   status: number;
//   url: string;

//   constructor(message: string, status: number, url: string) {
//     super(message);
//     this.status = status;
//     this.url = url;
//   }
// }

// export interface PostsQueryCache {
//   [key: string]: Post[];
// }

// type LinkContent = {
//   title: string;
//   content: { name: string; link: string }[]; // assuming the content array contains strings
// };

// export type FixedLink = {
//   name: string;
//   link: string;
// };

// export type TopFooterLinks = {
//   generalLinks: LinkContent[];
//   fixedLinks: FixedLink[];
// };

