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

import { blurHash } from '@zapal/payload-blurhash-plugin';
import path from 'path';

import validationEN from 'locales/en/validation';
import validationUA from 'locales/ua/validation';

import { defaultLocale, locales } from 'i18n';

import Logo from 'components/Logo';
import NavLogo from 'components/NavLogo';

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
import BlogAssets from 'collections/media/BlogAssets';
import BlogCoverImages from 'collections/media/BlogCoverImages';
import OpenGraphImages from 'collections/media/OpenGraphImages';
import PartnerLogos from 'collections/media/PartnerLogos';
import ProjectAssets from 'collections/media/ProjectAssets';
import ProjectImages from 'collections/media/ProjectImages';
import ServiceIcons from 'collections/media/ServiceIcons';
import TeamMemberPhotos from 'collections/media/TeamMemberPhotos';
import TechnologyLogos from 'collections/media/TechnologyLogos';

import Common from 'globals/Common';
import ContactForm from 'globals/ContactForm';
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
  serverURL: process.env.SERVER_URL,
  debug: process.env.NODE_ENV === 'development',
  telemetry: false,
  csrf: [process.env.SERVER_URL, process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
  rateLimit: {
    max: 750,
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
        Icon: NavLogo,
        Logo: Logo,
      },
    },
    bundler: webpackBundler(),
    webpack: (config) => {
      const newConfig = { ...config };

      newConfig.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname)];
      newConfig.resolve.extensions = [...(config.resolve.extensions || []), '.ts', '.tsx', '.js', '.jsx', '.json'];

      return newConfig;
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
    Authors,
    AuthorPhotos,
    Blog,
    BlogCoverImages,
    Tags,
    Locations,
    OpenGraphImages,
    PartnerLogos,
    Partners,
    Projects,
    ProjectImages,
    ProjectAssets,
    ServiceIcons,
    Services,
    Team,
    TeamMemberPhotos,
    Technologies,
    TechnologyLogos,
  ],
  globals: [
    AboutPage,
    BlogPage,
    Common,
    ContactForm,
    ContactsPage,
    CookiesPolicyPage,
    Footer,
    GeneralInfo,
    HomePage,
    PrivacyPolicyPage,
    ProjectsPage,
    ScheduleMeetingPage,
    SitemapPage,
    SupportUkrainePage,
    TermsOfUsePage,
    Languages,
    Navigation,
  ],
  localization: {
    locales,
    defaultLocale,
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
        [BlogAssets.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/blog-assets',
        },
        [BlogCoverImages.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/blog-cover-images',
        },
        [ServiceIcons.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/service-icons',
        },
        [PartnerLogos.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/partner-logos',
        },
        [ProjectImages.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/project-images',
        },
        [ProjectAssets.slug]: {
          adapter: googleCloudStorageAdapter,
          prefix: 'media/project-assets',
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
      uploadsCollection: OpenGraphImages.slug,
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
          required: false,
          localized: true,
        }),
      ],
      generateTitle: ({ doc }) => (doc as any)?.title || '',
      generateURL: ({ doc, slug, locale }) => {
        const document = doc as Record<string, any>;
        const localePrefix = locale === defaultLocale ? '' : locale;
        const documentSlug = document?.slug ? slug : '[slug]';
        let section = '';

        switch (slug) {
          case Blog.slug:
            section = 'blog';
            break;

          case Projects.slug:
            section = 'blog';
            break;

          default:
            break;
        }

        const url = new URL(path.join(localePrefix, section, documentSlug), process.env.PAYLOAD_PUBLIC_SITE_URL).href;

        return url;
      },
      tabbedUI: true,
    }),
    blurHash({
      collections: [AuthorPhotos.slug, PartnerLogos.slug, TeamMemberPhotos.slug, BlogCoverImages.slug],
    }),
  ],
});
