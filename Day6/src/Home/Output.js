import React from 'react';
import { connect } from 'react-redux';

const Output = ({ items, error }) => {
  return (
    <div className="container">
      {error && <div>Error: {error}</div>}
      {items.length > 0 ? (
        <ul className="list-group">
          {items.map((item) => (
            <li key={item.id} className="list-group-item">{item.name}</li>
          ))}
        </ul>
      ) : (
        <div>No items found.</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  error: state.error,
});

export default connect(mapStateToProps)(Output);