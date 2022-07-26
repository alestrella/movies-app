import Box from 'components/Box';
import { Title, SubHeading, Text } from 'components/Text/Text.styled';
import { Button } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <main>
      <Box display="grid" gridTemplateColumns="80px 1fr" as="section">
        <Title>Not found</Title>
        <Box textAlign="center">
          <SubHeading>Opps, you've lost in space</SubHeading>
          <Text>We can not find the page that you're looking for...</Text>
          <Button to="/">Go Home</Button>
        </Box>
      </Box>
    </main>
  );
};
export default NotFoundPage;
