import dotenv from 'dotenv'
import { nanoid } from 'nanoid'
dotenv.config()

export const URLS = {
    LOGIN_URL: 'https://todoist.com/users/showlogin'
}

export const CREDENTIALS = {
    STANDARD_USER: {
        USERNAME: process.env.STANDARD_USER_USERNAME,
        PASSWORD: process.env.STANDARD_USER_PASSWORD,
    }
}

export const INVALIDCREDENTIALS = {
    INVALID_USER: {
        BADEMAIL: process.env.STANDARD_INVALID_USER_EMAIL,
        BADPASSWORD: process.env.STANDARD_INVALID_USER_PASSWORD,
        BLANKEMAIL: process.env.STANDARD_BLANK_USER_EMAIL,
        BLANKPASSWORD: process.env.STANDARD_BLANK_USER_PASSWORD
    }
}

export const TaskName = 'New Task' + parseInt(Math.random() * 1000)
export const taskDesc = 'The New task'
export const projectNamed = 'Tarea ' + nanoid();