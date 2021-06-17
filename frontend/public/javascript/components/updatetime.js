import { browserTimeZone } from "./localtimezone.js"
import { fetchServerTimeZone } from "./fetchtimezone.js"

const updateTime = () => {
  const date = new Date();
  fetchServerTimeZone(date);
  browserTimeZone(date);
};

export { updateTime };

