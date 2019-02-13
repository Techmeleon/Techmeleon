import express from 'express'
// import xssFilters from 'xss-filters'
// import validator from 'validator'
import nodemailer from 'nodemailer'

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

    sendMail(req.body.data)
    res.status(200).json({ message: 'Success' })
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
    const transporter = nodemailer.createTransport({
        sendmail: true,
        newline: 'unix',
        path: '/usr/sbin/sendmail'
    })
    transporter.sendMail({
        from: data.email,
        to: 'hello@techmeleon.co.uk',
        subject: 'New contact form message',
        text: data.name + data.msg
    })
}

export default {
    path: '/api/contact',
    handler: app
}
