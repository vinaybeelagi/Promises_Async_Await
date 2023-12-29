function analyzeMarks(students) {
    if(students.length === 0) {
        return{
            averageGrade:0,
            topPerformer:null,
            gradeDistribution:{},
        };
    }
    const totalMarks = students.reduce((sum,student) => sum + student.marks,0);
    const averageGrade = totalMarks/students.length;

    const topPerformer =students.reduce((maxStudent,currentStudent) => 
    currentStudent.marks>maxStudent.marks ? currentStudent :maxStudent
    );

    const gradeDistribution = students.reduce((distribution,student) => {
        const grade = calculateGrade(student.marks);
        distribution[grade] = (distribution[grade] || 0) +1;
            return distribution;
          },{});

          return {
            averageGrade:parseFloat(averageGrade.toFixed(2)),
            topPerformer:topPerformer,
            gradeDistribution:gradeDistribution,
          };
    }
        function calculateGrade(marks){
            if(marks>= 90) return 'A';
            if(marks>= 80) return 'B';
            if(marks>= 70) return 'c';
            if(marks>= 60) return 'D';
            else return 'F';
        }
        const students = [
            { name: "Student 1", marks: 85 },
            { name: "Student 2", marks: 92 },
            { name: "Student 3", marks: 78 },
            { name: "Student 4", marks: 67 },
            { name: "Student 5", marks: 94 },
            { name: "Student 6", marks: 72 },
            { name: "Student 7", marks: 88 },
            { name: "Student 8", marks: 95 },
            { name: "Student 9", marks: 60 },
            { name: "Student 10", marks: 82 },
            { name: "Student 11", marks: 75 },
            { name: "Student 12", marks: 89 },
            { name: "Student 13", marks: 70 },
            { name: "Student 14", marks: 93 },
            { name: "Student 15", marks: 79 },
          ];
          
          const analysis = analyzeMarks(students);
          console.log(analysis);