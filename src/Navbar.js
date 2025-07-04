import React from "react";
import styled from "styled-components";//3. local styling and can be use by name.module.css(css + jss)
// import NavStyle from "./navbar.module.css"

//now no need of div we directly use Nav now
const Nav =  styled.div`
    height: 70px;
    background: linear-gradient(170deg, #1bc059, #0d47a1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  
`;

//hover is used in this
const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left: 20px ;
    &:hover{color:#f00};

`;


const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

//so this dynamic styling 
const CartCount = styled.div`
    background: ${props => props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${props => (props.show? "visible": "hidden")};
`;


//1. inline style now not in index,css usin {{}} but too massice.
class Navbar extends React.Component{
    render(){
        const {cartCount}= this.props;
        return(
            <>
            {/* <div style={{ width: "100%", height: 70, background:"red", display:"flex", justifyContent:"space-between" }}> */}  {/*1. */}
            {/* <div style={styles.nav}>  2. */}
            {/* <Nav>
                {/* <div style={styles.title}>Mobile-App</div> 3. */}
                {/*<Title>Mobile-App</Title>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon}
                        src="https://cdn-icons-png.flaticon.com/128/891/891462.png" 
                        alt="Cart Icon" />
                    <span style={styles.cartCount}>3</span>
                </div>
            {/* </div> */}

            {/* Style component 3. */}
            {/*to use props color is used and this dynamic styling
                    <span className={NavStyle.CartCount}>3</span> this one used for the 3. css module*/}

            <Nav>
                <Title>Mobile-App</Title>
                <CartIconContainer>
                    <CartImg
                        src="https://cdn-icons-png.flaticon.com/128/891/891462.png" 
                        alt="Cart Icon" />
                    <CartCount color="yellow" show={true}>{cartCount}</CartCount> 
                </CartIconContainer>
            </Nav>
            </>
        )
    }
}

export default Navbar;

//2. css scope (internal styling for less confusion. )
const styles={
    cartIcon: {
    height: 48,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "space-between" ,
    alignItems: "center",
    position: "relative",
  },
  title:{
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginLeft: 20
  },
  
  cartIconContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
}