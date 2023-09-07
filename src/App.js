import HomePage from './components/HomePage';
import Header from './components/Header';
import ScholarshipsPage from './components/ScholarshipsPage';
import BlogPage from './components/BlogPage'
import MainHome from './components/MainHome';
import Contact from './components/Contact';
import AboutUsPage from './components/AboutUsPage';
import FAQPage from './components/FAQPage';
import Footer from './components/Footer';
import BlogPostDetail from './components/BlogPostDetail'
import HowToApply from './components/HowToApply';
import PrivacyPolicy from './components/PrivacyPolicy'
import PageWrapper from './components/PageWrapper';
import  Form from './components/Form/ScholarshipFoem'
import CountryList from './components/Countries/CountriesList';
import CountryScholarships from './components/Countries/CountryScholarships';
import SearchPage from './components/Search/SearchQuery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <>
    <Header/>

    <Routes>
         <Route path="/" element={<PageWrapper title='Yotor Scholarships'><MainHome /></PageWrapper>} />
          <Route path="/home" element={<PageWrapper title='All Scholarships'><HomePage /></PageWrapper>} />
          <Route path="/scholarships/:id" element={<PageWrapper title='Scholarship Details'><ScholarshipsPage /> </PageWrapper>}/> 
     
          <Route path="/blog/:id" element={<PageWrapper title='Blog post details'><BlogPostDetail/></PageWrapper>} /> 

          <Route path="/blog" element={<PageWrapper title='All blogs'><BlogPage/></PageWrapper>} /> 
         
          <Route path="/contact" element={<PageWrapper title='Contact page'><Contact /></PageWrapper>} />
          <Route path="/about-us" element={ <PageWrapper title="About Us"><AboutUsPage /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper title='Frequently Asked Questions'><FAQPage /></PageWrapper>} />
          <Route path="/how_to_apply" element={<PageWrapper title='How to apply page'><HowToApply/></PageWrapper>} />
          <Route path="/privacy-policy" element={<PageWrapper title='Privacy Policy'><PrivacyPolicy/></PageWrapper>} />
          {/* <Route path="/search_page/:query" element={<PageWrapper title='Search Any Scholarship'><SearchPage/></PageWrapper>} /> */}
          <Route path ="/country" element={<PageWrapper title='Countries '><CountryList/></PageWrapper>}/>
          <Route path ="/country/:country" element={<PageWrapper title='Countries Detail'><CountryScholarships/></PageWrapper>}/>
            {/* <Route path ="/form" element={<PageWrapper title='form'><Form/></PageWrapper>}/> */}
           </Routes> 
           <Footer/>


    </>
     
  );
}

export default App;
