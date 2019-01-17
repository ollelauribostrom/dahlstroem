import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Contact = props => (
  <Layout path={props.location.pathname}>
    <SEO title="Contact" keywords={[`contact`]} />
    <div style={{}}>
      <h3 style={{ marginBottom: '5px', color: '#6e297a', fontSize: '16px' }}>
        Contact
      </h3>
      <span style={{ display: 'block' }}>Felix Dahlström Persson</span>
      <span style={{ display: 'block' }}>Thorvald Meyers Gate 71A</span>
      <span style={{ display: 'block' }}>0552 Oslo</span>
      <span style={{ display: 'block' }}>Norway</span>
      <span style={{ display: 'block' }}>dahlstrom.persson@gmail.com</span>
    </div>
  </Layout>
);

export default Contact;
