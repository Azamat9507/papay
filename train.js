// K- task

// function FootballPoints(wins, draws, losses) {
//     return (wins * 3) + (draws * 1) - (losses * 0);
//   }
  
//   console.log(FootballPoints(3, 4, 2));


//L - task


// function calculate(s) {
//     return eval(s);
//   }
  
//   console.log(calculate("1 + 1"));
//   console.log(calculate("4 * 5"));

//m-task

class Member {
  #counts = 0;

  addMember(num) {
    this.#counts += num;
  }

  removeMember(num) {
    this.#counts -= num;
  }

  inform() {
    console.log(`Hozirda mavjud ${this.#counts} memberlar.`);
  }
}

const member = new Member();
member.addMember(5);
member.removeMember(2);
member.inform(); 