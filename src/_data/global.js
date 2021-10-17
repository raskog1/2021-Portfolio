// Returns a random string
// This is used in base.html to ensure the user gets
// a fresh up-to-date version of the CSS each time

module.exports = {
  random() {
    const segment = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return `${segment()}-${segment()}-${segment()}`;
  },
};
