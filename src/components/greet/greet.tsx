
type GreetProps = {
  name?: String
}

export const Greet = (props: GreetProps) => {
  const { name } = props
  return (
    <span>{`Hello${name ? (" " + name) : ""}`}</span>
  )
}
