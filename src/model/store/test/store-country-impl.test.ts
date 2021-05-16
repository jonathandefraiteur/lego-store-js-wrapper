import { StoreCountryImpl } from '../store-country-impl';
import { CountryCode } from '../country-code';
import { LanguageCode } from '../language-code';
import { WorldRegion } from '../world-region';

describe(StoreCountryImpl.name, () => {
  test.each([
    [CountryCode.CN, [LanguageCode.ZH], 'zh-cn'],
    [
      CountryCode.BE,
      [LanguageCode.FR, LanguageCode.NL, LanguageCode.EN],
      'fr-be'
    ],
    [CountryCode.RU, [], 'en-ru']
  ])(
    '.getStorePath()',
    (country: CountryCode, languages: LanguageCode[], expected: string) => {
      const store = new StoreCountryImpl(
        WorldRegion.NorthAmerica,
        country,
        languages
      );
      expect(store.getStorePath()).toBe(expected);
    }
  );

  test.each([
    [
      CountryCode.BE,
      [LanguageCode.FR, LanguageCode.NL, LanguageCode.EN],
      LanguageCode.NL,
      'nl-be'
    ],
    [
      CountryCode.FI,
      [LanguageCode.EN, LanguageCode.FI],
      LanguageCode.FI,
      'fi-fi'
    ],
    [CountryCode.CN, [LanguageCode.ZH], LanguageCode.ZH, 'zh-cn'],
    [CountryCode.CN, [LanguageCode.ZH], LanguageCode.EN, 'zh-cn'],
    [CountryCode.RU, [], LanguageCode.RU, 'en-ru']
  ])(
    '.getStorePath(language)',
    (
      country: CountryCode,
      languages: LanguageCode[],
      language: LanguageCode,
      expected: string
    ) => {
      const store = new StoreCountryImpl(
        WorldRegion.NorthAmerica,
        country,
        languages
      );
      expect(store.getStorePath(language)).toBe(expected);
    }
  );
});
