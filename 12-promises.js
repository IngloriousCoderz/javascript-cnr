fetchUsers((err, users) => {
  if (err) {
    return;
  }

  const [firstUser] = users;
  fetchUserDetail(firstUser.id, (userDetail) => {
    console.log(userDetail);
    fetchBalance(userDetail.ssn, (balance) => {
      console.log(balance);
    });
  });
});

const results = [null, null, null];

fetchUserDetail(firstUser.id, (userDetail1) => {
  results[0] = userDetail1;
});
fetchUserDetail(secondUser.id, (userDetail2) => {
  results[1] = userDetail2;
});
fetchUserDetail(thirdUser.id, (userDetail3) => {
  results[2] = userDetail3;
});

setTimeout(() => {
  console.log(results);
}, 3000);

const promise = fetchUsers();
promise.then((users) => {
  const [firstUser] = users;
  fetchUserDetail(firstUser.id, (userDetail) => {
    console.log(userDetail);
    fetchBalance(userDetail.ssn, (balance) => {
      console.log(balance);
    });
  });
});
promise.catch((err) => {
  console.error(err);
});

fetchUsers()
  .then((users) => {
    const [firstUser] = users;
    return fetchUserDetail(firstUser.id);
  })
  .then((userDetail) => {
    console.log(userDetail);
    return fetchBalance(userDetail.ssn);
  })
  .then((balance) => {
    console.log(balance);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {});

Promise.all([
  fetchUserDetail(firstUser.id),
  fetchUserDetail(secondUser.id),
  fetchUserDetail(thirdUser.id),
]).then(([firstUserDetail, secondUserDetail, thirdUserDetail]) => {
  console.log(firstUserDetail, secondUserDetail, thirdUserDetail);
});
