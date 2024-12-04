import toyData from './toyData';
import './index.css';
/* Getting Data from Toy Data File */
const data = toyData();

function Header() {
  return (
    <header>
      <h1>Toy Store</h1>
    </header>
  );
}

function ShowcaseToys() {
  const dataSize = data.length;

  return (
    <main>
      <div className="toy-logo">
        <img
          src="/logo192.avif"
          alt="toy-logo"
          style={{ width: '192px', borderRadius: '20px' }}
        />
        <div className="freepik">
          <a href="http://www.freepik.com">Toy Shop Illustration - Freepik</a>
        </div>
      </div>
      <h2 className="collection-heading-wrapper">
        <div className="collection-heading">Toy Collection for Kids</div>
      </h2>
      <div>
        <ul className="showcaseToys">
          {dataSize > 0 ? (
            data.map((toys) => <ListToys toysObjects={toys} key={toys.id} />)
          ) : (
            <p> No Toys Available Right Now! Check back later</p>
          )}
        </ul>
      </div>
    </main>
  );
}

function ListToys({ toysObjects }) {
  return (
    <li className={`toysObjects ${toysObjects.soldOut ? 'sold-out' : ''}`}>
      <h3>{toysObjects.title}</h3>
      <img className="image" src={toysObjects.image} alt={toysObjects.title} />
      <div className="toysTraits">
        <p>
          <strong> Manufactured Date: </strong>
          {toysObjects.manufactered}
        </p>
        <p>
          <strong>Description: </strong>
          <span>{toysObjects.description}</span>
        </p>
        <p>
          <strong>Price: </strong>${toysObjects.price}
        </p>
        <p>
          <strong>Status: </strong>{' '}
          {toysObjects.soldOut ? 'Sold Out' : 'Available'}
        </p>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openingHours = 9;
  const closingHours = 17;
  const isOpen = hours >= openingHours && hours <= closingHours;

  return (
    <>
      <footer>
        {isOpen ? (
          <ShopTimings closingHour={closingHours} openingHours={openingHours} />
        ) : (
          <p>
            Physical Shop is closed until {openingHours}:00 A.M. but online
            purchases are available 24/7
          </p>
        )}
      </footer>
    </>
  );
}

function ShopTimings({ closingHour, openingHours }) {
  return (
    <div>
      <p>
        Physical Shop is open from {openingHours}:00 A.M. to {closingHour}:00
        P.M.
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <ShowcaseToys />
      <Footer />
    </div>
  );
}

export default App;
