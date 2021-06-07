import { Options as BaseOptions } from 'open-graph-scraper';
import { CustomMetaTag } from './custom-meta-tag';

export interface Options extends BaseOptions {
  customMetaTags?: CustomMetaTag[];
}
