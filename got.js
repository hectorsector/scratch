import got from "got";

try {
  const { statusCode } = await got.get("https://vimeo.com/967252742");
  console.log(statusCode);
} catch (error) {
  console.log(error.response.statusCode);
}
