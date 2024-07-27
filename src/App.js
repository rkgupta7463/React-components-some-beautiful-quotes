//Tradintionally == HTML page but in react === Component
import "./App.css";
import CardAnimation from "./components/CardAnimation";

const App = () => {
    return (
        <>
        <h1>Some Beautiful Quotes of Components</h1>
        <div className="Container">
            <CardAnimation quote="The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." author="Helen Keller"/>
            <CardAnimation quote="Beauty is not in the face; beauty is a light in the heart." author="Kahlil Gibran"/>
            <CardAnimation quote="The future belongs to those who believe in the beauty of their dreams." author="Eleanor Roosevelt"/>
            <CardAnimation quote="Everything has beauty, but not everyone sees it." author="Confucius"/>
            <CardAnimation quote="The only way to do great work is to love what you do." author="Steve Jobs"/>
            <CardAnimation quote="To love and be loved is to feel the sun from both sides." author="David Viscott"/>
            <CardAnimation quote="In the end, we will remember not the words of our enemies, but the silence of our friends." author="Martin Luther King Jr"/>
            <CardAnimation quote="The only limit to our realization of tomorrow will be our doubts of today." author="Franklin D. Roosevelt"/>
            <CardAnimation quote="Happiness is not something ready-made. It comes from your own actions." author="Dalai Lama"/>
        </div>
        </>
    )};

export default App;