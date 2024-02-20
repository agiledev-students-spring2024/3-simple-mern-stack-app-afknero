import './About.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * A React component that represents the About page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  const [data, setData] = useState({ content: [], image: ''});

  const fetchData = () => {
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(res => {
        const data = res.data;
        setData(data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>About Us</h1>
      <div id='container'>
        <div>
          <img src={data.image} alt="github profile image" />
        </div>
        <div id='content'>
          {data.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </>
  )
}

// make this component available to be imported into any other file
export default About
