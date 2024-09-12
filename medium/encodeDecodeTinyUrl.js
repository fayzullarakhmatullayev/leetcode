const createTinyUrlService = () => {
  let id = 0;
  const urlMap = new Map();
  const baseUrl = 'http://tinyurl.com/';

  const encode = (longUrl) => {
    id++;
    const shortUrl = baseUrl + id;
    urlMap.set(shortUrl, longUrl);
    return shortUrl;
  };

  const decode = (shortUrl) => {
    return urlMap.get(shortUrl);
  };

  return { encode, decode };
};

const { encode, decode } = createTinyUrlService();

const url = 'https://actor.example.com/brake?bubble=bag';
console.log(encode(url));
console.log(decode(encode(url)));
