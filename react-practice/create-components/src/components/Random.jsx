function Random() {
  // let number = Math.random() * 10;
  let number = Math.floor(Math.random() * 50000) + 1;
  return (
    <h1
      style={{
        backgroundColor: "blue",
        color: "white",
        height: "35px",
      }}
    >
      random number is : {number}
    </h1>
  );
}

export default Random;
