import { fetchServerTimeZone, browserTimeZone } from "./timezones.js"

const updateTime = () => {
  const date = new Date();
  fetchServerTimeZone(date);
  browserTimeZone(date);
};

export { updateTime };

