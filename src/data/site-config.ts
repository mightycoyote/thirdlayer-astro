export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Life in the Third Layer',
    subtitle: 'Whatever seems important to me at the moment',
    description: 'Whatever seems important to me at the moment',
    image: {
        src: '/cropped-banner5.jpg',
        alt: ''
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Blog Archive',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [],
    socialLinks: [
        {
            text: 'Flickr',
            href: 'https://www.flickr.com/photos/thirdlayer/'
        }
    ],

    postsPerPage: 8
};

export default siteConfig;
