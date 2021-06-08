import { WorldRegion } from './world-region';
import { CountryCode } from './country-code';
import { LanguageCode } from './language-code';
import { StoreCountry } from './store-country';
import { StoreCountryImpl } from './store-country-impl';

export const LEGO_STORES: Record<CountryCode, StoreCountry> = {
  [CountryCode.CA]: new StoreCountryImpl(
    WorldRegion.NorthAmerica,
    CountryCode.CA,
    [LanguageCode.EN, LanguageCode.FR],
    'Canada'
  ),
  [CountryCode.MX]: new StoreCountryImpl(
    WorldRegion.NorthAmerica,
    CountryCode.MX,
    [LanguageCode.ES, LanguageCode.EN],
    'Mexico'
  ),
  [CountryCode.US]: new StoreCountryImpl(
    WorldRegion.NorthAmerica,
    CountryCode.US,
    [LanguageCode.EN],
    'United States'
  ),
  [CountryCode.BR]: new StoreCountryImpl(
    WorldRegion.SouthAmerica,
    CountryCode.BR,
    [LanguageCode.PT],
    'Brasil'
  ),
  [CountryCode.AR]: new StoreCountryImpl(
    WorldRegion.SouthAmerica,
    CountryCode.AR,
    [LanguageCode.ES],
    'Latinoamerica'
  ),
  [CountryCode.BE]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.BE,
    [LanguageCode.FR, LanguageCode.NL, LanguageCode.EN],
    'Belgium'
  ),
  [CountryCode.CZ]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.CZ,
    [LanguageCode.CS, LanguageCode.EN],
    'Czech Republic'
  ),
  [CountryCode.DK]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.DK,
    [LanguageCode.DA, LanguageCode.EN],
    'Denmark'
  ),
  [CountryCode.DE]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.DE,
    [LanguageCode.DE, LanguageCode.EN],
    'Germany'
  ),
  [CountryCode.EE]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.EE,
    [LanguageCode.ET, LanguageCode.EN],
    'Estonia'
  ),
  [CountryCode.ES]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.ES,
    [LanguageCode.ES, LanguageCode.EN],
    'Spain'
  ),
  [CountryCode.FI]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.FI,
    [LanguageCode.EN, LanguageCode.FI],
    'Finland'
  ),
  [CountryCode.FR]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.FR,
    [LanguageCode.FR, LanguageCode.EN],
    'France'
  ),
  [CountryCode.GR]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.GR,
    [LanguageCode.EN],
    'Greece'
  ),
  [CountryCode.HU]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.HU,
    [LanguageCode.EN, LanguageCode.HU],
    'Hungary'
  ),
  [CountryCode.IE]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.IE,
    [LanguageCode.EN],
    'Ireland'
  ),
  [CountryCode.IT]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.IT,
    [LanguageCode.IT, LanguageCode.EN],
    'Italy'
  ),
  [CountryCode.LV]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.LV,
    [LanguageCode.LV, LanguageCode.EN],
    'Latvia'
  ),
  [CountryCode.LT]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.LT,
    [LanguageCode.LT, LanguageCode.EN],
    'Lithuania'
  ),
  [CountryCode.LU]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.LU,
    [LanguageCode.FR, LanguageCode.DE, LanguageCode.EN],
    'Luxemburg'
  ),
  [CountryCode.NL]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.NL,
    [LanguageCode.NL, LanguageCode.EN],
    'Netherlands'
  ),
  [CountryCode.NO]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.NO,
    [LanguageCode.NB, LanguageCode.EN],
    'Norway'
  ),
  [CountryCode.AT]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.AT,
    [LanguageCode.DE, LanguageCode.EN],
    'Austria'
  ),
  [CountryCode.PL]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.PL,
    [LanguageCode.PL, LanguageCode.EN],
    'Poland'
  ),
  [CountryCode.PT]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.PT,
    [LanguageCode.PT, LanguageCode.EN],
    'Portugal'
  ),
  [CountryCode.RO]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.RO,
    [LanguageCode.RO],
    'Romania'
  ),
  [CountryCode.RU]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.RU,
    [LanguageCode.RU],
    'Russia'
  ),
  [CountryCode.CH]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.CH,
    [LanguageCode.DE, LanguageCode.FR, LanguageCode.EN],
    'Switzerland'
  ),
  [CountryCode.SI]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.SI,
    [LanguageCode.FI],
    'Sovenia'
  ),
  [CountryCode.SK]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.SK,
    [LanguageCode.SK, LanguageCode.EN],
    'Slovakia'
  ),
  [CountryCode.SE]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.SE,
    [LanguageCode.EN, LanguageCode.SV],
    'Sweden'
  ),
  [CountryCode.GB]: new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.GB,
    [LanguageCode.EN],
    'United Kingdom'
  ),
  [CountryCode.AU]: new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.AU,
    [LanguageCode.EN],
    'Australia'
  ),
  [CountryCode.IN]: new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.IN,
    [LanguageCode.EN],
    'India'
  ),
  [CountryCode.MY]: new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.MY,
    [LanguageCode.EN],
    'Malaysia'
  ),
  [CountryCode.NZ]: new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.NZ,
    [LanguageCode.EN],
    'New Zealand'
  ),
  [CountryCode.SG]: new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.SG,
    [LanguageCode.EN],
    'Singapore'
  ),
  [CountryCode.KR]: new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.KR,
    [LanguageCode.KO],
    'Korea'
  ),
  [CountryCode.CN]: new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.CN,
    [LanguageCode.ZH],
    'China'
  ),
  [CountryCode.JP]: new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.JP,
    [LanguageCode.JA],
    'Japan'
  ),
  [CountryCode.HK]: new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.HK,
    [LanguageCode.ZH],
    'Hong Kong'
  ),
  [CountryCode.TW]: new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.TW,
    [LanguageCode.ZH],
    'Taiwan'
  ),
  [CountryCode.ZA]: new StoreCountryImpl(
    WorldRegion.MiddleEastAfrica,
    CountryCode.ZA,
    [LanguageCode.EN],
    'South Africa'
  ),
  [CountryCode.TR]: new StoreCountryImpl(
    WorldRegion.MiddleEastAfrica,
    CountryCode.TR,
    [LanguageCode.TR],
    'Turkey'
  ),
  [CountryCode.AE]: new StoreCountryImpl(
    WorldRegion.MiddleEastAfrica,
    CountryCode.AE,
    [LanguageCode.EN],
    'United Arab Emirates'
  )
};
