import { WorldRegion } from './world-region';
import { CountryCode } from './country-code';
import { LanguageCode } from './language-code';
import { StoreCountry } from './store-country';
import { StoreCountryImpl } from './store-country-impl';

export const LEGO_STORES: StoreCountry[] = [
  new StoreCountryImpl(
    WorldRegion.NorthAmerica,
    CountryCode.CA,
    [LanguageCode.EN, LanguageCode.FR],
    'Canada'
  ),
  new StoreCountryImpl(
    WorldRegion.NorthAmerica,
    CountryCode.MX,
    [LanguageCode.ES, LanguageCode.EN],
    'Mexico'
  ),
  new StoreCountryImpl(
    WorldRegion.NorthAmerica,
    CountryCode.US,
    [LanguageCode.EN],
    'United States'
  ),
  new StoreCountryImpl(
    WorldRegion.SouthAmerica,
    CountryCode.BR,
    [LanguageCode.PT],
    'Brasil'
  ),
  new StoreCountryImpl(
    WorldRegion.SouthAmerica,
    CountryCode.AR,
    [LanguageCode.ES],
    'Latinoamerica'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.BE,
    [LanguageCode.FR, LanguageCode.NL, LanguageCode.EN],
    'Belgium'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.CZ,
    [LanguageCode.CS, LanguageCode.EN],
    'Czech Republic'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.DK,
    [LanguageCode.DA, LanguageCode.EN],
    'Denmark'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.DE,
    [LanguageCode.DE, LanguageCode.EN],
    'Germany'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.EE,
    [LanguageCode.ET, LanguageCode.EN],
    'Estonia'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.ES,
    [LanguageCode.ES, LanguageCode.EN],
    'Spain'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.FI,
    [LanguageCode.EN, LanguageCode.FI],
    'Finland'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.FR,
    [LanguageCode.FR, LanguageCode.EN],
    'France'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.GR,
    [LanguageCode.EN],
    'Greece'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.HU,
    [LanguageCode.EN, LanguageCode.HU],
    'Hungary'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.IE,
    [LanguageCode.EN],
    'Ireland'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.IT,
    [LanguageCode.IT, LanguageCode.EN],
    'Italy'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.LV,
    [LanguageCode.LV, LanguageCode.EN],
    'Latvia'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.LT,
    [LanguageCode.LT, LanguageCode.EN],
    'Lithuania'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.LU,
    [LanguageCode.FR, LanguageCode.DE, LanguageCode.EN],
    'Luxemburg'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.NL,
    [LanguageCode.NL, LanguageCode.EN],
    'Netherlands'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.NO,
    [LanguageCode.NB, LanguageCode.EN],
    'Norway'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.AT,
    [LanguageCode.DE, LanguageCode.EN],
    'Austria'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.PL,
    [LanguageCode.PL, LanguageCode.EN],
    'Poland'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.PT,
    [LanguageCode.PT, LanguageCode.EN],
    'Portugal'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.RO,
    [LanguageCode.RO],
    'Romania'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.RU,
    [LanguageCode.RU],
    'Russia'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.CH,
    [LanguageCode.DE, LanguageCode.FR, LanguageCode.EN],
    'Switzerland'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.SI,
    [LanguageCode.FI],
    'Sovenia'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.SK,
    [LanguageCode.SK, LanguageCode.EN],
    'Slovakia'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.SE,
    [LanguageCode.EN, LanguageCode.SV],
    'Sweden'
  ),
  new StoreCountryImpl(
    WorldRegion.Europe,
    CountryCode.GB,
    [LanguageCode.EN],
    'United Kingdom'
  ),
  new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.AU,
    [LanguageCode.EN],
    'Australia'
  ),
  new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.IN,
    [LanguageCode.EN],
    'India'
  ),
  new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.MY,
    [LanguageCode.EN],
    'Malaysia'
  ),
  new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.NZ,
    [LanguageCode.EN],
    'New Zealand'
  ),
  new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.SG,
    [LanguageCode.EN],
    'Singapore'
  ),
  new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.KR,
    [LanguageCode.KO],
    'Korea'
  ),
  new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.CH,
    [LanguageCode.ZH],
    'China'
  ),
  new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.JP,
    [LanguageCode.JA],
    'Japan'
  ),
  new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.HK,
    [LanguageCode.ZH],
    'Hong Kong'
  ),
  new StoreCountryImpl(
    WorldRegion.AsiaPacific,
    CountryCode.TW,
    [LanguageCode.ZH],
    'Taiwan'
  ),
  new StoreCountryImpl(
    WorldRegion.MiddleEastAfrica,
    CountryCode.ZA,
    [LanguageCode.EN],
    'South Africa'
  ),
  new StoreCountryImpl(
    WorldRegion.MiddleEastAfrica,
    CountryCode.TR,
    [LanguageCode.TR],
    'Turkey'
  ),
  new StoreCountryImpl(
    WorldRegion.MiddleEastAfrica,
    CountryCode.AE,
    [LanguageCode.EN],
    'United Arab Emirates'
  )
];
