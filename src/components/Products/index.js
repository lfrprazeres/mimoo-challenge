import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { backgroundChooser } from './utils/backgroundChooser';

const ProductsStyled = styled.div`
    ul {
        display: flex;
        margin-top: 10px;
        li {
            color: ${props => props.gray};
            cursor: pointer;
            font-size: 18px;
            font-weight: 500;
            margin-right: 14px;
        }
        .selected {
            border-bottom: 2px solid ${props => props.green};
            border-bottom-left-radius: 1px;
            border-top-left-radius: 1px;
            border-top-right-radius: 1px;
            border-bottom-right-radius: 1px;
            color: ${props => props.green};
            font-weight: bold;
            padding-right: 2px;
        }
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
`

function Products(props) {
    const [ selected, setSelected ] = useState(0);
    const {
        products,
        colors
    } = props;
    return (
        <ProductsStyled gray={colors.gray} green={colors.green}>
            <ul>
                {products.map((item, index) => {
                    return (
                        <li key={index} onClick={() => setSelected(index)} className={selected === index ? "selected" : ""}>
                            {item.category}
                        </li>
                    )
                })}
            </ul>
            {products.length > 0 && 
                <div>
                    {products[selected].brands.slice(0).reverse().map((brand, index) => {
                        return (
                            <div className="brand" key={index}>
                                <div className="brandTitle">
                                    <RoomOutlinedIcon />
                                    <span>
                                        {brand.name}
                                    </span>
                                </div>
                                <div className="products">
                                    {brand.products.map((product,index) => {
                                        let background = backgroundChooser(products[selected].category, colors.beige, colors.aquaBlue);
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
                        )
                    })}
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