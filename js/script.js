
class User {
  constructor(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
  }


  get fullName() {
    return `${this.name} ${this.surname}`;
  }


  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
}


class Student extends User {
  constructor(name, surname, birthYear) {
    super(name, surname, birthYear);
    this.grades = [];
    this.attendance = [];
  }

  addGrade(grade) {
    if (grade >= 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log("Grade must be between 0 and 100");
    }
  }


  markAttendance(isPresent) {
    this.attendance.push(isPresent);
  }


  getAverageAttendance() {
    if (this.attendance.length === 0) return 0;
    const presentDays = this.attendance.filter(day => day).length;
    return (presentDays / this.attendance.length) * 100;
  }


  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  }
}


class Teacher extends User {
  constructor(name, surname, birthYear) {
    super(name, surname, birthYear);
    this.activeGroups = [];
    this.allGroups = [];
  }


  addGroup(groupName) {
    this.allGroups.push(groupName);
    this.activeGroups.push(groupName);
  }


  changeGroupStatus(groupName, isActive) {
    if (!this.allGroups.includes(groupName)) {
      console.log("Group does not exist");
      return;
    }

    if (isActive) {
      if (!this.activeGroups.includes(groupName)) {
        this.activeGroups.push(groupName);
      }
    } else {
      this.activeGroups = this.activeGroups.filter(
        group => group !== groupName
      );
    }
  }
}


