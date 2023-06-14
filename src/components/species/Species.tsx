import Container from "@mui/material/Container";

interface IProps {
  name: string;
  language: string;
  average_lifespan: string;
}

export default function Species({ name, language, average_lifespan }: IProps) {
  return (
    <Container maxWidth="lg" sx={{ pl: "2rem" }}>
      <li>
        {name}
        <ul>
          <li>{language}</li>
          <li>{average_lifespan}</li>
        </ul>
      </li>
    </Container>
  );
}
