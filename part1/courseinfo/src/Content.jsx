export default function Content({ content }) {
  const items = [];

  for (const item of content) {
    items.push(
      <p key={`${item.part}-${item.exercise}`}>
        {item.part} {item.exercise}
      </p>
    );
  }
  console.log({ items });
  return <>{items}</>;
}
