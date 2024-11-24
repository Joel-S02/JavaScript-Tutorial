// Object De-Structure
const company = {
    name: "Ekayaa Consulting",
    openingYear: 2020,
    CEO: "Manini Puranik",
    CTO: "Rajnikanth Poojary",
    technicalArchitect: "Gayatri Ramamurthi",
    HR: "Jaya Sharma"
}

const {technicalArchitect, name, HR} = company;
console.log(technicalArchitect);
console.log(name)
console.log(HR)