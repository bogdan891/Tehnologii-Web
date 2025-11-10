// let evenCollection = document.querySelectorAll("tbody tr:nth-child(even)")
// let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)")

// if (evenCollection && evenCollection.length > 0) {
//     for (let item of evenCollection)
//         item.bgColor = 'red'
// }

// if (oddCollection && oddCollection.length > 0) {
//     for (let item of oddCollection)
//         item.bgColor = 'yellow'
// }

let rows = document.querySelectorAll("tbody tr");
rows.forEach((row, index) => {
    if(index == 0) row.style.backgroundColor = "blue";
    else if (index === rows.length - 1) row.style.backgroundColor = "green";
    else if (index % 2 === 0) row.style.backgroundColor = "violet";
});