export default function FakeComponent({ title = 'Fake component.' }: { title?: string }): JSX.Element {
  return (<h2>{title}</h2>);
}
