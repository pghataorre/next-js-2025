const config = {
    apiUrl: (() => {
            const url = process.env.NEXT_PUBLIC_ENVIRONMENT === 'prod' ? process.env.NEXT_PUBLIC_BASE_API_URL : 'http://localhost:3000/api';
            return url

    })(),
    baseServerApi: process.env.NEXT_PUBLIC_BASE_JSON_SERVER_URL || 'http://localhost:3001',
    permyApi: process.env.NEXT_PUBLIC_PERMY_API || 'https://api.permy.co.uk/mixCount',
    productApi: process.env.NEXT_PUBLIC_PRODUCT_URL || 'https://dummyjson.com/products',
    filterOptions: [
        {name: "Team Wins", keyName: "wins"},
        {name: "Team Draws", keyName: "draws"},
        {name: "Team Losses", keyName: "losses"}
    ]
}

export default config;
