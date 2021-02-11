import Header from './components/Header'
import Footer from './components/Footer'
import { Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import {  BrowserRouter as Router, Route} from 'react-router-dom'
import ExamScreen from './screens/ExamScreen'
import QuestionScreen from './screens/QuestionScreen'
import QuestionFormScreen from './screens/QuestionFormScreen'
import AddFields from './screens/AddFields'

function App() {
  return (
   <Router>
      <Header></Header>
      <Container>
        <main className='py-3' >
            <Route path='/' component={HomeScreen} exact></Route>
            <Route path='/exam/:id' component = {ExamScreen} exact ></Route>
            <Route path='/exam/:id/questions' component = {QuestionScreen} exact ></Route>
            <Route path='/questions/add' component = {QuestionFormScreen} exact ></Route>
            <Route path='/questions/addfields' component = {AddFields} exact ></Route>
        </main>
        </Container>
      
   </Router>
  );
}

export default App;
