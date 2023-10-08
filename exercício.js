let list1 = [10, 20, 30];
let list2 = [5, 10, 15];
let list3 = [];

for (let i = 0; i < list1.length; i++) {
    total += list1[i];
    list3.push(list1[i] + list2[i]);
}

console.log(list3);