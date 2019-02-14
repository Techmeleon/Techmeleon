import express from 'express'
// import xssFilters from 'xss-filters'
// import validator from 'validator'
import nodemailer from 'nodemailer'
const config = {
    email: {
        service: 'Outlook365',
        auth: {
            user: 'webcontact@techmeleon.co.uk',
            pass: 't3chm3leon@2'
        }
    },
    other: {
        deliverEmail: 'hello@techmeleon.co.uk, james.williams@techmeleon.co.uk'
    }
}

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    // const attributes = [
    //     'name',
    //     'company',
    //     'email',
    //     'telephone',
    //     'solution',
    //     'budget',
    //     'message',
    //     'date'
    // ]

    // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
    // const sanitizedAttributes = attributes.map(n =>
    //     validateAndSanitize(n, req.body[n])
    // )

    // True if some of the attributes new values are false -> validation failed
    // const someInvalid = sanitizedAttributes.some(r => !r)

    // if (someInvalid) {
    //     // Throw a 422 with a neat error message if validation failed
    //     return res
    //         .status(422)
    //         .json({ error: 'Ugh.. That looks unprocessable!' })
    // }
    const result = sendMail(req.body.data)

    if (result) {
        res.status(200).json({ message: 'Success' })
    } else {
        res.status(422).json({ message: 'Ugh.. That looks unprocessable!' })
    }
})
// const rejectFunctions = new Map([
//     ['name', v => v.length < 4],
//     ['email', v => !validator.isEmail(v)]
// ])
// const validateAndSanitize = (key, value) => {
//     // If map has key and function returns false, return sanitized input. Else, return false
//     return (
//         rejectFunctions.has(key) &&
//         !rejectFunctions.get(key)(value) &&
//         xssFilters.inHTMLData(value)
//     )
// }

const sendMail = data => {
    console.log(config.email) //eslint-disable-line
    const transporter = nodemailer.createTransport(config.email)

    const emailDetails = {
        from: config.email.auth.user,
        to: config.other.deliverEmail,
        subject:
            data.company === ''
                ? `${data.name}`
                : `${data.name} @ ${data.company}` + ' wishes to make contact!',
        text: `Dear Techmeleon,\n\rI can be contact on the following email: ${
            data.email
        }
        ${data.telephone === '' ? '' : ' or Tel: ' + data.telephone}\r\n
        ${data.solution === '' ? '' : 'Solution: ' + data.solution}\r\n
        ${data.budget === '' ? '' : 'Budget: ' + data.budget}\r\n
        ${data.message === '' ? '' : 'Message: ' + data.message}\r\n
        ${data.date === '' ? '' : 'Appointment: ' + data.date}\r\n
        `,
        html:
            'Dear Techmeleon,<br><br>' +
            '<b>' +
            (data.company === ''
                ? `${data.name}<br>`
                : `${data.name} @ ${data.company}` +
                  ' wishes to make contact!</b><br><br>') +
            `<b>Email: </b><a href="emailto:${data.email}">${
                data.email
            }</a><br>` +
            (data.telephone === ''
                ? ''
                : `<b>Tel: </b><a href="tel:${data.telephone}">${
                      data.telephone
                  }</a><br>`) +
            (data.solution === ''
                ? ''
                : `<b>Solution: </b>${data.solution}<br>`) +
            (data.budget === '' ? '' : `<b>Budget: </b>${data.budget}<br>`) +
            (data.date === '' ? '' : `<b>Appointment: </b>${data.date}<br>`) +
            (data.message === '' ? '' : `<b>Message: </b>${data.message}<br>`)
    }

    return transporter
        .sendMail(emailDetails)
        .then(response => {
            return true
        })
        .catch(e => {
            return false
        })
}

export default {
    path: '/api/contact',
    handler: app
}
