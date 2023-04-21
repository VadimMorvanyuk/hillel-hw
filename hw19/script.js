const person = () => {
  let year = prompt("When were you born?(Year)");
  let city = prompt("Where do you live?");
  let sport = prompt("What kind of sport do you like?");
  switch (city) {
    case "Kyiv":
      alert("You live in the capital of Ukraine!");
      break;
    case "London":
      alert("You live in the capital of Great Britain!");
      break;
    case "Washington":
      alert("You live in the capital of the USA");
      break;
    case null:
      alert(`Unfortunately, you didn't write about your city`);
      break;
    default:
      alert(`You live in ${city}`);
      break;
  }
  switch (sport) {
    case "Football":
      alert("Do you want to be like Ronaldo?");
      break;
    case "Boxing":
      alert("Do you want to be like Klitschko?");
      break;
    case "Running":
      alert("Do you want to be like Usain Bolt");
      break;
    case null:
      alert(`Unfortunately, you didn't write about your sport`);
      break;
    default:
      alert("This sport is so cool!");
  }
  alert(`You are ${2023-year}`)
};
person();
