import Image from '../img/fores.jpg';

const styles = {
    textField: {
      width: "100%",
      marginBottom: 36,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 7,
      borderRadius: 4,
      boxSizing: "border-box",
      border: "1px solid rgba(255,255,255,0.5)",
      color: 'red'
    },
    errorField: {
      color: "#f44336",
      position: "absolute",
      zIndex: 10,
      top: 50,
      left: 7,
      fontFamily: "Comic Sans MS",
    },
    inputBox: {
      position: "relative",
    },

    paperContainer: {
        height: "100vh",
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    formContainer: {
        padding: "50px 35px 35px 35px",
        border: "2px solid #e0e0e0",
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    textHeadline: {
        marginBottom: 30,
        textAlign: "center",
        color: "#e0e0e0",
    }
  }

export default styles