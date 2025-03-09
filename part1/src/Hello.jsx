import PropTypes from 'prop-types';

const Hello = (props) => {
    console.log(props)
    return (
      <div>
  
        <p>Hello {props.name},  you are {props.age} years old</p>
      </div>
    )
  }

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

export default Hello;