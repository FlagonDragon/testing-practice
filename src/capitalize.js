function capitalize(str) {
    const firstLetter = str.at(0).toUpperCase();

    return firstLetter + str.slice(1);
}

module.exports = capitalize;