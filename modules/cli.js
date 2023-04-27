import getArgs from '../helpers/args.js'
import { getWeather } from '../services/api.service.js'
import { printError, printHelp, printSuccess, printWeather } from '../services/log.service.js'
import { TOKEN_DICTIONARY, getKeyValue, saveKeyValue } from '../services/storage.service.js'

const saveToken = async (token) => {

    if(!token.length){
        printError("Token doesn't exist")
        return
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token was saved ')
    } catch(error){
        printError(error.message)
    } 
}

const saveCity = async (city) => {

    if(!city.length){
        printError("City doesn't exist")
        return
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('City was saved ')
    } catch(error){
        printError(error.message)
    } 
}


const getForecast = async () => {

    try {
        const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city))
        const res = await getWeather(city)
        printWeather(res)
    } catch(err) {
        if(err?.res?.status == 404){
            printError('City not found')
        } else if (err?.res?.status == 401){
            printError('Invalid token')
        } else {
            printError(err.message)
        }
    }
}

const startCLI = () => {
    const args = getArgs(process.argv)
   
    if(args.h){
        // help
      return  printHelp()
    }

    if(args.s){
        // save city
       return saveCity(args.s)
    }

    if(args.t){
        // save token
      return saveToken(args.t)
    }
    // result

   return  getForecast()
    
}

startCLI()