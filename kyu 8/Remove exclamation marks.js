








function removeExclamationMarks(s) {
  return [...s].map(ele =>{  if(ele != '!') return ele }).join``;
  }