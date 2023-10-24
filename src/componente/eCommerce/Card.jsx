
export const Card = ({ productos }) => {

    const {id, image, price, title,description} = productos;
 
    return (
<>
        <div className="card-deck" >
            <div className="card">
                <div>
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}<small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        </>
    )
}