import Searcher from '../components/ui/Searcher';
import Navbar from '../components/navbar/Navbar';
import Section from "../components/Section";
import Card from '../components/ui/Card';

const Buy = () => {
    return (
        <div className='relative'>
            <Navbar/>
            <Searcher className='overflow-hidden relative bg-[#F7F7F7]'/>
            <Section className='overflow-hidden relative bg-[#F7F7F7]'>
                <h1>Buy</h1>
                <Card/>
            </Section>
        </div>
    );
};

export default Buy;