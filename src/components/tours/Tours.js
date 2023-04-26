import  "./Tours.css"
import Tour from"./tour/Tour"
function Tours(props) {
    return (
        <>
        {console.log(props)}
        <section className="main">
            {props.data.map((tour) => {
                return(
                    <Tour tour={tour} key={tour.id} />
                )
            }
            )}
            </section>
        </>
    )
}
export default Tours;