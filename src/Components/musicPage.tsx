import '../CSS/MusicPage.css'

const MusicPage = () => {

    return(
        <div className="music-container">
            <div className='title-container'>
            <div className='page-title'>
                <span>What I'm listening to </span>
            </div>
            </div>
            <div className='embed-container'>
            <iframe title="Toms Top Tunes" src="https://open.spotify.com/embed/playlist/1Ykr8KwmiuixncSxZgnMHS?utm_source=generator&theme=0" className="spotify-embed" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    );
}

export default MusicPage;