
import { Container } from "@mui/material";


interface IPersonPRops {
  name: string,
  hairColor: string,
  eyeColor: string


}

export function Person({ name, hairColor, eyeColor }: IPersonPRops) {
  return (
    <Container sx={{pl: '3rem'}} >

    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
    </Container>
  );
}

