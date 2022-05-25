const employees = []

function Employee(name, job_title, salary, status){
    this.name = name
    this.job_title = job_title
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = function(){
        console.log(name + ", " +  job_title + ", " +  salary + ", " +  status)
        
        
    }
}
var jack = new Employee("Jack", "General Manager", "$3/year")
var jill = new Employee("Jill", "Supreme Manager", "$4/year")
var skyler = new Employee("Skyler", "Galactic Manager", "$5/year")

employees.push(jack, jill, skyler)
employees[1].status = "Part Time"
employees[2].status = "Contract"
// jack.printEmployeeForm()
// jill.printEmployeeForm()
// skyler.printEmployeeForm()


console.log(employees)