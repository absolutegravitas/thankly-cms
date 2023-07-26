import type { Page } from './page'
import type { Post } from './post'
import type { Product } from './product'
import type { Order } from './order'
import type { Media } from './media'


// export interface Config {
//   collections: {
//     media: Media;
//     pages: Page;
//     posts: Post;
//     'reusable-content': ReusableContent;
//     users: User;
//     forms: Form;
//     redirects: Redirect;
//   };
//   globals: {
//     footer: Footer;
//     'main-menu': MainMenu;s
//     'top-bar': TopBar;
//   };
// }

export interface User {
  id: string;
  stripeCustomerID?: string;
  email: string;
  name?: string;
  business?: string;

  hash?: string;
  lockUntil?: string;
  loginAttempts?: number;
  password?: string;
  resetPasswordExpiration?: string;
  resetPasswordToken?: string;
  roles?: ('admin' | 'customer' | 'user')[];
  salt?: string;
  skipSync?: boolean;

  // orders & carts
  orders?: Order[];
  cart: {
    items: {
      product?: string | Product | any;
      quantity?: number;
      id?: string;
    }[];
  };

  createdAt: string;
  updatedAt: string;
}

export interface Brand {
  id: string;
  basicInfo: {
    name: string;
    tagline: string;
    domain: string;
    copyright: string;

    homePage?: string | Page;
    blogPage?: string | Page;
    shopPage?: string | Page;
    // cookieNotice: string;
  };
  styleLight: {
    logo?: string | Media;
    colorText: string;
    colorAccent: string;
    colorBackground: string;
  };
  styleDark: {
    logo?: string | Media;
    colorText: string;
    colorAccent: string;
    colorBackground: string;
  };

  updatedAt?: string;
  createdAt?: string;
}

export interface Redirect {
  id: string;
  from: string;
  to: {
    type?: 'reference' | 'custom';
    reference:
    | { value: string | Page; relationTo: 'pages'; }
    | { value: string | Post; relationTo: 'posts'; };
    url: string;
  };

  updatedAt: string;
  createdAt: string;
}

export interface Menu {
  id: string;
  header: {
    navItems?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference:
        | { value: string | Page; relationTo: 'pages'; }
        | { value: string | Post; relationTo: 'posts'; };
        url: string;
        label: string;
        appearance?: 'primary' | 'secondary' | 'default';
      };
      id?: string;
    }[];
  };
  footer: Footer;
  topBar: TopBar;
  updatedAt?: string;
  createdAt?: string;
}

export interface TopBar { text?: string; icon?: string; }

export interface Footer {
  columns?: {
    columnName: string;
    navItems?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference:
        | { value: string | Page; relationTo: 'pages'; }
        | { value: string | Post; relationTo: 'posts'; };
        url: string;
        label: string;
        appearance?: 'primary' | 'secondary' | 'default';
      };
      id?: string;
    }[];
    id?: string;
  }[];
}

export interface Heading {
  text: string
  level: number
  id: string
}