import React from 'react'
import './Homepage.css'
import Product from "./Product";

function Homepage() {
    return (
        <div className="home">
        <div className="homepage">
            <div>
                <img className="homepage__images" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/sr6yowypygiqobjlpxfz" alt="" />
            </div>
            <div>
                <img className="homepage__images" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/g1ed7rzbghcapjbts2do" alt="" />
            </div>
            <div>
                <img className="homepage__images" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/e2pwcbgyj4i6obmmy47c" alt="" />
            </div>
            <div>
                <img className="homepage__images" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/nxo0vlekmqe44cxnrdhb" alt="" />
            </div>
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Kwality Walls Icream"
            price={300}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/upwgzebvrolhzpemsssk"
          />
          <Product
            id="2"
            title="One Way Restaurant"
            price={239.0}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g8qifv6jfpx0whdlqbff"
          />
          <Product
            id="3"
            title="Apna Sweets"
            price={400}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jomvpihjcewrldigmiug"
          />
          <Product
            id="4"
            title="Jagdesh Sweets"
            price={300}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/asqsy4rvdpp8srxmkncg"
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="Annapurna Bhojanlaya"
            price={600}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e5izoslkm1az6xidjkpo"
          />
          <Product
            id="6"
            title="Vijay Chat House"
            price={150.0}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mstgatb2vu8v48kcua81"
          />
          <Product
            id="7"
            title="Wodden Tree Kitchen"
            price={250}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ciuwezmy3q1ugzqmqrxk"
          />
          <Product
            id="8"
            title="Cinema Cafe"
            price={400}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jllcmiyznmjcnwnsnvem"
          />
        </div>
        <div className="home__row">
          <Product
            id="9"
            title="Cup Bashi"
            price={200}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pdt7pdqmpizqbwpfq6sh"
          />
          <Product
            id="10"
            title="McDonald's"
            price={400.0}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yccpidyfrq6flvuazfqh"
          />
          <Product
            id="11"
            title="Punjabi Dhaba"
            price={400}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jfmrxkemizcplg4lylac"
          />
          <Product
            id="12"
            title="Saify Hotel"
            price={500}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zfnvaavdreknaerygzpw"
          />
        </div>
        </div>
    )
}

export default Homepage
