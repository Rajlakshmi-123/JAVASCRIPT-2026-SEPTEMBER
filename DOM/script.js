localStorage.setItem("name", "siddhant"); // [6, 7]

// 2. Data Fetch Karna (Nikalna)

// 3. Data Update/Overwrite Karna
// Agar "name" pehle se exist karta hai toh setItem use update kar dega
localStorage.setItem("name", "sidd singh ")/ [8]

// 4. Specific Data Remove Karna
 //localStorage.removeItem("name"); // [10]

// 5. Poora Local Storage Khali Karna
// localStorage.clear(); // [11]

let val = localStorage.getItem("name"); // [9]
console.log(val); //