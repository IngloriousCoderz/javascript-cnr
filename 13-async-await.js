async function checkFirstUsersBalance() {
  try {
    const users = await fetchUsers();
    const [firstUser] = users;

    const userDetail = await fetchUserDetail(firstUser.id);

    const balance = await fetchBalance(userDetail.ssn);

    return balance;
  } catch (err) {
    console.error(err);
  }
}

checkFirstUsersBalance().then(console.log);

async function fetchThreeUsers() {
  const [firstUser, secondUser, thirdUser] = await Promise.all([
    fetchUserDetail(firstUser.id),
    fetchUserDetail(secondUser.id),
    fetchUserDetail(thirdUser.id),
  ]);
}
