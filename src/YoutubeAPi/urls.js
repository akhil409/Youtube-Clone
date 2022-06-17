import { api_key } from "./apikey";

export const youtubeUrls = {
    searchUrl : (word) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${word}&maxResults=30&key=${api_key}`
}