import React from 'react';
import Card from './Card';
import Data from './Animedata';
const App = () => {

    return (<>

        <div className="all">
            <div className='heading'>

                <h1>The Best Anime to watch </h1>

            </div>
            <div className='Cards'>

                {Data.map((val) => {
                    return (<Card key={val.id} image={val.image} Name={val.name} desc={val.desc} link={val.links} />);
                })}

            </div>
        </div>

    </>);
}

export default App;