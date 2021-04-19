const APP_PREFIX = 'AUTOTEST-';

function loadInitialState() {
  return {
    ...loadInitialStateFrom(localStorage),
    ...loadInitialStateFrom(sessionStorage)
  }
}

function loadInitialStateFrom(targetStorage) {
  return Object.keys(targetStorage).reduce((state, storageKey) => {
    if (storageKey.includes(APP_PREFIX)) {
      const stateKeys = storageKey
        .replace(APP_PREFIX, '')
        .toLowerCase()
        .split('.')
        .map(key =>
          key
            .split('-')
            .map((token, index) =>
              index === 0
                ? token
                : token.charAt(0).toUpperCase() + token.slice(1)
            )
            .join('')
        );
      let currentStateRef = state;
      stateKeys.forEach((key, index) => {
        if (index === stateKeys.length - 1) {
          currentStateRef[key] = JSON.parse(targetStorage.getItem(storageKey));
          return;
        }
        currentStateRef[key] = currentStateRef[key] || {};
        currentStateRef = currentStateRef[key];
      });
    }
    return state;
  }, {});
}

function setItem(key, value) {
  localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
}

function getItem(key) {
  return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`));
}

function removeItem(key) {
  localStorage.removeItem(`${APP_PREFIX}${key}`);
}

function sessionSetItem(key, value) {
  sessionStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
}

function sessionGetItem(key) {
  return JSON.parse(sessionStorage.getItem(`${APP_PREFIX}${key}`));
}

function sessionRemoveItem(key) {
  sessionStorage.removeItem(`${APP_PREFIX}${key}`);
}

export default {
  loadInitialState,
  setItem,
  getItem,
  removeItem,
  sessionSetItem,
  sessionGetItem,
  sessionRemoveItem
}
