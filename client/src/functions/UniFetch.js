/**
 * Set undefined instead of unused params
 *
 * @param {string} path - default '/'
 * @param {string} method - default 'GET'
 * @param {object} headers - default {'Content-Type': 'application/json'}
 * @param {object} body
 */

const uniFetch = async (
  path = '/',
  method = 'GET',
  headers = { 'Content-Type': 'application/json' },
  body
) => {
  const url = 'http://192.168.31.101:5000/todos' + path;
  try {
    let res = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(res.message || 'Some server error!');
    }

    res = await res.json();

    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default uniFetch;
