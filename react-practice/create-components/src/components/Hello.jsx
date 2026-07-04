function Hello() {
  let myName = "Muhammad Hamza";
  let number = 1037;

  let fullName = () => {
    return "muhammad hamza";
  };

  return (
    <h3>
      My name is {fullName()}. I got {number} marks in ICS. I love Programming.
    </h3>
  );
}
export default Hello;
