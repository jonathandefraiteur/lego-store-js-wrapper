import { LegoStoreOgImpl } from '../lego-store-og-impl';
import { Options } from '../../model/open-graph/options';
import { LanguageCode } from '../../model/store/language-code';
import { CountryCode } from '../../model/store/country-code';
import { LEGO_CUSTOM_TAGS } from '../../model/open-graph/lego-custom-tags';
import { StoreCountry } from '../../model/store/store-country';
import { LEGO_STORES } from '../../model/store/lego-stores';

/**
 * System under test for LegoStoreOgImpl
 */
class SystemUnderTest extends LegoStoreOgImpl {
  /** */
  public get storeCountry(): StoreCountry {
    return this._storeCountry;
  }
  /** */
  public get language(): LanguageCode {
    return this._language;
  }

  /**
   * @param {string} productId
   * @param {LanguageCode} [language]
   * @param {CountryCode} [country]
   * @return {Options}
   */
  getOptions(
    productId: string,
    language?: LanguageCode | null,
    country?: CountryCode | null
  ): Options {
    return super.getOptions(productId, language, country);
  }
}

describe(`constructor(country?, language?)`, () => {
  test.each([
    [undefined, undefined, LEGO_STORES[CountryCode.DK], LanguageCode.EN],
    [null, null, LEGO_STORES[CountryCode.DK], LanguageCode.EN],
    [CountryCode.FR, undefined, LEGO_STORES[CountryCode.FR], LanguageCode.EN],
    [CountryCode.CN, null, LEGO_STORES[CountryCode.CN], LanguageCode.EN],
    [undefined, LanguageCode.EN, LEGO_STORES[CountryCode.DK], LanguageCode.EN],
    [null, LanguageCode.SV, LEGO_STORES[CountryCode.DK], LanguageCode.SV],
    [
      CountryCode.AE,
      LanguageCode.HU,
      LEGO_STORES[CountryCode.AE],
      LanguageCode.HU
    ]
  ])(
    'new (%p, %p)',
    (
      country: CountryCode | undefined | null,
      language: LanguageCode | undefined | null,
      expectedStore: StoreCountry,
      expectedLanguage: LanguageCode
    ) => {
      const sut = new SystemUnderTest(country, language);
      expect(sut.storeCountry).toBe(expectedStore);
      expect(sut.language).toBe(expectedLanguage);
    }
  );
});

