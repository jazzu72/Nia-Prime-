const handlers = [];

module.exports = {
  publish: (event) => {
    handlers.forEach((h) => h(event));
  },
  subscribe: (handler) => {
    handlers.push(handler);
  }
};
