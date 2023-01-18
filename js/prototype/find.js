const user = [
    {id: 1, name: 'summer'},
    {id: 2, name: 'spring'},
    {id: 3, name: 'winter'}]
user.find(user => user.id == 3); //{id: 3, name: 'winter'}