describe('.getOptions(productId, language?, country?)', () => {
  const urlToExpectedOptions = (url = ''): Options => ({
    url: url,
    customMetaTags: LEGO_CUSTOM_TAGS
  });

  describe('.getOptions(productId) - expected URL', () => {
    test.each([
      ['', 'https://www.lego.com/en-dk/product/'],
      ['71044', 'https://www.lego.com/en-dk/product/71044'],
      ['71044-1', 'https://www.lego.com/en-dk/product/71044-1'],
      ['not_an_id', 'https://www.lego.com/en-dk/product/not_an_id']
    ])('.getOptions(%p) - %s', (productId: string, expectedUrl: string) => {
      const sut = new SystemUnderTest();
      const options = sut.getOptions(productId);
      expect(options.url).toBe(expectedUrl);
      expect(options).toStrictEqual(urlToExpectedOptions(expectedUrl));
    });
  });

  describe('.getOptions("0", language?, country?) - expected URL', () => {
    test.each([
      [undefined, undefined, 'https://www.lego.com/en-dk/product/0'],
      [null, null, 'https://www.lego.com/en-dk/product/0'],
      [LanguageCode.DA, undefined, 'https://www.lego.com/da-dk/product/0'],
      [LanguageCode.EN, null, 'https://www.lego.com/en-dk/product/0'],
      [LanguageCode.ZH, undefined, 'https://www.lego.com/da-dk/product/0'],
      [null, CountryCode.FR, 'https://www.lego.com/en-fr/product/0'],
      [undefined, CountryCode.CN, 'https://www.lego.com/zh-cn/product/0'],
      [LanguageCode.FR, CountryCode.BE, 'https://www.lego.com/fr-be/product/0'],
      [LanguageCode.ES, CountryCode.IT, 'https://www.lego.com/it-it/product/0']
    ])(
      '.getOptions("0", %p, %p) - %s',
      (
        language?: LanguageCode | null,
        country?: CountryCode | null,
        expectedUrl?: string
      ) => {
        const sut = new SystemUnderTest();
        const options = sut.getOptions('0', language, country);
        expect(options.url).toBe(expectedUrl);
        expect(options).toStrictEqual(urlToExpectedOptions(expectedUrl));
      }
    );
  });

  describe('new (country?, language?).getOptions("0") - expected URL', () => {
    test.each([
      [undefined, undefined, 'https://www.lego.com/en-dk/product/0'],
      [undefined, LanguageCode.DA, 'https://www.lego.com/da-dk/product/0'],
      [undefined, LanguageCode.ZH, 'https://www.lego.com/da-dk/product/0'],
      [CountryCode.JP, undefined, 'https://www.lego.com/ja-jp/product/0'],
      [CountryCode.BE, undefined, 'https://www.lego.com/en-be/product/0'],
      [CountryCode.BE, LanguageCode.FR, 'https://www.lego.com/fr-be/product/0'],
      [CountryCode.BE, LanguageCode.NL, 'https://www.lego.com/nl-be/product/0'],
      [CountryCode.BE, LanguageCode.EN, 'https://www.lego.com/en-be/product/0'],
      [CountryCode.BE, LanguageCode.JA, 'https://www.lego.com/fr-be/product/0']
    ])(
      'new (%p, %p).getOptions("0") - %s',
      (
        sutCountry?: CountryCode,
        sutLanguage?: LanguageCode,
        expectedUrl?: string
      ) => {
        const sut = new SystemUnderTest(sutCountry, sutLanguage);
        const options = sut.getOptions('0');
        expect(options.url).toBe(expectedUrl);
        expect(options).toStrictEqual(urlToExpectedOptions(expectedUrl));
      }
    );
  });

  describe('new (country?, language?).getOptions("0", language?, country?) - expected URL', () => {
    test.each([
      [
        CountryCode.BE,
        undefined,
        undefined,
        undefined,
        'https://www.lego.com/en-be/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.NL,
        undefined,
        undefined,
        'https://www.lego.com/nl-be/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.JA,
        undefined,
        undefined,
        'https://www.lego.com/fr-be/product/0'
      ],
      [
        CountryCode.BE,
        undefined,
        LanguageCode.NL,
        undefined,
        'https://www.lego.com/nl-be/product/0'
      ],
      [
        CountryCode.BE,
        undefined,
        LanguageCode.JA,
        undefined,
        'https://www.lego.com/fr-be/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.FR,
        LanguageCode.NL,
        undefined,
        'https://www.lego.com/nl-be/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.JA,
        LanguageCode.NL,
        undefined,
        'https://www.lego.com/nl-be/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.NL,
        LanguageCode.JA,
        undefined,
        'https://www.lego.com/fr-be/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.JA,
        LanguageCode.RU,
        undefined,
        'https://www.lego.com/fr-be/product/0'
      ],
      [
        CountryCode.BE,
        undefined,
        undefined,
        CountryCode.JP,
        'https://www.lego.com/ja-jp/product/0'
      ],
      [
        CountryCode.BE,
        undefined,
        undefined,
        CountryCode.CH,
        'https://www.lego.com/en-ch/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.FR,
        undefined,
        CountryCode.CH,
        'https://www.lego.com/fr-ch/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.JA,
        undefined,
        CountryCode.CH,
        'https://www.lego.com/de-ch/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.DE,
        undefined,
        undefined,
        'https://www.lego.com/fr-be/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.DE,
        undefined,
        CountryCode.CH,
        'https://www.lego.com/de-ch/product/0'
      ],
      [
        CountryCode.BE,
        undefined,
        LanguageCode.DE,
        CountryCode.CH,
        'https://www.lego.com/de-ch/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.NL,
        LanguageCode.DE,
        CountryCode.CH,
        'https://www.lego.com/de-ch/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.FR,
        LanguageCode.NL,
        CountryCode.CH,
        'https://www.lego.com/de-ch/product/0'
      ],
      [
        CountryCode.BE,
        LanguageCode.JA,
        LanguageCode.RU,
        CountryCode.CH,
        'https://www.lego.com/de-ch/product/0'
      ]
    ])(
      'new (%p, %p).getOptions(%p, %p) - %s',
      (
        sutCountry?: CountryCode,
        sutLanguage?: LanguageCode,
        language?: LanguageCode,
        country?: CountryCode,
        expectedUrl?: string
      ) => {
        const sut = new SystemUnderTest(sutCountry, sutLanguage);
        const options = sut.getOptions('0', language, country);
        expect(options.url).toBe(expectedUrl);
        expect(options).toStrictEqual(urlToExpectedOptions(expectedUrl));
      }
    );
  });
});
