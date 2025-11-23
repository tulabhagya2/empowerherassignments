
const employees=[{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

];
const employeesEvaluation=(employees)=>{
    const filtered=employees.filter(emp=>emp.tasksCompleted>5);
    //map
    const mapped=filtered.map(emp=>{
        let performanceLevel="";
        if(rating>4.5){
            performanceLevel="Excellent";
        }
        else if(rating>=3 && rating<=4.5){
            performanceLevel="Good";
        }
        else{
            performanceLevel="Needs Improvement"
        }
        return{
            name:emp.name,
            performance:performanceLevel
        };



    });
    const priority={
        "Excellent":1,
        "Good":2,
        "Needs Improvement":3
    }
    const sorted=mapped.sort((a,b)=>
    priority[a.performance]-priority[b.performance]
    );
    return sorted;
    }
console.log(employeesEvaluation(employees))

