import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { backgroundChooser } from './utils/backgroundChooser';
import * as animation from '../../utils/animations/viewSlide';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ProductsStyled = styled.div`
    margin-bottom: 20px;
    ul {
        display: flex;
        margin: 10px 0 0 0;
        padding: 0;
        position: relative;
        &:before {
            background-color: ${props => props.green};
            border-radius: 4px;
            bottom: 0;
            content: "";
            height: 3px;
            left: ${props => props.domSelected === undefined ? "0" : props.domSelected.offsetLeft + "px"};
            position: absolute;
            transition: .2s ease;
            width: ${props => props.domSelected === undefined ? "100px" : props.domSelected.offsetWidth + "px"};
        }
        li {
            box-sizing: border-box;
            color: ${props => props.gray};
            display: flex;
            justify-content: center;
            list-style-type: none;
            text-align: center;
            min-width: 100px;
            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
                font-size: 18px;
                font-weight: 500;
                outline: none;
                padding: 5px;
                width: 100%;
                &:focus {
                    outline: 1px solid ${props => props.green}
                }
            }
        }
        .selected {
            color: ${props => props.green};
            font-weight: bold;
            padding-right: 2px;
        }
    }
    .slide-enter {
        animation: ${props => props.selected.slideTo === "next" ? animation.slideInLeft : animation.slideInRight} 0.3s forwards;
    }
    .slide-exit {
        animation: ${props => props.selected.slideTo === "next" ?  animation.slideOutLeft : animation.slideOutRight} 0.3s forwards;
    }
    .brand {
        margin: 51px 0 -31px -5px;
        .brandTitle {
            color: ${props => props.gray};
            display: flex;
            span {
                font-size: 12px;
                font-weight: bold;
                margin-top: 4px;
            }
        }
        .products {
            display: flex;
            flex-wrap: wrap;
            max-width: 100%;
            width: 87vw;
            .product {
                align-items: flex-end;
                box-shadow: 0px 0px 4px #00000029;
                border-radius: 5px;
                display: flex;
                height: 167px;
                justify-content: center;
                margin: 9px 7px 6px 5px;
                overflow: hidden;
                min-width: 160px;
                .productImage {
                    bottom: -6px;
                    left: -49px;
                    position: relative;
                    img {
                        bottom: -2px;
                        position: absolute;
                        width: 7em;
                    }
                }
            }
        }
    }
`;


function Products(props) {
    const [ selected, setSelected ] = useState({
        elementIndex: 0,
        slideTo: "next"
    });
    const [ domSelected, setDomSelected ] = useState();
    const {
        products,
        colors
    } = props;
    return (
        <ProductsStyled gray={colors.gray} green={colors.green} domSelected={domSelected} selected={selected}>
            <ul>
                {products.map((item, index) => {
                    return (
                        <li key={index}>
                           <button tabIndex={index + 1} onClick={(e) => {setSelected({elementIndex: index, slideTo: selected.elementIndex < index ? "next" : "previous"}); setDomSelected(e.target)}} className={selected.elementIndex === index ? "selected" : ""}>
                            {item.category}
                           </button>
                        </li>
                    )
                })}
            </ul>
            {products.length > 0 && 
                <div>
                    <TransitionGroup className="brands" component={null}>
                        {products[selected.elementIndex].brands.slice(0).reverse().map((brand, index) => {
                            return (
                                <CSSTransition
                                    timeout={300}
                                    classNames="slide"
                                    key={brand.name}
                                >
                                    <div className="brand">
                                        <div className="brandTitle">
                                            <RoomOutlinedIcon />
                                            <span>
                                                {brand.name}
                                            </span>
                                        </div>
                                        <div className="products">
                                            {brand.products.map((product,index) => {
                                                let background = backgroundChooser(products[selected.elementIndex].category, colors.beige, colors.aquaBlue);
                                                return (
                                                    <div key={index} className="product" style={{background: background}}>
                                                        <div className="productImage">
                                                            <img src={product.image} alt={product.name}/>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </CSSTransition>
                            )
                        })}
                    </TransitionGroup>
                </div>
            }
        </ProductsStyled>
    )
};

const mapStateToProps = state => ({
    products: state.user.products,
    colors: state.app.defaultColors

});

export default connect(mapStateToProps, null)(React.memo(Products));