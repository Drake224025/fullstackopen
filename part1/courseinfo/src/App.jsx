import Header from "./Header";
import Total from "./Total";
import Content from "./Content";

const App = () => {
  const course = "Half Stack application development";

  const content = [
    {
      part: "Fundamentals of React",
      exercise: 10,
    },
    {
      part: "Using props to pass data",
      exercise: 7,
    },
    {
      part: "State of a component",
      exercise: 14,
    },
  ];
  const total = content.reduce((acc, item) => acc + item.exercise, 0);

  return (
    <>
      <Header course={course} />
      <Content content={content} />
      <Total total={total} />
    </>
  );
};

export default App;
