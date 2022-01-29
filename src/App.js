import CreateStyle from './styles/global'
import Layout from './components/Layout';
import AppRouter from './routes';

function App() {
  return (
    <Layout>
      <AppRouter/> 
      <CreateStyle/>
    </Layout>
  );
}

export default App;
