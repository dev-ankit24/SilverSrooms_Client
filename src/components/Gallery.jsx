import React, { useState } from 'react'
import ms1 from "./assets/img/gallery/ms1.jpg"
import ms2 from "./assets/img/gallery/ms2.jpg"
import ms3 from "./assets/img/gallery/ms4.jpg"
import ms4 from "./assets/img/gallery/ms3.jpg"
import ms5 from "./assets/img/gallery/ms5.jpg"
import ms6 from "./assets/img/gallery/ms6.jpg"
import ms7 from "./assets/img/gallery/ms7.jpg"
export default function Gallery() {
  const galleryItems = [
  { id: 1, img:ms1 ,category: 'plant' },
  { id: 2,img:ms2 , category: 'processing' },
  { id: 3,img:ms3 , category: 'packaging' },
  { id: 4,img:ms4 , category: 'plant' },
  { id: 5,img:ms5 , category: 'processing' },
  { id: 6,img:ms6 , category: 'packaging' },
  { id: 7,img:ms7 , category: 'packaging1' },
  { id: 8,img:ms4 , category: 'plant1' },
  { id: 9,img:ms6 , category: 'plant2' },
  { id: 10,img:ms1 , category: 'plant3' },
  { id: 11,img:ms2 , category: 'plant4' },
  { id: 11,img:ms7 , category: 'plant4' },

];
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <div className="gallery-hero">
        <img src={ms2} alt="" />
      </div>

      <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">GALLERY</h2>

      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group">
          {['all', 'plant', 'processing', 'packaging'].map(cat => (
            <button
              key={cat}
              className={`btn ${filter === cat ? 'btn-secondary' : 'btn-outline-secondary'}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {filteredItems.slice("0","2").map(item => (
          <div key={item.id} className="col-md-6" >
            <div className="bg-secondary rounded" style={{height: '250px',width:"100%" }} >
              <img src={item.img} style={{height: '250px' ,width:"100%" }} alt="" srcset="" />
            </div>
          </div>
        ))}
          {filteredItems.slice("2","3").map(item => (
          <div key={item.id} className="col-md-12" >
            <div className="bg-secondary rounded" style={{height: '350px' ,width:"100%" }}>
              <img src={item.img} style={{height: '350px' ,width:"100%" }} alt="" srcset="" />

            </div>
          </div>
        ))}


        {/* {filteredItems.slice("2","3").map(item => (
          <div key={item.id} className="col-md-6" >
            <div className="bg-secondary rounded" style={{height: '250px' }}>
              <p className="text-white text-center pt-5">{item.category.toUpperCase()}</p>
            </div>
          </div>
        ))}
         */}
        {/* Left Column */}
        <div className="col-md-6 d-flex flex-column gap-3">
       
              {filteredItems.slice("3","5").map(item => (
          <div key={item.id} className="col-md-12" >
            <div className="bg-secondary rounded" style={{height: '250px',width:"100%" }}>
              <img src={item.img} style={{height: '250px' ,width:"100%" }} alt="" srcset="" />
            </div>
          </div>
        ))}

          
        </div>

        {/* Right Column */}
        <div className="col-md-6">
            {filteredItems.slice("5","6").map(item => (
          <div key={item.id} className="col-md-12" >
            <div className="bg-secondary rounded" style={{height: '520px' }}>
             <img src={item.img} style={{height: '520px' ,width:"100%" }} alt="" srcset="" />
            </div>
          </div>
        ))}

        </div>
         {filteredItems.slice("6").map(item => (
          <div key={item.id} className="col-md-6" >
            <div className="bg-secondary rounded" style={{height: '250px' }}>
                 <img src={item.img} style={{height: '250px' ,width:"100%" }} alt="" srcset="" />

            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}
