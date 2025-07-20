const config = {
    apiUrl: (() => {
            const url = process.env.NEXT_PUBLIC_ENVIRONMENT === 'prod' ? process.env.NEXT_PUBLIC_BASE_API_URL : 'http://localhost:3000/api';
            return url

    })(),
    dbConnection: {
        host: process.env.NEXT_PUBLIC_ENVIRONMENT === 'prod' ? 'SOME_PROD_URL' : 'localhost',
        port: 5432,
        database: process.env.NEXT_PUBLIC_DB_NAME,
        user: process.env.NEXT_PUBLIC_DB_USER,
        password: process.env.NEXT_PUBLIC_DB_PASSWORD,
        ssl: process.env.NEXT_PUBLIC_ENVIRONMENT === 'prod'  ? true : false
    },
    baseServerApi: process.env.NEXT_PUBLIC_BASE_JSON_SERVER_URL || 'http://localhost:3001',
    permyApi: process.env.NEXT_PUBLIC_PERMY_API || 'https://api.permy.co.uk/mixCount',
    productApi: process.env.NEXT_PUBLIC_PRODUCT_URL || 'https://dummyjson.com/products',
    jwt_secret: process.env.NEXT_PUBLIC_JWT_SECRET,
    filterOptions: [
        {name: "Team Wins", keyName: "wins"},
        {name: "Team Draws", keyName: "draws"},
        {name: "Team Losses", keyName: "losses"}
    ]
}

export default config;
