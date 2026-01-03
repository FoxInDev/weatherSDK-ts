import getWeather from "./services/weatherService";

async function main() {
    try {
        const weather = await getWeather(1);

        console.log('Погода: ', weather);
    } catch(err) {
        console.error('Ошибка получения погоды: ', err);
    }
}

main();