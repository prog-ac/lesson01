const json = require('./users.json');
for (let i = 0; i < json.users.length; i++) {
  if ((json.users[i].rank === 'A') && (json.users[i].years < 5)) {
    const salaryNum = 3000 * (json.users[i].years) + 100000
    json.users[i].salary = salaryNum
  } else if ((json.users[i].rank === 'A') && (json.users[i].years >= 5)) {
    const salaryNum = 3000 * (json.users[i].years) + 120000
    json.users[i].salary = salaryNum
  } else if (json.users[i].rank === 'B') {
    const salaryNum = 4000 * (json.users[i].years) + 140000
    json.users[i].salary = salaryNum
  } else {
    const salaryNum = 5000 * (json.users[i].years) + 160000
    json.users[i].salary = salaryNum
  }
}
//*降順にソート
json.users.sort(
  function (a, b) {
    return (a.salary < b.salary ? 1 : -1)
  })
//*名前と給与を表示する
for (i = 0; i < json.users.length; i++) {
  console.log(`${json.users[i].name}:${json.users[i].salary}`)
}