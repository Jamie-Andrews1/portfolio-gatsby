import React from 'react';
import '../styles/global.css'
import Layout from '../components/Layout';

export default function Contact(){

  return (
    <Layout>
      <div className="contact">
        <h1>CONTACT</h1>
        <p>Want to make contact</p>
        <h2><a href="mailto:andrews_j@live.co.uk">andrews_j@live.co.uk</a></h2>
      </div>
    </Layout>
  )
}