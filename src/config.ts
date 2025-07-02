const config = {
    apiUrl: process.env.ENVIRONMENT === 'prod' ? '/api/' : 'http://localhost:3000/api',
    baseServerApi: process.env.BASE_JSON_SERVER_URL || 'http://localhost:3001',
    permyApi: process.env.PERMY_API || 'https://api.permy.co.uk/mixCount',
    productApi: process.env.PRODUCT_URL || 'https://dummyjson.com/products',
    filterOptions: [
        {name: "Team Wins", keyName: "wins"},
        {name: "Team Draws", keyName: "draws"},
        {name: "Team Losses", keyName: "losses"}
    ]
}

export default config;