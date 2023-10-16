/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    admins: Admin;
    'contact-form-leads': ContactFormLead;
    team: Team;
    technologies: Technology;
    'technology-logos': TechnologyLogo;
    'team-member-photos': TeamMemberPhoto;
    'blog-posts': BlogPost;
    'blog-tags': BlogTag;
    'blog-authors': BlogAuthor;
    'blog-meta-images': BlogMetaImage;
    'author-photos': AuthorPhoto;
    locations: Location;
    'partner-logos': PartnerLogo;
    partners: Partner;
    'service-icons': ServiceIcon;
    services: Service;
    'project-images': ProjectImage;
    projects: Project;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    'about-page': AboutPage;
    'blog-page': BlogPage;
    'contacts-page': ContactsPage;
    'cookies-policy-page': CookiesPolicyPage;
    'home-page': HomePage;
    'privacy-policy-page': PrivacyPolicyPage;
    'projects-page': ProjectsPage;
    'schedule-meeting-page': ScheduleMeetingPage;
    'sitemap-page': SitemapPage;
    'support-ukraine-page': SupportUkrainePage;
    'terms-of-use-page': TermsOfUsePage;
    general: General;
    navigation: Navigation;
    languages: Language;
    footer: Footer;
  };
}
export interface Admin {
  id: string;
  name: string;
  title?: string;
  role: 'root' | 'admin' | 'service';
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface ContactFormLead {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  company?: string;
  message: string;
  comeFromPage?: string;
  comeFromLanguage: 'en' | 'uk' | 'unknown';
  updatedAt: string;
  createdAt: string;
}
export interface Team {
  id: string;
  slug?: string;
  order: number;
  photo: string | TeamMemberPhoto;
  firstName: string;
  lastName?: string;
  title: string;
  fullTitle: string;
  about?: string;
  links?: {
    name: string;
    url: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface TeamMemberPhoto {
  id: string;
  alt?: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    '700'?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    '800'?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    '1200'?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    '1600'?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Technology {
  id: string;
  slug?: string;
  order: number;
  name: string;
  logo: string | TechnologyLogo;
  description: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface TechnologyLogo {
  id: string;
  alt?: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface BlogPost {
  id: string;
  content: {
    title?: string;
    tags: string[] | BlogTag[];
    author: string | BlogAuthor;
    content?: {
      [k: string]: unknown;
    }[];
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  slug?: string;
  updatedAt: string;
  createdAt: string;
}
export interface BlogTag {
  id: string;
  name: string;
  slug?: string;
  updatedAt: string;
  createdAt: string;
}
export interface BlogAuthor {
  id: string;
  slug?: string;
  photo: string | AuthorPhoto;
  name: string;
  email: string;
  updatedAt: string;
  createdAt: string;
}
export interface AuthorPhoto {
  id: string;
  alt?: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface BlogMetaImage {
  id: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Location {
  id: string;
  slug?: string;
  order: number;
  timeZone:
    | 'Pacific/Midway'
    | 'Pacific/Niue'
    | 'Pacific/Pago_Pago'
    | 'America/Adak'
    | 'Pacific/Honolulu'
    | 'Pacific/Rarotonga'
    | 'Pacific/Tahiti'
    | 'Pacific/Marquesas'
    | 'America/Anchorage'
    | 'America/Juneau'
    | 'America/Metlakatla'
    | 'America/Nome'
    | 'America/Sitka'
    | 'America/Yakutat'
    | 'Pacific/Gambier'
    | 'America/Los_Angeles'
    | 'America/Tijuana'
    | 'America/Vancouver'
    | 'Pacific/Pitcairn'
    | 'America/Boise'
    | 'America/Cambridge_Bay'
    | 'America/Chihuahua'
    | 'America/Creston'
    | 'America/Dawson'
    | 'America/Dawson_Creek'
    | 'America/Denver'
    | 'America/Edmonton'
    | 'America/Fort_Nelson'
    | 'America/Hermosillo'
    | 'America/Inuvik'
    | 'America/Mazatlan'
    | 'America/Ojinaga'
    | 'America/Phoenix'
    | 'America/Whitehorse'
    | 'America/Yellowknife'
    | 'America/Bahia_Banderas'
    | 'America/Belize'
    | 'America/Chicago'
    | 'America/Costa_Rica'
    | 'America/El_Salvador'
    | 'America/Guatemala'
    | 'America/Indiana/Knox'
    | 'America/Indiana/Tell_City'
    | 'America/Managua'
    | 'America/Matamoros'
    | 'America/Menominee'
    | 'America/Merida'
    | 'America/Mexico_City'
    | 'America/Monterrey'
    | 'America/North_Dakota/Beulah'
    | 'America/North_Dakota/Center'
    | 'America/North_Dakota/New_Salem'
    | 'America/Rainy_River'
    | 'America/Rankin_Inlet'
    | 'America/Regina'
    | 'America/Resolute'
    | 'America/Swift_Current'
    | 'America/Tegucigalpa'
    | 'America/Winnipeg'
    | 'Pacific/Easter'
    | 'Pacific/Galapagos'
    | 'America/Atikokan'
    | 'America/Bogota'
    | 'America/Cancun'
    | 'America/Cayman'
    | 'America/Detroit'
    | 'America/Eirunepe'
    | 'America/Grand_Turk'
    | 'America/Guayaquil'
    | 'America/Havana'
    | 'America/Indiana/Indianapolis'
    | 'America/Indiana/Marengo'
    | 'America/Indiana/Petersburg'
    | 'America/Indiana/Vevay'
    | 'America/Indiana/Vincennes'
    | 'America/Indiana/Winamac'
    | 'America/Iqaluit'
    | 'America/Jamaica'
    | 'America/Kentucky/Louisville'
    | 'America/Kentucky/Monticello'
    | 'America/Lima'
    | 'America/Nassau'
    | 'America/New_York'
    | 'America/Nipigon'
    | 'America/Panama'
    | 'America/Pangnirtung'
    | 'America/Port-au-Prince'
    | 'America/Rio_Branco'
    | 'America/Thunder_Bay'
    | 'America/Toronto'
    | 'America/Anguilla'
    | 'America/Antigua'
    | 'America/Aruba'
    | 'America/Asuncion'
    | 'America/Barbados'
    | 'America/Blanc-Sablon'
    | 'America/Boa_Vista'
    | 'America/Campo_Grande'
    | 'America/Caracas'
    | 'America/Cuiaba'
    | 'America/Curacao'
    | 'America/Dominica'
    | 'America/Glace_Bay'
    | 'America/Goose_Bay'
    | 'America/Grenada'
    | 'America/Guadeloupe'
    | 'America/Guyana'
    | 'America/Halifax'
    | 'America/Kralendijk'
    | 'America/La_Paz'
    | 'America/Lower_Princes'
    | 'America/Manaus'
    | 'America/Marigot'
    | 'America/Martinique'
    | 'America/Moncton'
    | 'America/Montserrat'
    | 'America/Porto_Velho'
    | 'America/Port_of_Spain'
    | 'America/Puerto_Rico'
    | 'America/Santiago'
    | 'America/Santo_Domingo'
    | 'America/St_Barthelemy'
    | 'America/St_Kitts'
    | 'America/St_Lucia'
    | 'America/St_Thomas'
    | 'America/St_Vincent'
    | 'America/Thule'
    | 'America/Tortola'
    | 'Atlantic/Bermuda'
    | 'America/St_Johns'
    | 'America/Araguaina'
    | 'America/Argentina/Buenos_Aires'
    | 'America/Argentina/Catamarca'
    | 'America/Argentina/Cordoba'
    | 'America/Argentina/Jujuy'
    | 'America/Argentina/La_Rioja'
    | 'America/Argentina/Mendoza'
    | 'America/Argentina/Rio_Gallegos'
    | 'America/Argentina/Salta'
    | 'America/Argentina/San_Juan'
    | 'America/Argentina/San_Luis'
    | 'America/Argentina/Tucuman'
    | 'America/Argentina/Ushuaia'
    | 'America/Bahia'
    | 'America/Belem'
    | 'America/Cayenne'
    | 'America/Fortaleza'
    | 'America/Godthab'
    | 'America/Maceio'
    | 'America/Miquelon'
    | 'America/Montevideo'
    | 'America/Paramaribo'
    | 'America/Punta_Arenas'
    | 'America/Recife'
    | 'America/Santarem'
    | 'America/Sao_Paulo'
    | 'Antarctica/Palmer'
    | 'Antarctica/Rothera'
    | 'Atlantic/Stanley'
    | 'America/Noronha'
    | 'Atlantic/South_Georgia'
    | 'America/Scoresbysund'
    | 'Atlantic/Azores'
    | 'Atlantic/Cape_Verde'
    | 'Africa/Abidjan'
    | 'Africa/Accra'
    | 'Africa/Bamako'
    | 'Africa/Banjul'
    | 'Africa/Bissau'
    | 'Africa/Casablanca'
    | 'Africa/Conakry'
    | 'Africa/Dakar'
    | 'Africa/El_Aaiun'
    | 'Africa/Freetown'
    | 'Africa/Lome'
    | 'Africa/Monrovia'
    | 'Africa/Nouakchott'
    | 'Africa/Ouagadougou'
    | 'Africa/Sao_Tome'
    | 'America/Danmarkshavn'
    | 'Antarctica/Troll'
    | 'Atlantic/Canary'
    | 'Atlantic/Faroe'
    | 'Atlantic/Madeira'
    | 'Atlantic/Reykjavik'
    | 'Atlantic/St_Helena'
    | 'Europe/Dublin'
    | 'Europe/Guernsey'
    | 'Europe/Isle_of_Man'
    | 'Europe/Jersey'
    | 'Europe/Lisbon'
    | 'Europe/London'
    | 'Africa/Algiers'
    | 'Africa/Bangui'
    | 'Africa/Brazzaville'
    | 'Africa/Ceuta'
    | 'Africa/Douala'
    | 'Africa/Kinshasa'
    | 'Africa/Lagos'
    | 'Africa/Libreville'
    | 'Africa/Luanda'
    | 'Africa/Malabo'
    | 'Africa/Ndjamena'
    | 'Africa/Niamey'
    | 'Africa/Porto-Novo'
    | 'Africa/Tunis'
    | 'Africa/Windhoek'
    | 'Arctic/Longyearbyen'
    | 'Europe/Amsterdam'
    | 'Europe/Andorra'
    | 'Europe/Belgrade'
    | 'Europe/Berlin'
    | 'Europe/Bratislava'
    | 'Europe/Brussels'
    | 'Europe/Budapest'
    | 'Europe/Copenhagen'
    | 'Europe/Gibraltar'
    | 'Europe/Ljubljana'
    | 'Europe/Luxembourg'
    | 'Europe/Madrid'
    | 'Europe/Malta'
    | 'Europe/Monaco'
    | 'Europe/Oslo'
    | 'Europe/Paris'
    | 'Europe/Podgorica'
    | 'Europe/Prague'
    | 'Europe/Rome'
    | 'Europe/San_Marino'
    | 'Europe/Sarajevo'
    | 'Europe/Skopje'
    | 'Europe/Stockholm'
    | 'Europe/Tirane'
    | 'Europe/Vaduz'
    | 'Europe/Vatican'
    | 'Europe/Vienna'
    | 'Europe/Warsaw'
    | 'Europe/Zagreb'
    | 'Europe/Zurich'
    | 'Africa/Blantyre'
    | 'Africa/Bujumbura'
    | 'Africa/Cairo'
    | 'Africa/Gaborone'
    | 'Africa/Harare'
    | 'Africa/Johannesburg'
    | 'Africa/Juba'
    | 'Africa/Khartoum'
    | 'Africa/Kigali'
    | 'Africa/Lubumbashi'
    | 'Africa/Lusaka'
    | 'Africa/Maputo'
    | 'Africa/Maseru'
    | 'Africa/Mbabane'
    | 'Africa/Tripoli'
    | 'Asia/Amman'
    | 'Asia/Beirut'
    | 'Asia/Damascus'
    | 'Asia/Famagusta'
    | 'Asia/Gaza'
    | 'Asia/Hebron'
    | 'Asia/Jerusalem'
    | 'Asia/Nicosia'
    | 'Europe/Athens'
    | 'Europe/Bucharest'
    | 'Europe/Chisinau'
    | 'Europe/Helsinki'
    | 'Europe/Kaliningrad'
    | 'Europe/Kyiv'
    | 'Europe/Mariehamn'
    | 'Europe/Riga'
    | 'Europe/Sofia'
    | 'Europe/Tallinn'
    | 'Europe/Uzhgorod'
    | 'Europe/Vilnius'
    | 'Europe/Zaporozhye'
    | 'Africa/Addis_Ababa'
    | 'Africa/Asmara'
    | 'Africa/Dar_es_Salaam'
    | 'Africa/Djibouti'
    | 'Africa/Kampala'
    | 'Africa/Mogadishu'
    | 'Africa/Nairobi'
    | 'Antarctica/Syowa'
    | 'Asia/Aden'
    | 'Asia/Baghdad'
    | 'Asia/Bahrain'
    | 'Asia/Kuwait'
    | 'Asia/Qatar'
    | 'Asia/Riyadh'
    | 'Europe/Istanbul'
    | 'Europe/Kirov'
    | 'Europe/Minsk'
    | 'Europe/Moscow'
    | 'Europe/Volgograd'
    | 'Indian/Antananarivo'
    | 'Indian/Comoro'
    | 'Indian/Mayotte'
    | 'Asia/Tehran'
    | 'Asia/Baku'
    | 'Asia/Dubai'
    | 'Asia/Muscat'
    | 'Asia/Tbilisi'
    | 'Asia/Yerevan'
    | 'Europe/Astrakhan'
    | 'Europe/Samara'
    | 'Europe/Saratov'
    | 'Europe/Ulyanovsk'
    | 'Indian/Mahe'
    | 'Indian/Mauritius'
    | 'Indian/Reunion'
    | 'Asia/Kabul'
    | 'Antarctica/Mawson'
    | 'Asia/Aqtau'
    | 'Asia/Aqtobe'
    | 'Asia/Ashgabat'
    | 'Asia/Atyrau'
    | 'Asia/Dushanbe'
    | 'Asia/Karachi'
    | 'Asia/Oral'
    | 'Asia/Qyzylorda'
    | 'Asia/Samarkand'
    | 'Asia/Tashkent'
    | 'Asia/Yekaterinburg'
    | 'Indian/Kerguelen'
    | 'Indian/Maldives'
    | 'Asia/Colombo'
    | 'Asia/Kolkata'
    | 'Asia/Kathmandu'
    | 'Antarctica/Vostok'
    | 'Asia/Almaty'
    | 'Asia/Bishkek'
    | 'Asia/Dhaka'
    | 'Asia/Omsk'
    | 'Asia/Qostanay'
    | 'Asia/Thimphu'
    | 'Asia/Urumqi'
    | 'Indian/Chagos'
    | 'Asia/Yangon'
    | 'Indian/Cocos'
    | 'Antarctica/Davis'
    | 'Asia/Bangkok'
    | 'Asia/Barnaul'
    | 'Asia/Hovd'
    | 'Asia/Ho_Chi_Minh'
    | 'Asia/Jakarta'
    | 'Asia/Krasnoyarsk'
    | 'Asia/Novokuznetsk'
    | 'Asia/Novosibirsk'
    | 'Asia/Phnom_Penh'
    | 'Asia/Pontianak'
    | 'Asia/Tomsk'
    | 'Asia/Vientiane'
    | 'Indian/Christmas'
    | 'Asia/Brunei'
    | 'Asia/Choibalsan'
    | 'Asia/Hong_Kong'
    | 'Asia/Irkutsk'
    | 'Asia/Kuala_Lumpur'
    | 'Asia/Kuching'
    | 'Asia/Macau'
    | 'Asia/Makassar'
    | 'Asia/Manila'
    | 'Asia/Shanghai'
    | 'Asia/Singapore'
    | 'Asia/Taipei'
    | 'Asia/Ulaanbaatar'
    | 'Australia/Perth'
    | 'Australia/Eucla'
    | 'Asia/Chita'
    | 'Asia/Dili'
    | 'Asia/Jayapura'
    | 'Asia/Khandyga'
    | 'Asia/Pyongyang'
    | 'Asia/Seoul'
    | 'Asia/Tokyo'
    | 'Asia/Yakutsk'
    | 'Pacific/Palau'
    | 'Australia/Adelaide'
    | 'Australia/Broken_Hill'
    | 'Australia/Darwin'
    | 'Antarctica/DumontDUrville'
    | 'Antarctica/Macquarie'
    | 'Asia/Ust-Nera'
    | 'Asia/Vladivostok'
    | 'Australia/Brisbane'
    | 'Australia/Currie'
    | 'Australia/Hobart'
    | 'Australia/Lindeman'
    | 'Australia/Melbourne'
    | 'Australia/Sydney'
    | 'Pacific/Chuuk'
    | 'Pacific/Guam'
    | 'Pacific/Port_Moresby'
    | 'Pacific/Saipan'
    | 'Australia/Lord_Howe'
    | 'Antarctica/Casey'
    | 'Asia/Magadan'
    | 'Asia/Sakhalin'
    | 'Asia/Srednekolymsk'
    | 'Pacific/Bougainville'
    | 'Pacific/Efate'
    | 'Pacific/Guadalcanal'
    | 'Pacific/Kosrae'
    | 'Pacific/Norfolk'
    | 'Pacific/Noumea'
    | 'Pacific/Pohnpei'
    | 'Antarctica/McMurdo'
    | 'Asia/Anadyr'
    | 'Asia/Kamchatka'
    | 'Pacific/Auckland'
    | 'Pacific/Fiji'
    | 'Pacific/Funafuti'
    | 'Pacific/Kwajalein'
    | 'Pacific/Majuro'
    | 'Pacific/Nauru'
    | 'Pacific/Tarawa'
    | 'Pacific/Wake'
    | 'Pacific/Wallis'
    | 'Pacific/Chatham'
    | 'Pacific/Apia'
    | 'Pacific/Enderbury'
    | 'Pacific/Fakaofo'
    | 'Pacific/Tongatapu'
    | 'Pacific/Kiritimati';
  name: string;
  address: string;
  url: string;
  /**
   * @minItems 2
   * @maxItems 2
   */
  coordinates: [number, number];
  fullName: string;
  title: string;
  phone?: string;
  email?: string;
  updatedAt: string;
  createdAt: string;
}
export interface PartnerLogo {
  id: string;
  alt?: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Partner {
  id: string;
  slug?: string;
  order: number;
  viewType: 'default' | 'big';
  logo: string | PartnerLogo;
  name: string;
  url: string;
  updatedAt: string;
  createdAt: string;
}
export interface ServiceIcon {
  id: string;
  alt?: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Service {
  id: string;
  slug?: string;
  order: number;
  icon: string | ServiceIcon;
  name: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface ProjectImage {
  id: string;
  alt?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    '700'?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    '800'?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    '1200'?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    '1600'?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Project {
  id: string;
  preview: {
    name: string;
    description: string;
    image: string | ProjectImage;
  };
  content: {
    name: string;
    description: string;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  slug?: string;
  order: number;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'admins';
    value: string | Admin;
  };
  key?: string;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string;
  batch?: number;
  updatedAt: string;
  createdAt: string;
}
export interface AboutPage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface BlogPage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface ContactsPage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface CookiesPolicyPage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface HomePage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface PrivacyPolicyPage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface ProjectsPage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface ScheduleMeetingPage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface SitemapPage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface SupportUkrainePage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface TermsOfUsePage {
  id: string;
  content: {
    translation?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  meta?: {
    title?: string;
    description?: string;
    image?: string | BlogMetaImage;
    keywords?: string;
    canonical?: string;
  };
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface General {
  id: string;
  phone: string;
  email: string;
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface Navigation {
  id: string;
  translation?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}
export interface Language {
  id: string;
  translation?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  translation?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  _status?: 'draft' | 'published';
  updatedAt?: string;
  createdAt?: string;
}


declare module 'payload' {
  export interface GeneratedTypes {
    collections: {
      'admins': Admin
      'contact-form-leads': ContactFormLead
      'team': Team
      'technologies': Technology
      'technology-logos': TechnologyLogo
      'team-member-photos': TeamMemberPhoto
      'blog-posts': BlogPost
      'blog-tags': BlogTag
      'blog-authors': BlogAuthor
      'blog-meta-images': BlogMetaImage
      'author-photos': AuthorPhoto
      'locations': Location
      'partner-logos': PartnerLogo
      'partners': Partner
      'service-icons': ServiceIcon
      'services': Service
      'project-images': ProjectImage
      'projects': Project
      'payload-preferences': PayloadPreference
      'payload-migrations': PayloadMigration
    }
    globals: {
      'about-page': AboutPage
      'blog-page': BlogPage
      'contacts-page': ContactsPage
      'cookies-policy-page': CookiesPolicyPage
      'home-page': HomePage
      'privacy-policy-page': PrivacyPolicyPage
      'projects-page': ProjectsPage
      'schedule-meeting-page': ScheduleMeetingPage
      'sitemap-page': SitemapPage
      'support-ukraine-page': SupportUkrainePage
      'terms-of-use-page': TermsOfUsePage
      'general': General
      'navigation': Navigation
      'languages': Language
      'footer': Footer
    }
  }
}