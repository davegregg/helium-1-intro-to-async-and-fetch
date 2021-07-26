// Remember! "Synchronous" code runs in sequence, in order in time -- one line after the other.
// But "Asynchronous" code cannot run until...
// 1. all synchronous code is complete; AND,
// 2. it is ready.
//
// So, the first setTimeout below will run its callback function when...
// 1. all the synchronous lines of code are complete; and,
// 2. after the requested timeout duration has elapsed - 10 milliseconds in this case.

console.log("First synchronous console.log()")
setTimeout(() => console.log("First ASYNC console.log()"), 10)
setTimeout(() => console.log("Second ASYNC console.log()"), 20)
setTimeout(() => console.log("Third ASYNC console.log()"), 0)
console.log("Second synchronous console.log()")

for (let count = 0; count < 1000000; count += 1) {
    // Do something 1 million times.
}

console.log("Whew! The long loop is done.")



// Promises (like those we get from Fetch()) will follow the exact same rule.
// The callback you pass to the first .then() will be run when...
// 1. all the synchronous lines of code in your program are complete; and,
// 2. after fetch() has successfully received a Response from the server/API.
//
// The callback you pass to the second .then() will be run when...
// 1. all the synchronous lines of code in your program are complete; and,
// 2. after `response.json()` has successfully converted the raw binary data into JSON, and then from JSON into a real JavaScript object you can work with.

let clueCount = 5
fetch(`https://jservice.io/api/random?count=${clueCount}`)
  .then(response => response.json()) // First, we must convert the raw data in the Response from JSON into a real JS object.
  .then(clues => {                   // Then, when that is finished, we have data we can work with.
        for (let clue of clues) {
            usedClues.push(clue)

            let details = document.createElement("details")
            let summary = document.createElement("summary")

            details.append(summary)
            summary.append(`${clue.category.title}: ${clue.question}`)
            details.append(clue.answer)

            document.body.append(details)
        }
    })



// Some other free public APIs you can request data from!!:
// https://github.com/public-apis/public-apis
//
// Some will require an "API key/token" to allow you access.
// These are mostly for _backend_ servers to use.
// This is because if you put an API key/token in your frontend code,
// that key/token could be stolen by someone else.
//
// This is why I recommend sticking with free APIs which DON'T
// require an API key/token to access, until you are ready to create
// a simple backend server and learn how to protect your API keys/tokens.
// As Spider-Man says, "With great power comes great responsibility."