// problem 4
function oddFriend(friends) {
    for (const friend of friends) {
        // error handle 
        if (typeof friend != 'string') {
            return 'Error! This is not a string';
        }
        // main condition 
        else if (friend.length % 2 != 0) {
            return friend;
        }
    }
    return "This is even Name";
}
var friends = ['moon', 'shakawath', 'rokib','yousuf'];
var oddResult = oddFriend(friends);
console.log(oddResult);