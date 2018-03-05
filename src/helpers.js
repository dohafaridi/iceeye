const jsonNoCacheOptions = {
  credentials: "same-origin",
  headers: {
    Accept: "application/json",
    "Cache-Control": "no-cache"
  }
};

/**
 * Fetch a JSON from a URL.
 *
 * @example
 * fetchJson('/foo/bar').then(json => console.log(json));
 *
 * @param {String} url - The source URL of the JSON
 * @return {Promise} - A promise with the data content
 */
export const fetchJson = url =>
  fetch(url, jsonNoCacheOptions).then(response => response.json());
