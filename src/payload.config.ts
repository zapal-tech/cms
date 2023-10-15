import { buildConfig } from 'payload/config';

import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { gcsAdapter } from '@payloadcms/plugin-cloud-storage/gcs';
import seo from '@payloadcms/plugin-seo';
import {
  HeadingFeature,
  InlineCodeTextFeature,
  LinkFeature,
  UploadFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

import path from 'path';

import validationEN from 'locales/en/validation.json';
import validationUA from 'locales/ua/validation.json';

import Logo from 'components/Logo';

import Admins from 'collections/Admins';
import ContactFormLeads from 'collections/ContactFormLeads';
import Locations from 'collections/Locations';
import Partners from 'collections/Partners';
import Projects from 'collections/Projects';
import Services from 'collections/Services';
import Team from 'collections/Team';
import Technologies from 'collections/Technologies';
import Authors from 'collections/blog/Authors';
import Blog from 'collections/blog/Blog';
import Tags from 'collections/blog/Tags';
import AuthorPhotos from 'collections/media/AuthorPhotos';
import BlogMetaImages from 'collections/media/BlogMetaImages';
import PartnerLogos from 'collections/media/PartnerLogos';
import ProjectImages from 'collections/media/ProjectImages';
import ServiceIcons from 'collections/media/ServiceIcons';
import TeamMemberPhotos from 'collections/media/TeamMemberPhotos';
import TechnologyLogos from 'collections/media/TechnologyLogos';

import Footer from 'globals/Footer';
import GeneralInfo from 'globals/GeneralInfo';
import Languages from 'globals/Languages';
import Navigation from 'globals/Navigation';
import AboutPage from 'globals/pages/AboutPage';
import BlogPage from 'globals/pages/BlogPage';
import ContactsPage from 'globals/pages/ContactsPage';
import CookiesPolicyPage from 'globals/pages/CookiesPolicyPage';
import HomePage from 'globals/pages/HomePage';
import PrivacyPolicyPage from 'globals/pages/PrivacyPolicyPage';
import ProjectsPage from 'globals/pages/ProjectsPage';
import ScheduleMeetingPage from 'globals/pages/ScheduleMeetingPage';
import SitemapPage from 'globals/pages/SitemapPage';
import SupportUkrainePage from 'globals/pages/SupportUkrainePage';
import TermsOfUsePage from 'globals/pages/TermsOfUsePage';

import { keywordsField } from 'fields/keywords';
import { urlField } from 'fields/url';

const googleCloudStorageAdapter = gcsAdapter({
  options: {
    credentials: JSON.parse(process.env.GCS_CREDENTIALS || '{}'),
  },
  bucket: process.env.GCS_BUCKET,
});

export default buildConfig({
  serverURL: process.env.SERVER_URL || 'http://localhost:3000',
  debug: process.env.NODE_ENV === 'development',
  telemetry: false,
  csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL],
  rateLimit: {
    max: 250,
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      LinkFeature({
        fields: [
          {
            name: 'rel',
            label: 'Rel Attribute',
            type: 'select',
            hasMany: true,
            options: ['noopener', 'noreferrer', 'nofollow'],
            admin: {
              description:
                'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
            },
          },
        ],
      }),
      UploadFeature(),
      HeadingFeature({
        enabledHeadingSizes: ['h1', 'h2', 'h3'],
      }),
      InlineCodeTextFeature(),
    ],
  }),
  admin: {
    user: Admins.slug,
    avatar: 'gravatar',
    dateFormat: 'dd.MM.yyyy HH:mm:ss',
    css: path.resolve(__dirname, './styles.css'),
    meta: {
      favicon: '/favicon.ico',
      ogImage: '/og-image.webp',
      titleSuffix: ' - Zapal | CMS',
    },
    components: {
      graphics: {
        Icon: Logo,
        Logo: Logo,
      },
    },
    bundler: webpackBundler(),
    webpack: (config) => {
      config.resolve.modules = [...config.resolve.modules, path.resolve(__dirname)];
      config.resolve.preferAbsolute = true;
      config.resolve.extensions = [...config.resolve.extensions, '.ts', '.tsx', '.js', '.jsx', '.json'];

      return config;
    },
    // livePreview: {
    //   url: ({
    //   data,
    //   documentInfo,
    //   locale
    // }) => `${data.tenant.url}${documentInfo.slug === Blog.slug ? `/blog/${locale?.code !== 'en' ? `${locale.code}/` : ''}${data.slug}` : ''}`,
    //   breakpoints: [
    //     {
    //       label: 'Mobile',
    //       name: 'mobile',
    //       width: 375,
    //       height: 667,
    //     },
    //     {
    //       label: 'Tablet',
    //       name: 'tablet',
    //       width: 768,
    //       height: 1024,
    //     },
    //     {
    //       label: 'Laptop',
    //       name: 'laptop',
    //       width: 1280,
    //       height: 655,
    //     },
    //     {
    //       label: 'Desktop',
    //       name: 'desktop',
    //       width: 1920,
    //       height: 980,
    //     },
    //   ],
    //   collections: [Blog.slug],
    // },
  },
  collections: [
    Admins,
    ContactFormLeads,
    Team,
    Technologies,
    TechnologyLogos,
    TeamMemberPhotos,
    Blog,
    Tags,
    Authors,
    BlogMetaImages,
    AuthorPhotos,
    Locations,
    PartnerLogos,
    Partners,
    ServiceIcons,
    Services,
    ProjectImages,
    Projects,
  ],
  globals: [
    AboutPage,
    BlogPage,
    ContactsPage,
    CookiesPolicyPage,
    HomePage,
    PrivacyPolicyPage,
    ProjectsPage,
    ScheduleMeetingPage,
    SitemapPage,
    SupportUkrainePage,
    TermsOfUsePage,
    GeneralInfo,
    Navigation,
    Languages,
    Footer,
  ],
  localization: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
    fallback: true,
  },
  i18n: {
    resources: {
      en: {
        validation: validationEN,
      },
      ua: {
        general: {
          loading: 'Завантаження',
        },
        validation: validationUA,
      },
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    disable: true,
  },
  email: {
    transportOptions:
      process.env.NODE_ENV === 'production'
        ? {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
              type: 'OAuth2',
              user: process.env.SMTP_USER,
              serviceClient: process.env.SMTP_CLIENT,
              privateKey: process.env.SMTP_PRIVATE_KEY,
            },
          }
        : undefined,
    fromName: 'Zapal',
    fromAddress: process.env.SMTP_USER,
  },
  plugins: [
    cloudStorage({
      collections: {
        [AuthorPhotos.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/author-photos',
        },
        [BlogMetaImages.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/blog-meta-images',
        },
        [PartnerLogos.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/partner-logos',
        },
        [ServiceIcons.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/service-icons',
        },
        [TeamMemberPhotos.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/team-member-photos',
        },
        [TechnologyLogos.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/technology-logos',
        },
      },
    }),
    seo({
      collections: [Blog.slug, Projects.slug],
      uploadsCollection: BlogMetaImages.slug,
      globals: [
        AboutPage.slug,
        BlogPage.slug,
        ContactsPage.slug,
        CookiesPolicyPage.slug,
        HomePage.slug,
        PrivacyPolicyPage.slug,
        ProjectsPage.slug,
        ScheduleMeetingPage.slug,
        SitemapPage.slug,
        SupportUkrainePage.slug,
        TermsOfUsePage.slug,
      ],
      fields: [
        keywordsField(),
        urlField({
          name: 'canonical',
          label: {
            en: 'Canonical URL',
            ua: '"Канонічне" посилання',
          },
        }),
      ],
      generateTitle: ({ doc }) => (doc as any)?.title || '',
      generateURL: ({ doc }) =>
        new URL(`/[section]/${(doc as any)?.slug ? (doc as any).slug : '[slug]'}`, process.env.PAYLOAD_PUBLIC_SITE_URL)
          .href,
      tabbedUI: true,
    }),
  ],
});
