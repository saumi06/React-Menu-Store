import React from 'react';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';

class Item extends React.Component {
    render() {
        const { details, index } = this.props;
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';
        return (
            <li className="menu-item">
                <img src={details.image} alt={details.name} />
                <h3 className="item-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button onClick={() => this.props.addToOrder(index)} 
                disabled={!isAvailable}>{buttonText}</button>

            </li>
        )
    }
    static propTypes= { 
        details: PropTypes.object.isRequired,
        index: PropTypes.string.isRequired,
        addToOrder: PropTypes.func.isRequired
    }
}

export default Item;