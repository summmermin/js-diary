const person = {
    name: 'summer',
    car: 1
}
for (const key in person) {
    console.log(`${key}은 ${person[key]}`)
}