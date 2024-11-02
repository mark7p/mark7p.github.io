import './Home.css';
import LanguagesWidget from './LanguagesWidget/LanguagesWidget';

function Home() {
    return (
        <div className="flex body w-full h-full items-center justify-center px-2 gap-4">
            <div className="intro-text flex flex-col">
                <h1 className="name text-6xl pb-2  text-left font-extrabold">
                    Gen Mark Paniterce
                </h1>
                <p className='text-2xl max-w-3xl text-left text-white/60'>What’s good? I’m a front-end dev passionate about making interactive web experiences and laying down music tracks whenever inspiration strikes.</p>
            </div>
            <LanguagesWidget></LanguagesWidget>
        </div>
    )
}

export default Home;