import React from 'react'
import './Header.css'
import { IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { auth } from './Firebase'
import { useDispatch } from 'react-redux';
import emptyCartAction from './ActionCreators/emptyCartAction'

function Header( props ) {

    const items = useSelector((state) => state.AddItem.items)

    const dispatch = useDispatch()

    const logOut = (event) =>{
        event.preventDefault();
        auth.signOut();
        dispatch(emptyCartAction())
    }

    return (
        <div className="header">
            <div className="logo__search">
                <Link to="/home">
                    <IconButton>
                        <img className="logo" src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt=""/>
                    </IconButton>
                </Link>
                <input placeholder="Search" />
                <IconButton className="icon">
                    <SearchIcon />
                </IconButton>
            </div>
            <div className="keys">
                <IconButton onClick={props.buyItem} className="icon">
                    <LocalOfferIcon />
                    <p>Offers</p>
                </IconButton>
                <IconButton className="icon">
                    <LiveHelpIcon />
                    <p>Help</p>
                </IconButton>
                <IconButton onClick={logOut} className="icon">
                    <PersonOutlineIcon />
                    <p>Log-Out</p>
                </IconButton>
                <Link style={{textDecoration:'none'}} to="/cart">
                    <IconButton className="icon">
                        <FastfoodIcon />
                        <p>Food Cart  {items.length}</p>
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default Header
