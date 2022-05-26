function inDescendingOrder(array) {
  return Array.from(array).sort((user1, user2) => user2.age - user1.age);
}

function inAlphabeticalOrder(array) {
  return Array.from(array).sort((user1, user2) => user1.name.localeCompare(user2.name));
}

function allAges(array) {
  const allAges = [];
  array.map(user => {
    allAges.push(user.age);
  });
  return allAges;
}

export { inAlphabeticalOrder, inDescendingOrder, allAges };
