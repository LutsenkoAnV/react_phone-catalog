import React, { FC, useMemo } from 'react';
import { connect } from 'react-redux';

import './Favourites.css';
import { PhoneCard } from '../PhoneCard/PhoneCard';

interface StateProps {
  phonesFavourite: string[];
  phones: PhonesWithDetails[];
}

export const FavouritesTemplate: FC<StateProps> = ({
  phonesFavourite, phones,
}) => {
  const favouriteList = useMemo(() => {
    return phones.filter(phone => phonesFavourite.includes(phone.phoneId));
  }, [phonesFavourite]);

  return (
    <div className="favourites__container">
      <div className="phones__path">
        <img src="./img/Home.png" alt="home_icon" className="home-icon" />
        <img
          src="./img/Chevron.png"
          alt="arrow_icon"
          className="arrow-icon"
        />
        <span className="phones__path-title">Favourites</span>
      </div>
      <h2 className="phones__heding">Favourites</h2>
      <p className="phones__quantity">{`${phonesFavourite.length} items`}</p>
      <div className="phones__catalog">
        {favouriteList.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  phonesFavourite: state.phonesFavourite,
  phones: state.phones,
});

export const Favourites = connect(
  mapStateToProps, null,
)(FavouritesTemplate);
