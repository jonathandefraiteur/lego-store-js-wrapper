import { CustomMetaTag } from './custom-meta-tag';

export const LEGO_CUSTOM_TAGS: CustomMetaTag[] = [
  { property: 'product:brand', fieldName: 'productBrand' },
  { property: 'product:availability', fieldName: 'productAvailability' },
  { property: 'product:condition', fieldName: 'productCondition' },
  { property: 'product:price:amount', fieldName: 'productPriceAmount' },
  { property: 'product:price:currency', fieldName: 'productPriceCurrency' },
  { property: 'product:retailer_item_id', fieldName: 'productId' },
  { property: 'product:local', fieldName: 'productLocal' }
];
