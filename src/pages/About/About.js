import fruitBasket from '../../assets/fruitBasket.png'

export const About = () => {
    return ( 
        <div className="aboutContainer">
            <div className="leftAbout">
                <img src={fruitBasket} alt="FruitBasket" />
            </div>
            <div className="rightAbout">
                <p className='line'></p>
                <p style={{color: '#18D26E', margin: '10px 0', fontSize: '20px'}}>Welcome</p>
                <h2><span style={{color: '#18D26E'}}>kikapu</span></h2>
                <p className='aboutText'>Kikapu provides data-driven payment services to connect famers, restaurants and customers (students in our case). Our platform connects food producers (farmers), restaurants, and consumers (university students) through a demand and supply simulation model. By leveraging data, we efficiently match the needs of farmers and restaurants with the demand for food, ensuring equitable distribution and affordable access to nutritious meals for consumers. <br/><br/>

                
                <b>FOOD SUPPLY CHAIN SYSTEM SIMPLIFIED</b> <br /><br />

                From the farm to folk through restaurants and hotels, we have made the process easy for producers, consumers and hotels. Our goal is to address the food insecurity in Africa by solving the root cause and vast challenges of fragmentation, food wastage and lack of financial empowerment for famers, food vendors and daily customers (especially students).</p>
            </div>
        </div>
     );
}
 