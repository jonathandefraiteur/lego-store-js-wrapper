import { StoreCountryImpl } from '../store-country-impl';
import { CountryCode } from '../country-code';
import { LanguageCode } from '../language-code';
import { WorldRegion } from '../world-region';

describe(`.getStorePath(language?)`, () => {
  describe('new (region, country, languages).getStorePath() - expected Lang-Country', () => {
    test.each([
      [CountryCode.CN, [LanguageCode.ZH], 'zh-cn'],
      [
        CountryCode.BE,
        [LanguageCode.FR, LanguageCode.NL, LanguageCode.EN],
        'fr-be'
      ],
      [CountryCode.RU, [], 'en-ru']
    ])(
      'new (Europe, %p, %p).getStorePath() = %p',
      (country: CountryCode, languages: LanguageCode[], expected: string) => {
        const store = new StoreCountryImpl(
          WorldRegion.Europe,
          country,
          languages
        );
        expect(store.getStorePath()).toBe(expected);
      }
    );
  });

  describe('new (region, country, languages).getStorePath(language) - expected Lang-Country', () => {
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
      'new (Europe, %p, %p).getStorePath(%p) = %p',
      (
        country: CountryCode,
        languages: LanguageCode[],
        language: LanguageCode,
        expected: string
      ) => {
        const store = new StoreCountryImpl(
          WorldRegion.Europe,
          country,
          languages
        );
        expect(store.getStorePath(language)).toBe(expected);
      }
    );
  });
});
