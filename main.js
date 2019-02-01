let displayTheDate = (accounts) => {
    //maps the accounts array and gives you an array of only the login dates
    const lastLogin = accounts.map(account => account.last_login.date_time)
    //takes the date and turns it into miliseconds from some day in 1970
    const mappedParsedValue = lastLogin.map(login => Date.parse(login))
    //sorts through the array and re-orders the number from largest to smallest, putting the milisecond value of the latest year at index 0
    let milisecondLogin = mappedParsedValue.sort(function(a, b){return b - a})
    //refrence to the value at index 0 of the array - the latest date
    let milisecondDateRepresentation = milisecondLogin[0]
    //creates new array of dates that match the latest date milisecond value
    const finalDate = lastLogin.filter(eachDate => Date.parse(eachDate) === milisecondDateRepresentation)
    return finalDate[0]
}

console.log(displayTheDate(accounts))
