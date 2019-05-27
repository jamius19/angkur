import React, {Component} from 'react';
import styles from './Feature.module.scss';
import img1 from './assets/globalcdn1-min.jpg';
import img2 from './assets/realiable3-min.jpg';
import img3 from './assets/speed2-min.jpg';
import LocalizedStrings from 'react-localization';
import Language from "../../context/Language";

const localization = new LocalizedStrings({
   bn: {
      speedTitle: 'দ্রুতগতিসম্পন্ন লোড টাইম',
      speedDes: 'আমাদের সকল ফন্ট গিটহাবে স্টোর করা আছে এবং ফন্টগুলো Amazon S3 থেকে লোড করা হয়। তাই আপনি পাবেন অত্যন্ত দ্রুতগতিতে লোড হওয়া ওয়েব ফন্ট। এছাড়াও ' +
          'আমদের সকল ফন্টে লেটেস্ট WOFF2 টেকনোলজি ব্যবহার করা হয়েছে, তাই নতুন ব্রাউজারে ফন্ট লোড হবে আরো তাড়াতাড়ি। এছাড়াও পুরোনো ব্রাউজার সাপোর্টের জন্য WOFF, EOT, ' +
          'TTF এবং SVG ফন্ট টাইপও সাপোর্ট করে অংকুর।',
      speedDes2: 'সুতরাং আপনি সব ব্রাউজারেই ফন্ট লোড হবার নিশ্চয়তা পাচ্ছেন! দ্রুতগতিতে!',
      realiableTitle: 'নির্ভরযোগ্যতা গ্যারেন্টিড',
      realiableDes: 'আমরা আমাদের ফন্ট ডেলিভারির জন্য ব্যবহার করি jsDelivr, CloudFlare আর StackPatch। একসাথে একইসময়ে শেষের দুটো সার্ভিসই যদি বন্ধ হয় তাহলেই' +
          ' কেবলমাত্র আমাদের সার্ভিসে বিঘ্ন ঘটা সম্ভব, এবং এদের প্রত্যেকেরই আপটাইম ৯৯.৯৯% এরও উপরে। এছাড়াও আমাদের GitHub রিপোসিটরি কোনো কারণে ডাউন থাকলেও ' +
          'jsDelivr সকল ফাইল সার্ভ করতে থাকবে Amazon S3 থেকে। মোটকথা, আমাদের ফন্ট সার্ভিস সবসময় সচল থাকবেই। <span class="font-weight-bold">গ্যারেন্টিড!</span>',
      globalTitle: 'বিশ্বব্যাপী প্রাপ্যতা এবং ওপেনসোর্স প্রজেক্ট',
      globalDes: 'আমাদের ফাইল বিশ্বব্যাপী প্রায় ৭৫০টিরও বেশি এন্ড-পয়েন্ট থেকে সার্ভ করা হয়। এতে আপনি পাচ্ছেন সর্বোচ্চ গতিতে ফাইল লোড হওয়া এবং ফাইল পাওয়ার নিশ্চয়তা। আমাদের প্রধান CDN ' +
          'jsDelivr সর্বমোট চারটি ভিন্ন ভিন্ন CDN এবং দুইটি DNS প্রোভাইডার ব্যবহার করে, যার ফলে প্রতি লেয়ারেই আপনি পাচ্ছেন এক্সট্রা সুরক্ষা ব্যবস্থা।</br></br>' +
          'অংকুর একটি সম্পূর্ণ ফ্রী এবং ওপেনসোর্স প্রজেক্ট যা ক্রিয়েটিভ কমনস অ্যাট্রিবিউশন-শেয়ার অ্যালাইক ৪.০ ইন্টারন্যাশনাল লাইসেন্সের অধীনে আছে। তাই আপনি আমাদের সার্ভিস যেকোনো ব্যক্তিগত বা বাণিজ্যিক কাজে বিনামূল্যে ব্যবহার ' +
          'করতে পারবেন কোনো প্রকার বাধ্যবাধকতা ছাড়া।',
   },
   en: {
      speedTitle: 'Super Fast Load Times',
      speedDes: 'Our web fonts are stored on GitHub and are loaded from Amazon S3. What you\'ll get is' +
          ' super fast load times. Also, here at Angkur, we use latest WOFF2 font technology along with older  WOFF, EOT, TTF and SVG ' +
          'formats for cross browser compatibility.',
      speedDes2: 'So you can be sure that all our fonts will load on all browsers! Fast!',
      realiableTitle: 'Reliability Guaranteed',
      realiableDes: 'We use jsDelivr, CloudFlare and StackPatch as our content delivery networks for fonts. For our services to go down ' +
          'at least the last two services have to go down simultaneously. And they both have a uptime of 99.99%+. Also even if our GitHub repository ' +
          'is down, jsDelivr will continue to serve the files from Amazon S3. Bottom line, our files will always be available for you. ' +
          '<span class="font-weight-bold">Guaranteed!</span>',
      globalTitle: 'Global Availability and Open Source Project',
      globalDes: 'Our files are served from over 750 end-points all over the world. That\'s why you can be sure of file availability  ' +
          ' Our main CDN, jsDelivr uses four different CDNs along with two different DNS providers. What you are getting out of these' +
          ' are failover in every layer and peace of mind.</br></br>' +
          'Angkur is a completely free and Open Source project licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. ' +
          'You can use our service on any personal or commercial projects for free without any strings attached.',
   },
});


class Feature extends Component {

   static contextType = Language;


   render() {
      localization.setLanguage(this.context.lang);

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
                         {localization.speedTitle}
                      </h2>

                      <p className="lead">
                         {localization.speedDes}
                      </p>
                      <p className="lead font-weight-bold">
                         {localization.speedDes2}
                      </p>
                   </div>
                </div>
             </div>

             <div className={`container-fluid  ${styles.featureContainer}`}>
                <div className="row">
                   <div className="col-md-6 col-lg-5 order-0 order-md-1">
                      <img className={styles.img2} src={img2} alt=""/>
                      <div className="d-block d-md-none my-3"/>
                   </div>
                   <div className="col-md-6 col-lg-7 order-1 order-md-0">
                      <h2>
                         {localization.realiableTitle}
                      </h2>

                      <p className="lead" dangerouslySetInnerHTML={{__html: localization.realiableDes}}/>
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
                         {localization.globalTitle}
                      </h2>

                      <p className="lead" dangerouslySetInnerHTML={{__html: localization.globalDes}}/>
                   </div>
                </div>
             </div>
          </section>
      );
   }
}

export default Feature;