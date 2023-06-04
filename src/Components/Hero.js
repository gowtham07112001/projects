import '../Components/HeroStyle.css';

function Horo(props) {
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="heroimg" />

                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.btnText}</a>
                </div>
            </div>
        </>
    )
}

export default Horo;