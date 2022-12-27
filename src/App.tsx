import { Container, Row } from 'react-bootstrap';
import './styles/App.scss';
import MainInfoCard from './components/MainInfoCard/MainInfoCard';
import SubInfoCard from './components/SubInfoCard/SubInfoCard';

function App() {
  return (
    <Container className='App'>
      <Row>
        <MainInfoCard />
        <SubInfoCard />
      </Row>
    </Container>
  );
}

export default App;
