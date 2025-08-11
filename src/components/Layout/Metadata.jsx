import React from "react";
import { Helmet } from "react-helmet";

const Metadata = ({ title, description }) => {
  return (
    <Helmet>
      <title>william d'arts | {title}</title>
      <meta name="description" content="williartz" />
    </Helmet>
  );
};

export default Metadata;
