import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='mt-5 mb-5'>WELCOME TO MY HARD BLOG</h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            01. Difference between JavaScrip vs nodeJs.
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body accordion-for-blog">
                            <strong>JavaScrip :</strong> JavaScript can only be in the browsers, and its generally used on the client side. It capable enough to add HTML and play with DOM (Document Object Model). JS used in frontend web development. And contains all basic elements to develope a site. <br />
                            <strong>NodeJs : </strong> NodeJS is a Javascript runtime environment. JS play with client and node play with server site. Usually node Js connect client with server. So, node js marked as backend development. Backend part store data of user and deliver with client site.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            02. When you should use node.js and when mongodb?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body accordion-for-blog">
                            <strong>Node.js :</strong> Node.js is a rapidly growing technology that has been overtaking the world of server-side programming with surprising speed. <br />
                            <strong>Mongodb : </strong> MongoDB is a technology that’s revolutionizing database usage. Together, the two tools are a potent combination, thanks to the fact that they both employ JavaScript and JSON. MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            03. Difference between SQL vs NoSQL.
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body accordion-for-blog">
                            <strong>SQL :</strong> The SQL system are called RDBMS; RELATIONAL DATABASE MANAGEMENT SYSTEM. These Database have fixed or static scheme and not suited for hierarchical data storage. But these database are best suited for complex queries. <br />
                            <strong>NoSQL : </strong> No SQL means Not Structured query language. This is Non-relational or distributed database system. These have dynamic schema. Not SQL are Horizontally Scalable. 
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            04. What is the purpose of JWT and how does work it?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body accordion-for-blog">
                            <strong>JWT </strong>means JSON Web Token. It is a mechanism to verify the owner of some JSON data. It is an encoded, URL-safe string that can contain an unlimited amount of data and cryptographically signed. When Server get a call from JWT, it can guarantee the data it contains can be trusted because it's signed the source. Finally we can tell that, JWT secure our valuable data from hacking and sign an agreement ensuring that, My data will be safe.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;