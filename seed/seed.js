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
            subHeader:
                'Enhancing your business<br>with the technology of the future'
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
        name: 'Solutions',
        pageTitle: 'Solutions | Techmeleon',
        meta: [
            {
                name: 'description',
                content:
                    'Adaptable & effective. Our Solutions are tailored to bring the best out of your business. From web design & marketing to full data and app development, we are here for you.'
            },
            {
                name: 'keywords',
                content: 'Web development,App Development,Creative Design'
            }
        ],
        content: {
            tag: 'Adaptable & effective',
            header: 'Solutions',
            subHeader:
                'Our Solutions are tailored to bring the best out of your business. From web design to full data and app development, we are here to fulfil your needs.'
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
    },
    {
        name: 'Contact',
        pageTitle: 'Contact | Techmeleon',
        meta: [
            {
                name: 'description',
                content:
                    'Begin Project or have a quick chat. Contact Techmeleon.'
            },
            {
                name: 'keywords',
                content: 'Web development,App Development,Creative Design'
            }
        ]
    },
    {
        name: 'Policies',
        pageTitle: 'Policies | Techmeleon',
        meta: [
            {
                name: 'description',
                content: 'Techmeleon Policies.'
            },
            {
                name: 'keywords',
                content: 'Policies'
            }
        ]
    }
]

const solutions = [
    {
        name: 'Business Analysis',
        route: 'business-analysis',
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
        solutions: ['Creative Design'],
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
        solutions: ['App Development', 'Data Clarity'],
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
        solutions: ['Creative Design'],
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
        solutions: ['Creative Design'],
        tags: ['Web development'],
        feature: '/projects/spa/feature.png',
        colors: {
            bgColor: '#d3b300',
            color: '#FFFFFF'
        }
    }
]

