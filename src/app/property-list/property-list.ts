export interface PropertyDetails {
  AangebodenSinds: string;
  AangebodenSindsTekst: string;
  AantalBadkamers: number;
  AantalKamers: number;
  AantalSlaapkamers?: any;
  AantalWoonlagen: string;
  Aanvaarding: string;
  Adres: string;
  AfgekochtDatum?: any;
  BalkonDakterras?: any;
  BedrijfsruimteCombinatieObject?: any;
  BezichtingDagdelen: any[];
  BezichtingDagen: any[];
  BijdrageVVE?: any;
  Bijzonderheden: string;
  Bouwjaar: string;
  Bouwvorm: string;
  BronCode: string;
  ContactpersoonEmail: string;
  ContactpersoonTelefoon: string;
  Cv: string;
  DatumOndertekeningAkte: string;
  Deeplink?: any;
  DetailInfo: DetailInfo;
  EigendomsSituatie: string;
  Energielabel: Energielabel;
  ErfpachtBedrag: number;
  Garage: string;
  GarageIsolatie: string;
  GarageVoorzieningen: string;
  GelegenOp?: any;
  GewijzigdDatum: string;
  HoofdFoto: string;
  HoofdFotoSecure: string;
  HoofdTuinType?: any;
  Id: number;
  IndBasisPlaatsing: boolean;
  IndFotos: boolean;
  IndIpix: boolean;
  IndOpenhuizenTopper: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVeilingProduct: boolean;
  IndVideo: boolean;
  Inhoud: number;
  InternalId: string;
  IsIngetrokken: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  Isolatie: string;
  Kenmerken: Kenmerken2[];
  KenmerkenKort: KenmerkenKort;
  KenmerkenTitel?: any;
  Ligging: string;
  MLIUrl?: any;
  Makelaar: string;
  MakelaarId: number;
  MakelaarTelefoon: string;
  MedeAanbieders: any[];
  Media: Media[];
  'Media-Foto': string[];
  MobileURL: string;
  ObjectType: string;
  ObjectTypeMetVoorvoegsel: string;
  OpenHuizen: any[];
  PerceelOppervlakte: number;
  PermanenteBewoning: string;
  Plaats: string;
  Postcode: string;
  Prijs: Prijs;
  PrijsGeformatteerd: string;
  Project?: any;
  ProjectNaam?: any;
  PublicatieDatum: string;
  PublicatieStatus: number;
  SchuurBerging?: any;
  SchuurBergingIsolatie?: any;
  SchuurBergingVoorzieningen?: any;
  ScrambledId: string;
  ServiceKosten: number;
  SoortAanbod: number;
  SoortDak: string;
  SoortGarage: string;
  SoortParkeergelegenheid: string;
  SoortPlaatsing: number;
  SoortWoning: string;
  Titels: Titel[];
  ToonBezichtigingMaken: boolean;
  ToonBrochureAanvraag: boolean;
  ToonMakelaarWoningaanbod: boolean;
  ToonReageren: boolean;
  TransactieAfmeldDatum: string;
  TransactieMakelaarId?: any;
  TransactieMakelaarNaam?: any;
  TuinLigging?: any;
  TypeProject: number;
  URL: string;
  Veiling: Veiling;
  VerkoopStatus: string;
  Verwarming: string;
  Video?: any;
  VolledigeOmschrijving: string;
  Voorzieningen: string;
  WGS84_X: number;
  WGS84_Y: number;
  WarmWater: string;
  WoonOppervlakte: number;
  EersteHuurPrijs?: any;
  EersteHuurPrijsLang?: any;
  EersteKoopPrijs: number;
  EersteKoopPrijsLang: string;
  HuurPrijs?: any;
  HuurPrijsLang?: any;
  HuurPrijsTot?: any;
  Huurprijs?: any;
  HuurprijsFormaat?: any;
  KoopPrijs: number;
  KoopPrijsLang: string;
  Koopprijs: number;
  KoopprijsFormaat: string;
  KoopprijsTot?: any;
  ShortURL: string;
  Tuin: string;
  VeilingGeformatteerd?: any;
}

interface Veiling {
  EindDatum?: any;
  Link?: any;
  StartDatum?: any;
  VeilingPartij?: any;
}

interface Titel {
  Omschrijving: string;
  Pagina: number;
}

interface Prijs {
  GeenExtraKosten?: any;
  HuurAbbreviation: string;
  Huurprijs?: any;
  HuurprijsOpAanvraag: string;
  HuurprijsTot?: any;
  KoopAbbreviation: string;
  Koopprijs: number;
  KoopprijsOpAanvraag: string;
  KoopprijsTot?: any;
  OriginelePrijs?: any;
  VeilingText: string;
}

interface Media {
  Categorie: number;
  ContentType: number;
  Id: string;
  IndexNumber: number;
  MediaItems: MediaItem[];
  Metadata?: any;
  Omschrijving: string;
  RegistratieVerplicht: boolean;
  Soort: number;
}

interface MediaItem {
  Category: number;
  Height: number;
  Url: string;
  UrlSecure: string;
  Width: number;
}

export interface KenmerkenKort {
  Ad?: any;
  Kenmerken: Kenmerken3[];
  LokNummer: number;
  SubKenmerk?: any;
  Titel?: any;
}

export interface Kenmerken3 {
  Naam: string;
  NaamCss?: any;
  Waarde: string;
  WaardeCss?: any;
}

export interface Kenmerken2 {
  Ad?: any;
  Kenmerken: Kenmerken[];
  LokNummer: number;
  SubKenmerk?: SubKenmerk;
  Titel: string;
}

interface SubKenmerk {
  Ad?: any;
  Kenmerken: any[];
  LokNummer: number;
  SubKenmerk?: any;
  Titel: string;
}

export interface Kenmerken {
  Naam: string;
  NaamCss?: null | string | string;
  Waarde: string;
  WaardeCss?: (null | string)[];
}

interface Energielabel {
  Definitief: boolean;
  Index?: any;
  Label: string;
  NietBeschikbaar: boolean;
  NietVerplicht: boolean;
}

interface DetailInfo {
  HasPromotionLabel: boolean;
  PromotionLabelType: number;
  RibbonColor: number;
  RibbonText?: any;
  Tagline?: any;
}
