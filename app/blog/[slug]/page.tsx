import React from 'react';

const page = ({ params: { slug } }: { params: { slug: string } }) => {
	return <div>{ slug }</div>;
};

export default page;
