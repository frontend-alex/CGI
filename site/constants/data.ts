import { ROUTES } from "@/config/routes"
import { Headset, Mail, MessageSquareText, Phone, UserPlus, Users } from "lucide-react"

export const navbarLinks = [
    {
        label: 'Home',
        url: ROUTES.PUBLIC.LANDING
    },
    {
        label: 'Contact',
        url: ROUTES.PUBLIC.CONTACT
    },
    {
        label: 'Login',
        url: ROUTES.APP.LOGIN
    }
]


export const footerLinks = [
    {
        label: 'Company',
        links: [
            {
                label: 'About us',
                url: 'https://www.cgi.com/en/about-us'
            },
            {
                label: 'Alliances',
                url: 'https://www.cgi.com/en/alliances'
            },
            {
                label: 'Country sites',
                url: '#',
                class: 'openModal'
            },
            {
                label: 'ESG',
                url: 'https://www.cgi.com/en/esg'
            },
            {
                label: 'Investors',
                url: 'https://www.cgi.com/en/investors'
            },
            {
                label: 'Locations',
                url: 'https://www.cgi.com/en/about-us/locations'
            },
            {
                label: 'Newsroom',
                url: 'https://www.cgi.com/en/newsroom'
            }
        ]
    },
    {
        label: 'Resource center',
        links: [
            {
                label: 'Articles',
                url: 'https://www.cgi.com/en/mediacenter/articles'
            },
            {
                label: 'Blogs',
                url: 'https://www.cgi.com/en/blogs'
            },
            {
                label: 'Case studies',
                url: 'https://www.cgi.com/en/case-studies'
            },
            {
                label: 'Events',
                url: 'https://www.cgi.com/en/mediacenter/events'
            },
            {
                label: 'Podcasts',
                url: 'https://www.cgi.com/en/podcasts'
            },
            {
                label: 'Viewpoints',
                url: 'https://www.cgi.com/en/mediacenter/viewpoints'
            },
            {
                label: 'See more',
                url: 'https://www.cgi.com/en/mediacenter'
            }
        ]
    },
    {
        label: 'Support',
        links: [
            {
                label: 'Accessibility',
                url: 'https://www.cgi.com/en/accessibility'
            },
            {
                label: 'Privacy',
                url: 'https://www.cgi.com/en/privacy'
            },
            {
                label: 'Terms of use',
                url: '/RapidWeb/en/legal.aspx'
            },
            {
                label: 'Careers FAQ',
                url: 'https://www.cgi.com/en/careers/faq'
            },
            {
                label: 'Cookie Management Center',
                url: '#',
                class: 'cookie-consent',
                dataCc: 'show-preferencesModal'
            }
        ]
    }
]


export const ContactInfo = [
    {
        label: 'How can we help you?',
        icon: Headset,
        links: [
            {
                label: 'Contact HelpDesk',
                url: '/contact/helpdesk',
                icon: Mail
            },
            {
                label: '1-888-430-9906',
                url: 'tel:+18884309906',
                icon: Phone
            }
        ]
    },
    {
        label: 'New Clients',
        icon: UserPlus,
        links: [
            {
                label: 'Contact Sales',
                url: '/contact/sales',
                icon: Mail
            }
        ]
    },
    {
        label: 'Existing clients',
        icon: Users,
        links: [
            {
                label: 'Contact Business Services',
                url: '/contact/business-services',
                icon: Mail
            }
        ]
    },
    {
        label: 'Feedback',
        icon: MessageSquareText,
        links: [
            {
                label: 'Email us',
                url: '/contact/feedback',
                icon: Mail
            }
        ]
    }
]

