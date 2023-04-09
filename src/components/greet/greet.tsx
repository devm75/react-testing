
import { GreetProps } from "./greet.types"

export const Greet = (props: GreetProps) => {
  const { name } = props
  return (
    <span>{`Hello${name ? (" " + name) : ""}`}</span>
  )
}
