let displayTheDate = (accounts) => {
    //maps the accounts array and gives you an array of only the login dates
    const lastLogin = accounts.map(account => account.last_login.date_time)
    //takes the date and turns it into miliseconds from some day in 1970
    const mappedParsedValue = lastLogin.map(login => Date.parse(login))
    //sorts through the array and re-orders the number from largest to smallest, putting the milisecond value of the latest year at index 0
    let milisecondLogin = mappedParsedValue.sort(function(a, b){return b - a})
    //turns the milisecond value back to a date
    let mostRecentLogin = new Date(milisecondLogin[0])
    return mostRecentLogin
}

console.log(displayTheDate(accounts))
