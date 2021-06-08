import { LegoStoreOgImpl } from '../lego-store-og-impl';
import { Options } from '../../model/open-graph/options';
import { LanguageCode } from '../../model/store/language-code';
import { CountryCode } from '../../model/store/country-code';
import { LEGO_CUSTOM_TAGS } from '../../model/open-graph/lego-custom-tags';

/**
 * Subject of test for LegoStoreOgImpl
 */
class SubjectOfTest extends LegoStoreOgImpl {
  /**
   * @param {string} productId
   * @param {LanguageCode} [language]
   * @param {CountryCode} [country]
   * @return {Options}
   */
  getOptions(
    productId: string,
    language?: LanguageCode,
    country?: CountryCode
  ): Options {
    return super.getOptions(productId, language, country);
  }
}

describe('LegoStoreOgImpl', () => {
  let sut: SubjectOfTest;

  beforeEach(() => {
    sut = new SubjectOfTest();
  });

  test.each([
    // Product ID
    [
      new SubjectOfTest(),
      '71044',
      undefined,
      undefined,
      {
        url: 'https://www.lego.com/en-dk/product/71044',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      new SubjectOfTest(),
      '71044',
      null,
      null,
      {
        url: 'https://www.lego.com/en-dk/product/71044',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      new SubjectOfTest(),
      '71044-1',
      undefined,
      undefined,
      {
        url: 'https://www.lego.com/en-dk/product/71044-1',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      new SubjectOfTest(),
      'not_an_id',
      undefined,
      undefined,
      {
        url: 'https://www.lego.com/en-dk/product/not_an_id',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    // Language
    [
      new SubjectOfTest(),
      '12345',
      LanguageCode.DA,
      undefined,
      {
        url: 'https://www.lego.com/da-dk/product/12345',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      new SubjectOfTest(),
      '12345',
      LanguageCode.FR,
      undefined,
      {
        url: 'https://www.lego.com/da-dk/product/12345',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    // Country
    [
      new SubjectOfTest(),
      '12345',
      undefined,
      CountryCode.FR,
      {
        url: 'https://www.lego.com/en-fr/product/12345',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      new SubjectOfTest(),
      '12345',
      undefined,
      CountryCode.US,
      {
        url: 'https://www.lego.com/en-us/product/12345',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      new SubjectOfTest(),
      '12345',
      undefined,
      CountryCode.CN,
      {
        url: 'https://www.lego.com/zh-cn/product/12345',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    // Language + Country (TODO)
    [
      new SubjectOfTest(),
      '12345',
      undefined,
      CountryCode.CN,
      {
        url: 'https://www.lego.com/zh-cn/product/12345',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    /*
     * TODO: Continue to test
     *  - with setting up SubjectOfTest
     *  - split tests by argument usages
     */
    [
      new SubjectOfTest(),
      '71044',
      LanguageCode.FR,
      CountryCode.FR,
      'fr-fr',
      {
        url: 'https://www.lego.com/fr-fr/product/71044',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      '42099',
      LanguageCode.FR,
      CountryCode.FR,
      'en-ca',
      {
        url: 'https://www.lego.com/en-ca/product/42099',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      'not_a_number',
      LanguageCode.FR,
      CountryCode.FR,
      'any',
      {
        url: 'https://www.lego.com/any/product/not_a_number',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      '12345',
      LanguageCode.FR,
      CountryCode.FR,
      'frfrf',
      {
        url: 'https://www.lego.com/en-no/product/12345',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ]
  ])(
    '.getOptions(%p, %p)',
    (
      sut: SubjectOfTest,
      productId: string,
      language?: LanguageCode,
      country?: CountryCode,
      expected: Options
    ) => {
      const options = sut.getOptions(storeCountry, productId);
      expect(options).toStrictEqual(expected);
    }
  );
});
