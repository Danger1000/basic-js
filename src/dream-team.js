module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
}
return members.filter(isName).map(getFirstLetter).sort().join('');
};
function isName(member) {
return typeof member === 'string';
}
function getFirstLetter(member) {
return member.trim().charAt(0).toUpperCase();
};
