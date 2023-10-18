import users from './users.js'
//console.log(users);

//*Завдання 1
//Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = users => {
  
};

console.log(calculateTotalBalance(users)); // 20916

//*Завдання 2
//Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => {
 const   usersWithFriend = users.reduce((total, user) => {
        if (user.friends.includes(friendName)) {
            total.push(user.name);
        };
        return total
    }, [])
    return  usersWithFriend
};

console.log(getUsersWithFriend(users, 'Briana Decker')); 
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

//*Завдання 3
//Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users => 
users.sort((firstUset, secondUser) => firstUset.friends.lehgth - secondUser.friends.lehgth).map((user) => user.name);
console.log(getNamesSortedByFriendsCount(users));

//*Завдання 4
//Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = users => {
  
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

