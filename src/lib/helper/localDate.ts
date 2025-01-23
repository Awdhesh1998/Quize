export const toLocalDate = (dateString:string|Date) =>{
    
    // Convert string to Date object
    let date = new Date(dateString);

    // Format date to local string
    let localDate = date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
    });
    return localDate.toString();
}
// // Example date string
// let dateString = "2025-01-18T14:30:00Z";


// console.log(localDate); // Output: 18 January 2025
