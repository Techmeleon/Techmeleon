const admin = require('firebase-admin')

const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://techmeleon-website.firebaseio.com'
})

const pages = [
    {
        name: 'Landing',
        pageTitle: 'Techmeleon',
        meta: [
            {
                name: 'description',
                content:
                    'We provide digital solutions to provide creative, transparent and decision making ideas. Give us a call to analyse your requirements so we can provide the right solution to enhance your business.'
            },
            {
                name: 'keywords',
                content: 'Web development,App Development,Creative Design'
            }
        ],
        content: {
            subHeader: 'Using the right technology<br>to enhance your business'
        }
    },
    {
        name: 'Projects',
        pageTitle: 'Projects | Techmeleon',
        meta: [
            {
                name: 'description',
                content:
                    'Passionate & Focused. With over 12 years experience in business analysis, development and UX design. We are here to help you achieve your goals.'
            },
            {
                name: 'keywords',
                content: 'Web development,App Development,Creative Design'
            }
        ],
        content: {
            tag: 'Passionate & Focused',
            header: 'Projects',
            subHeader:
                'With over 12 years experience in business analysis, development and UX design. We are here to help you achieve your goals.'
        }
    },
    {
        name: 'Services',
        pageTitle: 'Services | Techmeleon',
        meta: [
            {
                name: 'description',
                content:
                    'Adaptable & effective. Our services are tailored to bring the best out of your business. From web design & marketing to full data and app development, we are here for you.'
            },
            {
                name: 'keywords',
                content: 'Web development,App Development,Creative Design'
            }
        ],
        content: {
            tag: 'Adaptable & effective',
            header: 'Services',
            subHeader:
                'Our services are tailored to bring the best out of your business. From web design to full data and app development, we are here for you.'
        }
    },
    {
        name: 'Who',
        pageTitle: 'About | Techmeleon',
        meta: [
            {
                name: 'description',
                content:
                    'One big family. Forged on a 30 year friendship, we have come together to offer our knowledge, experience & brutal honesty.'
            },
            {
                name: 'keywords',
                content: 'Web development,App Development,Creative Design'
            }
        ],
        content: {
            tag: 'One Big Family',
            header: 'Meet Matt & James',
            subHeader:
                'Forged on a 30 year friendship, we have come together to offer our knowledge, experience & brutal honesty.'
        }
    }
]

const services = [
    {
        name: 'Business Solutions',
        route: 'business-solutions',
        tag: 'Adaptable & Effective',
        short: 'Solve',
        summary:
            'We can analyse your business to provide the most cost effective and efficient solutions.',
        budget: ['£2,000 to £5,000', '£5,000 to £10,000', '£10,000+']
    },
    {
        name: 'Creative Design',
        route: 'creative-design',
        tag: 'Website & Branding',
        short: 'Design',
        summary:
            'Partnering with you to create exciting, memorible & meaningful experiences.',
        budget: ['£3,000 to £5,000', '£5,000 to £10,000', '£10,000+']
    },
    {
        name: 'App Development',
        route: 'app-development',
        tag: 'Time & Cost Saving',
        short: 'Apps',
        summary:
            'Build cost efficient apps to enhance your business and increase accuracy & transparency.',
        budget: ['£5,000 to £10,000', '£10,000 to £25,000', '£25,000+']
    },
    {
        name: 'Digital Marketing',
        route: 'digital-marketing',
        tag: 'Targeted & effective',
        short: 'Marketing',
        summary:
            'Leveraging SEO, social media and online marketing we can increase your leads.',
        budget: ['£1,000 to £2,500', '£2,500 to £5,000', '£5,000+']
    },
    {
        name: 'Data Clarity',
        route: 'data-clarity',
        tag: 'Transparent & Essential',
        short: 'Clarity',
        summary:
            'Transforming data into meaningful, business driven & decisioning making paths.',
        budget: ['£1,000 to £2,500', '£2,500 to £5,000', '£5,000+']
    },
    {
        name: 'Cloud Migration',
        route: 'cloud-migration',
        tag: 'Stable & Efficent',
        short: 'Cloud',
        summary:
            'Futurproofing your business with flexible, scalable and most importantly secure cloud systems.',
        budget: ['£500 to £1,000', '£1,000 to £2,500', '£2,500+']
    }
]

const projects = [
    {
        name: 'CABS Group',
        route: 'cabs-group',
        summary: 'Making Buildings Beautiful Again.',
        category: 'Featured',
        services: ['Creative Design'],
        tags: ['Web development'],
        feature: '/projects/cabs/feature.png',
        colors: {
            bgColor: '#0085AB',
            color: '#FFFFFF'
        }
    },
    {
        name: 'Seven Oaks Pricing',
        route: 'seven-oaks-pricing',
        summary: 'Providing stable results for SO Modular tenders.',
        category: 'Featured',
        services: ['App Development', 'Data Clarity'],
        tags: ['Local App', 'Business Intelligence', 'Document Generation'],
        feature: '/projects/sop/feature.png',
        colors: {
            bgColor: '#82b968',
            color: '#FFFFFF'
        }
    },
    {
        name: 'SO Modular',
        route: 'so-modular',
        summary: 'The Timber Frame Specialists',
        category: 'Featured',
        services: ['Creative Design'],
        tags: ['Web development', 'Branding'],
        feature: '/projects/som/feature.png',
        colors: {
            bgColor: '#82b948',
            color: '#FFFFFF'
        }
    },
    {
        name: 'Swansea Property',
        route: 'cabs-group',
        summary: 'Making Buildings Beautiful Again',
        category: 'Featured',
        services: ['Creative Design'],
        tags: ['Web development'],
        feature: '/projects/spa/feature.png',
        colors: {
            bgColor: '#d3b300',
            color: '#FFFFFF'
        }
    }
]

const seedData = () => {
    const variables = [
        {
            collection: '/pages',
            data: pages
        },
        {
            collection: '/services',
            data: services
        },
        {
            collection: '/projects',
            data: projects
        }
    ]
    // Get a reference to the database service
    const database = admin.database()

    database
        .ref('/')
        .remove()
        .then(result => {
            console.log('---- SUCCESS DELETE ----') //eslint-disable-line
            variables.forEach(e => {
                database
                    .ref(e.collection)
                    .set(e.data)
                    .then(result => {
                        console.log('---- ' + e.collection + ' SUCCESS ----') //eslint-disable-line
                    })
                    .catch(e => {
                        console.log('---- ' + e.collection + ' ERROR ----') //eslint-disable-line
                        console.log(e) //eslint-disable-line
                        console.log('---- ----- ----') //eslint-disable-line
                    })
            })
        })
        .catch(e => {
            console.log('---- DELETE ERROR ----') //eslint-disable-line
            console.log(e) //eslint-disable-line
            console.log('---- ----- ----') //eslint-disable-line
        })
}

seedData()
