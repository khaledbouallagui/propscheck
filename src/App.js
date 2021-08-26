import './App.css';
import ProfileComponent from './profile/profileComponent';
import myImage from './profile/khaled.png';



function App() {

  const handelName = (name ) => {
    alert(`Hi i am ${name}`)
}
const imgStyle = {
  margin: '16px',
  padding: '16px',
  boxSizing: 'border-box',
  borderRadius: '5px',
  boxShadow: '0 2px 5px cyan'
}

  return (
    <div className="App">
      <ProfileComponent fullName="Bouallagui Khaled" bio="Born on 04th September, 1985 in Tunisia" 
          profession="Full Stack JS Developer" myName= {handelName}> <img src={myImage} alt="Khaled " style={imgStyle}/> </ProfileComponent>
    </div>
  );
}

export default App;
