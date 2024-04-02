import { LinkBtn, Section, Title } from "./NotFoundStyled";

function NotFound() {
  return (
    <Section>
      <LinkBtn to="/">Back to main</LinkBtn>
      <Title>Page Not Found :(</Title>
    </Section>
  );
}
export default NotFound;
