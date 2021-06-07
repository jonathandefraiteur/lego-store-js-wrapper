import { LegoStoreOgImpl, testOGS } from '../lego-store-og';
import { StoreCountry } from '../../model/store/store-country';
import { Options } from '../../model/open-graph/options';
import { StoreCountryImpl } from '../../model/store/store-country-impl';
import { WorldRegion } from '../../model/store/world-region';
import { LanguageCode } from '../../model/store/language-code';
import { CountryCode } from '../../model/store/country-code';
import { LEGO_CUSTOM_TAGS } from '../../model/open-graph/lego-custom-tags';

/**
 * Subject of test for LegoStoreOgImpl
 */
class SubjectOfTest extends LegoStoreOgImpl {
  /**
   * @param {StoreCountry | string} storeCountry
   * @param {string} productId
   * @return {Options}
   */
  public getOptions(
    storeCountry: StoreCountry | string,
    productId: string
  ): Options {
    return super.getOptions(storeCountry, productId);
  }
}

describe('temp tests', () => {
  test('testOGS()', () => {
    return testOGS().then((res) => {
      expect(res.error).toBe(false);
    });
  });
});

describe('LegoStoreOgImpl', () => {
  let sut: SubjectOfTest;

  beforeEach(() => {
    sut = new SubjectOfTest();
  });

  test.each([
    [
      'fr-fr',
      '71044',
      {
        url: 'https://www.lego.com/fr-fr/product/71044',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      'en-ca',
      '42099',
      {
        url: 'https://www.lego.com/en-ca/product/42099',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      'any',
      'not_a_number',
      {
        url: 'https://www.lego.com/any/product/not_a_number',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ],
    [
      new StoreCountryImpl(WorldRegion.Europe, CountryCode.NO, [
        LanguageCode.EN
      ]),
      '12345',
      {
        url: 'https://www.lego.com/en-no/product/12345',
        customMetaTags: LEGO_CUSTOM_TAGS
      }
    ]
  ])(
    '.getOptions(%p, %p)',
    (
      storeCountry: StoreCountry | string,
      productId: string,
      expected: Record<string, unknown>
    ) => {
      const options = sut.getOptions(storeCountry, productId);
      expect(options).toStrictEqual(expected);
    }
  );
});
