import React, {Component} from 'react';
import styles from './Feature.module.scss';
import img1 from './assets/globalcdn.jpg';
import img2 from './assets/realiable3.jpg';
import img3 from './assets/speed2.jpg';


class Feature extends Component {
   render() {
      return (
          <section style={{marginTop: '80px'}}>

             <div className={`container-fluid ${styles.featureContainer}`}>
                <div className="row">
                   <div className="col-md-4">
                      <img className={styles.img1} src={img3} alt=""/>
                      <div className="d-block d-md-none my-3"/>
                   </div>
                   <div className="col-md-8">
                      <h2>
                         Super Fast Speed
                      </h2>

                      <p className="lead">
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur deserunt, ea et
                         hic incidunt odit perferendis quibusdam quisquam soluta tempore velit vitae?
                      </p>
                      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                   </div>
                </div>
             </div>

             <div className={`container-fluid ${styles.featureContainer}`}>
                <div className="row">
                   <div className="col-md-6 col-lg-4 order-0 order-md-1">
                      <img className={styles.img2} src={img2} alt=""/>
                      <div className="d-block d-md-none my-3"/>
                   </div>
                   <div className="col-md-6 col-lg-8 order-1 order-md-0">
                      <h2>
                         Reliability Guaranteed
                      </h2>

                      <p className="lead">
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto beatae dolor
                         eius id laboriosam maxime neque, nobis perferendis provident quae quam quia quo tempora velit
                         veritatis.
                      </p>
                   </div>
                </div>
             </div>

             <div className={`container-fluid ${styles.featureContainer}`}>
                <div className="row">
                   <div className="col-md-4">
                      <img className={styles.img1} src={img1} alt=""/>
                      <div className="d-block d-md-none my-3"/>
                   </div>
                   <div className="col-md-8">
                      <h2>
                         Global Availability
                      </h2>

                      <p className="lead">
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque, delectus deserunt
                         dolorem
                         error facilis non nulla obcaecati omnis placeat quidem quod repellat sunt temporibus vel.
                      </p>
                   </div>
                </div>
             </div>
          </section>
      );
   }
}

export default Feature;