import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceListing() {
    return (
        <>
            <h1>Service Listing </h1>

            <Link to="/single-service">Single Service Details Page</Link>
        </>
    );
}