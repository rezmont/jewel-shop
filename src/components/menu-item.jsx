import React from "react";

import "./componets.styles.scss";

export function MenuItem({ title, subtitle, imageUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}
