export const getQueryParameter = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export const updateQueryParameter = (
  key,
  value,
  url = window.location.href,
) => {
  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  var separator = url.indexOf('?') !== -1 ? '&' : '?';
  if (url.match(re)) {
    return url.replace(re, '$1' + key + '=' + value + '$2');
  } else {
    return url + separator + key + '=' + value;
  }
};

export const getRandomString = (length) => {
  const letters = [];
  const hex = '0123456789abcdef';
  for (let i = 0; i < length; i++) {
    letters[i] = hex[Math.floor(Math.random() * hex.length)];
  }
  return letters.join('');
};
