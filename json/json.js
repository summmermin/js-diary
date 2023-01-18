const summer = {
    name: "summer",
    hobby: ["dance", "cooking"],
    pet: "kong",
    num: 1
}

const jsonSummer = JSON.stringify(summer)
console.log(typeof jsonSummer, jsonSummer)
// "string" '{"name":"summer","hobby":["dance","cooking"],"pet":"kong","num":1}'

const todos = [
    {id: 1, content: 'css', alive: true}, {id: 2, content: 'hmtl', alive: true}
]

const todosJson = JSON.stringify(todos)
console.log(typeof todosJson, todosJson)
//"string" '[{"id":1,"content":"css","alive":true},{"id":2,"content":"hmtl","alive":true}]'
console.log(typeof parseTodos, parseTodos)
// "object" Array [Object { id: 1, content: "css", alive: true }, Object { id: 2, content: "hmtl", alive: true }]