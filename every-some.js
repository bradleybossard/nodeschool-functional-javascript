function checkUsersValid(goodUsers) {
  const ids = goodUsers.map(function(user) { return user.id });
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(user) {
      return ids.includes(user.id);
    });
  };
}

module.exports = checkUsersValid
