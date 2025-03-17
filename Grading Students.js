function gradingStudents(grades) {
   const updatedGrade = grades.reduce((acc, item) => {
      const remainingToNextFive = 5 - (item % 5);
      item < 38 || remainingToNextFive > 2 ? acc.push(item) : acc.push(item + remainingToNextFive);
      return acc;
   }, [])
   return updatedGrade;
}

// console.log(gradingStudents([73, 67, 38, 33]));