const policies = [
    {
        title: 'Cookie Policy for Techmeleon',
        route: 'cookie-policy',
        html:
            '<h2>What Are Cookies</h2><p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or <em>break</em> certain elements of the sites functionality.</p><p>For more general information on cookies see the <a href="https://en.wikipedia.org/wiki/HTTP_cookie">Wikipedia article on HTTP Cookies.</a></p><h2>How We Use Cookies</h2><p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p><h2>Disabling Cookies</h2><p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p><h2>The Cookies We Set</h2><ul><li><b>Email newsletters related cookies</b><p>This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</p></li><li><b>Forms related cookies</b><p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p></li><li><b>Site preferences cookies</b><p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p></li></ul><h2>Third Party Cookies</h2><p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p><p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p><p>For more information on <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">Google Analytics cookies.</a></p><h2>More Information</h2><p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren\'t sure whether you need or not it\'s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. </p><p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p><ul><li>Email: <a href="emailto:hello@techmeleon.co.uk">webcontact@techmeleon.co.uk</a></li><li>Phone: <a href="tel:+44800000000">0800 000 000</a></li></ul>'
    },
    {
        title: 'Privacy Policy for Techmeleon',
        route: 'privacy-policy',
        html:
            "<p>This policy sets out how we handle the Personal Data of our customers, suppliers, employees, workers and other third parties. The below definitions apply to this policy:</p><ul><li><b>Data Controller</b>: the person or organisation that determines when, why and how to process Personal Data. It is responsible for establishing practices and policies in line with the GDPR. We are the Data Controller of all Personal Data relating to our Company and Personal Data used in our business for our own commercial purposes.</li><li><b>Data Protection Officer (DPO)</b>: the person appointed by us with responsibility for data protection compliance.<p>That person is <b>Matthew Flint</b>.</p></li><li><b>Data Subject</b>: a living, identified or identifiable individual about whom we hold Personal Data.</li><li><b>General Data Protection Regulation (GDPR)</b>: the General Data Protection Regulation ((EU) 2016/679).</li><li><b>Personal Data</b>: any information identifying a Data Subject or information relating to a Data Subject that we can identify (directly or indirectly) from that data alone or in combination with other identifiers we possess or can reasonably access. Personal Data includes Sensitive Personal Data but excludes anonymous data or data that has had the identity of an individual permanently removed. Personal data can be factual (for example, a name, email address, location or date of birth) or an opinion about that person's actions or behaviour.</li><li><b>Personal Data Breach</b>: any act or omission that compromises the security, confidentiality, integrity or availability of Personal Data or the physical, technical, administrative or organisational safeguards that we or our third-party service providers put in place to protect it. The loss, or unauthorised access, disclosure or acquisition, of Personal Data is a Personal Data Breach.</li><li><b>Processing or Process</b>: any activity that involves the use of Personal Data. It includes obtaining, recording or holding the data, or carrying out any operation or set of operations on the data including organising, amending, retrieving, using, disclosing, erasing or destroying it. Processing also includes transmitting or transferring Personal Data to third parties.</li><li><b>Sensitive Personal Data</b>: information revealing racial or ethnic origin, political opinions, religious or similar beliefs, trade union membership, physical or mental health conditions, sexual life, sexual orientation, biometric or genetic data, and Personal Data relating to criminal offences and convictions.</li></ul><p>This policy applies to all Personal Data we Process regardless of the media on which that data is stored or whether it relates to past or present employees, workers, customers, clients or supplier contacts, shareholders, website users or any other Data Subject.</p><p>This policy applies to all staff. You must read, understand and comply with this policy when Processing Personal Data on our behalf. This policy sets out what we expect from you. Your compliance with this policy is mandatory. Any breach of this policy may result in disciplinary action.<h2>Scope</h2><p>We recognise that the correct and lawful treatment of Personal Data will maintain confidence in the organisation and will provide for successful business operations. Protecting the confidentiality and integrity of Personal Data is a critical responsibility that we take seriously at all times.</p><p>The DPO is responsible for overseeing this policy and any queries you have regarding this policy should be directed to the DPO.</p><h2>Lawfulness and fairness</h2><p>Personal data must be Processed lawfully, fairly and in a transparent manner in relation to the Data Subject.</p><p>The GDPR allows Processing for specific purposes, some of which are set out below:</p><ul><li>(a)  the Data Subject has given his or her consent;</li><li>(b)  the Processing is necessary for the performance of a contract with the Data Subject;</li><li>(c)   to meet our legal compliance obligations;</li><li>(d)  to pursue our legitimate interests for purposes where they are not overridden because the Processing prejudices the interests or fundamental rights and freedoms of Data Subjects.</li></ul><p>You must identify and document the legal ground being relied on for each Processing activity.</p><h2>Consent</h2><p>A Data Controller must only process Personal Data on the basis of one or more of the lawful bases set out in the GDPR, which include consent.</p><p>A Data Subject consents to Processing of their Personal Data if they indicate agreement clearly either by a statement or positive action to the Processing. Consent requires affirmative action so silence, pre-ticked boxes or inactivity are unlikely to be sufficient. If consent is given in a document which deals with other matters, then the consent must be kept separate from those other matters.</p><p>Data Subjects must be easily able to withdraw consent to Processing at any time and withdrawal must be promptly honoured. Consent may need to be refreshed if you intend to Process Personal Data for a different and incompatible purpose which was not disclosed when the Data Subject first consented.<p><p>Unless we can rely on another legal basis of Processing, explicit consent is usually required for Processing Sensitive Personal Data.<p><p>You will need to evidence consent captured and keep records of all consents so that the Company can demonstrate compliance with consent requirements.<p><h2>Transparency (notifying data subjects)</h2><p>The GDPR requires us to provide detailed, specific information to Data Subjects depending on whether the information was collected directly from Data Subjects or from elsewhere. Such information must be provided through appropriate notices which must be concise, transparent, intelligible, easily accessible, and in clear and plain language so that a Data Subject can easily understand them.</p><p>Whenever we collect Personal Data directly from Data Subjects we must provide the Data Subject with all the information required by the GDPR including the identity of the Data Controller and DPO, how and why we will use, process, disclose, protect and retain that Personal Data through a notice which must be presented when the Data Subject first provides the Personal Data.</p><p>When Personal Data is collected indirectly you must provide the Data Subject with all the information required by the GDPR as soon as possible after collecting/receiving the data. You must also check that the Personal Data was collected by the third party in accordance with the GDPR and on a basis which contemplates our proposed Processing of that Personal Data.</p><h2>Purpose limitation</h2><p>Personal Data must be collected only for specified, explicit and legitimate purposes. It must not be further Processed in any manner incompatible with those purposes.</p><p>You cannot use Personal Data for new, different or incompatible purposes from that disclosed when it was first obtained unless you have informed the Data Subject of the new purposes and they have consented where necessary.</p><h2>Data minimisation</h2><p>Personal Data must be adequate, relevant and limited to what is necessary in relation to the purposes for which it is Processed.</p><p>You may only Process Personal Data when performing your job if it requires it. You cannot Process Personal Data for any reason unrelated to your job.</p><p>You may only collect Personal Data that you require for your job: do not collect excessive data. Ensure any Personal Data collected is adequate and relevant for the intended purposes.<p><p>You must ensure that when Personal Data is no longer needed for specified purposes, it is deleted or anonymised.</p><h2>Accuracy</h2><p>Personal Data must be accurate and, where necessary, kept up to date. It must be corrected or deleted without delay when inaccurate.</p><p>You will ensure that the Personal Data we use and hold is accurate, complete, kept up to date and relevant to the purpose for which we collected it. You must check the accuracy of any Personal Data at the point of collection and at regular intervals afterwards. You must take all reasonable steps to destroy or amend inaccurate or out-of-date Personal Data.</p><h2>Storage limitation</h2><p>Personal Data must not be kept in an identifiable form for longer than is necessary for the purposes for which the data is processed.</p><p>You must not keep Personal Data in a form which permits the identification of the Data Subject for longer than needed for the legitimate business purpose or purposes for which we originally collected it including for the purpose of satisfying any legal, accounting or reporting requirements.</p><p>The Company will maintain retention policies and procedures to ensure Personal Data is deleted after a reasonable time for the purposes for which it was being held, unless a law requires such data to be kept for a minimum time.</p><p>You will take all reasonable steps to destroy or erase from our systems all Personal Data that we no longer require in accordance with all the Company's applicable records retention schedules and policies. This includes requiring third parties to delete such data where applicable.</p><p>You will ensure Data Subjects are informed of the period for which data is stored and how that period is determined in any applicable notice.</p><h2>Protecting Personal Data</h2><p>Personal Data must be secured by appropriate technical and organisational measures against unauthorised or unlawful Processing, and against accidental loss, destruction or damage.</p><p>We will develop, implement and maintain safeguards appropriate to our size, scope and business, our available resources, the amount of Personal Data that we own or maintain on behalf of others and identified risks (including use of encryption where applicable). We will evaluate and test the effectiveness of those safeguards. You are responsible for protecting the Personal Data we hold. You must implement reasonable and appropriate security measures against unlawful or unauthorised Processing of Personal Data and against the accidental loss of, or damage to, Personal Data. You must exercise particular care in protecting Sensitive Personal Data from loss and unauthorised access, use or disclosure.</p><p>You must follow all procedures and technologies we put in place to maintain the security of all Personal Data from the point of collection to the point of destruction. You may only transfer Personal Data to third-party service providers who agree to comply with the required policies and procedures and who agree to put adequate measures in place, as requested.</p><p>You must maintain data security by protecting the confidentiality, integrity and availability of the Personal Data, defined as follows:</p><ul><li>(a)  Confidentiality means that only people who have a need to know and are authorised to use the Personal Data can access it.</li><li>(b)  Integrity means that Personal Data is accurate and suitable for the purpose for which it is processed.</li><li>(c)   Availability means that authorised users are able to access the Personal Data when they need it for authorised purposes.</li></ul><h2>Reporting a Personal Data Breach</h2><p>The GDPR requires us to notify Personal Data Breaches to the regulator and, in certain instances, the Data Subject.</p><p>We have put in place procedures to deal with any suspected Personal Data Breach and will notify Data Subjects or any applicable regulator where we are legally required to do so.<p><p>If you know or suspect that a Personal Data Breach has occurred, do not attempt to investigate the matter yourself. Immediately contact the DPO and follow their instructions. You should preserve all evidence relating to the potential Personal Data Breach.</p><h2>Transfer limitation</h2><p>The GDPR restricts data transfers to countries outside the EEA (the EU countries and Iceland, Lichtenstein and Norway) in order to ensure that the level of data protection afforded to individuals by the GDPR is not undermined.</p><p>You are not permitted to transfer Personal Data outside the EEA and should you be required to do so as part of your job you should seek guidance first from the DPO.</p><h2>Data Subject's rights and requests</h2><p>Data Subjects have rights when it comes to how we handle their Personal Data. These include rights to:</p><ul><li>(a)  withdraw consent to Processing at any time;</li><li>(b)  receive certain information about Processing activities;</li><li>(c)   request access to their Personal Data that we hold;</li><li>(d)  prevent our use of their Personal Data for direct marketing purposes;</li><li>(e)  ask us to erase Personal Data if it is no longer necessary in relation to the purposes for which it was collected or Processed or to rectify inaccurate data or to complete incomplete data;</li><li>(f)    restrict Processing in specific circumstances;</li><li>(g)  challenge Processing which has been justified on the basis of our legitimate interests or in the public interest;</li><li>(h)  request a copy of an agreement under which Personal Data is transferred outside of the EEA;</li><li>(i)    prevent Processing that is likely to cause damage or distress to the Data Subject or anyone else;</li><li>(j)    be notified of a Personal Data Breach which is likely to result in high risk to their rights and freedoms; and</li><li>(k)   make a complaint to the supervisory authority.</li></ul><p>You must verify the identity of an individual requesting data under any of the rights listed above.</p><p>You must immediately forward any Data Subject request you receive to the DPO.</p><h2>Accountability</h2><p>As a Data Controller we must implement appropriate technical and organisational measures in an effective manner, to ensure compliance with data protection principles. We are responsible for, and must be able to demonstrate, compliance with the data protection principles.</p><h2>Record keeping</h2><p>The GDPR requires us to keep full and accurate records of all our data Processing activities.</p><p>You must keep and maintain accurate corporate records reflecting our Processing including records of Data Subjects' consents and procedures for obtaining consents.</p><p>These records should include, at a minimum, the name and contact details of the Data Controller and the DPO, clear descriptions of the Personal Data types, Data Subject types, Processing activities, Processing purposes, third-party recipients of the Personal Data, Personal Data storage locations, Personal Data transfers, the Personal Data's retention period and a description of the security measures in place.</p><h2>Privacy By Design and Data Protection Impact Assessment</h2><p>We are required to implement privacy by design measures when Processing Personal Data by implementing appropriate technical and organisational measures in an effective manner, to ensure compliance with data privacy principles.</p><p>You must assess what privacy by design measures can be implemented on all programs/systems/processes that Process Personal Data by taking into account the following:</p><ul><li>(a)  the state of the art;</li><li>(b)  the cost of implementation;</li><li>(c)   the nature, scope, context and purposes of Processing; and</li><li>(d)  the risks of varying likelihood and severity for rights and freedoms of Data Subjects posed by the Processing.</li></ul><p>Data controllers must also conduct data privacy impact assessments (DPIA) in respect to high risk Processing. A DPIA are tools and assessments used to identify and reduce risks of a data processing activity.</p><p>You should conduct a DPIA (and discuss your findings with the DPO) when implementing major system or business change programs involving the Processing of Personal Data.</p><p>For more information about what should be included in a DPIA please contact the DPO.</p><h2>Direct marketing</h2><p>We are subject to certain rules and privacy laws when marketing to our customers.</p><p>The right to object to direct marketing must be explicitly offered to the Data Subject in an intelligible manner so that it is clearly distinguishable from other information.</p><p>A Data Subject's objection to direct marketing must be promptly honoured. If a customer opts out at any time, their details should be suppressed as soon as possible. Suppression involves retaining just enough information to ensure that marketing preferences are respected in the future.</p><h2>Sharing Personal Data</h2><p>Generally we are not allowed to share Personal Data with third parties unless certain safeguards and contractual arrangements have been put in place.</p><p>You may only share the Personal Data we hold with another employee or agent if the recipient has a job-related need to know the information and the transfer complies with GDPR.</p><p>You may only share the Personal Data we hold with third parties, such as our service providers if:</p><ul><li>(a)  they have a need to know the information for the purposes of providing the contracted services;</li><li>(b)  sharing the Personal Data complies with the notice provided to the Data Subject and, if required, the Data Subject's consent has been obtained;</li><li>(c)   the third party has agreed to comply with the required data security standards, policies and procedures and put adequate security measures in place;</li><li>(d)  the transfer complies with any applicable cross border transfer restrictions; and</li><li>(e)  a fully executed written contract that contains GDPR approved third party clauses has been obtained.</li></ul>"
    }
]

const seedData = () => {
    const variables = [
        {
            collection: '/pages',
            data: pages
        },
        {
            collection: '/solutions',
            data: solutions
        },
        {
            collection: '/projects',
            data: projects
        },
        {
            collection: '/policies',
            data: policies
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
