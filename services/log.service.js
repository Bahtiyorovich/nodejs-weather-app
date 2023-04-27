import chalk from "chalk" // chalk package - bu ma'lumotlarni cli da turli ranglarda chop etuvchi npm paket
import dedent from "dedent-js" // dedent-js bu console da natijalarni tab larsiz ko'rsatadi.

// view error 
const printError = (error) => {
    console.log(chalk.bgRed('Error: ') + ' ' + error)
} 

// view success data
const printSuccess = (message) => {
    console.log(chalk.bgGreen('Success: ') + ' ' + message)
}

// help center function
const printHelp = () => {
    console.log(dedent`
        ${chalk.bgCyan('HELP')}
        -s [CITY] for install city
        -h for help
        -t [API_KEY] for saving token
    `)
}

// cli results

const printWeather = (res, icon) => {
    console.log(dedent`
    ${chalk.bgYellowBright('WEATHER')} City weather ${res.name}
    ${icon} ${res.weather[0].description}
    Temprature: ${res.weather.temp} (feels like ${res.main.feels_like})
    Humidity: ${res.main.humidity}%
    wind speed: ${res.wind.speed} m/s
    `)
}

export  { printError, printSuccess, printHelp, printWeather }