import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Layout>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Layout>
  );
};

export default App;