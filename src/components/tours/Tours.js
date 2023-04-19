import  "./Tours.css"
function Tours(props) {
    return (
        <>
        {console.log(props)}
        <section className="main">
            {props.data.map((tour) => {
                return(
                <div className="tourDiv" key={tour.id}>
                    <h3>{tour.name}</h3>
                    <img src={tour.image} alt=""></img>
                </div>
                )
            }
            )}
            </section>
        </>
    )
}
export default Tours;