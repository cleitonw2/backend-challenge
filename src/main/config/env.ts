export const env = {
  port: process.env.PORT || 3000,
  defaultUrl: 'https://api.spaceflightnewsapi.net/v3/articles?publishedAt_gt=',
  url: 'https://api.spaceflightnewsapi.net/v3/articles?_limit=-1',
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongodb:docker@localhost:27017/api?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
}
