function getAge(birthdate, now = new Date()) {
  let age = now.getFullYear() - birthdate.getFullYear();
  const monthDifference = now.getMonth() - birthdate.getMonth();
  const dayDifference = now.getDate() - birthdate.getDate();
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  return age;
}
