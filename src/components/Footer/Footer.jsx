import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const Footer = () => {
    return (
           <div className='bg-dark mt-4'>
             <div className="text-white container">
                <div className="row p-4">
                    <div className="col-md-3 ">
                        <p>Emphasizes fruits, vegetables, whole grains, and fat-free or low-fat milk and milk products. Includes a variety of protein foods such as seafood, lean meats and poultry, eggs, legumes (beans and peas), soy products, nuts, and seeds. Is low in added sugars, sodium, saturated fats, trans fats, and cholesterol.</p>
                    </div>
                    <div className=" col-md-3">
                        <h4>Usefull Link</h4>
                        <div className="ml-4">

                        <p className='text-primary'>FaceBook <FaFacebook></FaFacebook></p>

                        <p className='text-primary'>Github <FaGithub></FaGithub></p>

                        <p className='text-primary'>Google <FaGoogle></FaGoogle></p>

                        <p className='text-primary'>  Blog</p>
                        </div>
                    </div>
                    <div className=" col-md-3">
                        <h4 className="mb-4">Contact Us</h4>
                        <p> 555 4th 5t NW, Washington</p>

                        <p>DC 20530, United States</p>
                        <p>+88 01750 000 000</p>

                        <p>info@gmail</p>
                    </div>
                    <div className=" col-md-3">
                        <h4 className="mb-4">Subscribe</h4>
                        <p>Subscribe for our latest & 
                            Articles. We Won t Give You 
                                Spam Mails</p>
                        </div>
                    </div>
                </div>

           </div>
             
          
            );
};

            export default Footer;