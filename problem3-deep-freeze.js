// Problem 3 — Deep Freeze
function deepFreeze(obj) {
  Object.values(obj).forEach((value) => {
    if (typeof value === 'object' && value !== null && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj);
}

const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
config.api.baseUrl = 'https://changed.com'
config.debug = true                        
console.log(config.api.baseUrl, config.debug) 
console.log(Object.isFrozen(config.api))      
