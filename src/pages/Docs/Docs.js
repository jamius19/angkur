import React, {Component} from 'react';
import styles from './Docs.module.scss';
import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import LocalizedStrings from 'react-localization';
import Language from "../../context/Language";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/esm/styles/prism";


const localization = new LocalizedStrings({
   bn: {
      // How we Deliver you files

      title: 'ডকুমেন্টেশন',
      delivrTitle: 'কন্টেন্ট ডেলিভারির মাধ্যম',
      delivrTitleDes: 'অংকুর সকল ফাইল jsDelivr এর মাধ্যমে সার্ভ করে থাকে। এ ব্যাপারে আরো জানতে ' +
          '<a class="link-unstyle text-primary" href="https://www.jsdelivr.com/network" target="_blank">এই লিংকে যান।</a> ',
      delivrTitleDes1: 'jsDelivr সর্বমোট ৪টি বিখ্যাত CDN ব্যবহার করে। যাদের মাঝে অনেকগুলো আপনি হয়তো ইতোমধ্যেই ব্যবহার করছেন আপনার প্রজেক্টে।' +
          '<ul class="ml-5 mt-2 mb-0">' +
          '<li>StackPath (Bootstrap, FontAwesome)</li>' +
          '<li>Cloudflare (Bootstrap, jQuery, FontAwesome, cdnjs)</li>' +
          '<li>Fastly</li>' +
          '<li>Quantil</li>' +
          '</ul> <br/>' +
          'এই উপায়ে jsDelivr এর ৭৫০ টিরও বেশি এন্ড-পয়েন্ট বিশ্বব্যাপি ছড়িয়ে আছে।' +
          '<br/><span class="font-weight-bold">আমরা নিজেদের হোস্টিং ব্যবহারের পরিবর্তে jsDelivr ব্যবহারের মাধ্যমে আমরা নিশ্চিত করি যে আমাদের সকল' +
          ' কন্টেন্ট আপনার ওয়েবসাইটের ভিজিটরদের নিকটস্থ স্থান থেকে সর্বনিম্ন সময়ে লোড হবে। সবসময়।<br/></span>',


      // How to Bangla font with english

      useTitle: 'কিভাবে ব্যবহার করবেন আমাদের ফন্ট?',
      useDes: 'প্রথমে আপনার পছন্দের ফন্ট বের করুন আমাদের <a class="link-unstyle text-primary" href="/fonts" target="_blank">ফন্ট পেজ থেকে।</a>' +
          '<br/>এরপর ওখান থেকে আপনার পছন্দের ফন্ট স্টাইলের CSS ফাইলের লোকেশনসহ HTML Code টি কপি করুন আপনার ডকুমেন্টের <code><</code><code>head</code><code>></code> সেকশনে',
      useCSS: 'আমাদের ফন্ট ব্যবহার করতে আর একটি ধাপ সম্পূর্ণ করতে হবে আপনাকে। আমাদের প্রতিটি ফন্ট পেজের নিচে সেই ফন্টটি ব্যবহার করার জন্য প্রয়োজনীয় CSS কোড দেয়া আছে।</br>' +
          'এটা দেখতে অনেকটা নিচের কোডটির মত হবে। আপনার CSS ফাইলে ফন্ট পেজ থেকে পাওয়া কোডটি পেস্ট করুন ফন্ট ব্যবহার করার জন্য।',
      useEnFont: 'অন্যান্য ইংরেজি ফন্টের সাথে ব্যবহারের করতে চান?',
      useCSSDes: 'অন্য কোনো ইংরেজি ফন্ট আমাদের ফন্টের সাথে ব্যবহার করতে চাইলে <code>font-family</code> তে আমাদের ফন্টের নামের আগে কাঙ্খিত ইংরেজি ফন্টটির নাম লিখুন।</br>' +
          'যেমন আমরা অংকুরের জন্য Google Fonts থেকে Raleway ফন্টটি এবং বাংলার জন্য SolaimanLipi ফন্টটি ব্যবহার করছি। এটার জন্য আমাদের CSS এর কোডটি নিচের মত।',
      useCSSDes1: 'এর মাধ্যমে আমরা ইংরেজি যেকোনো লেখার অন্য Raleway ফন্টটি এবং বাংলার জন্য SolaimanLipi ফন্টটি ব্যবহার করছি স্বয়ংক্রিয়ভাবে।</br>' +
          'আপনার ওয়েবসাইটে যদি কোনো ইংরেজি লেখা থাকে তাহলে আমরা এই পদ্ধতি অনূসরণ করার জন্য পরামর্শ দিবো।',
   }, en: {
      // How we Deliver you files

      title: 'Documentation',
      delivrTitle: 'Content Delivery Method',
      delivrTitleDes: 'Angkur uses jsDelivr for serving all its files. To learn more ' +
          '<a class="link-unstyle text-primary" href="https://www.jsdelivr.com/network" target="_blank">Click here.</a></span>',
      delivrTitleDes1: '<span>In total jsDelivr uses 4 renowned CDNs, many of which perhaps you\'re already using in your project!' +
          '<ul class="ml-5 mt-2 mb-0">' +
          '<li>StackPath (Bootstrap, FontAwesome)</li>' +
          '<li>Cloudflare (Bootstrap, jQuery, FontAwesome, cdnjs)</li>' +
          '<li>Fastly</li>' +
          '<li>Quantil</li>' +
          '</ul> <br/>' +
          'In this way jsDelivr has more than 750 endpoints all over the world.' +
          '<br/><span class="font-weight-bold">By using jsDelivr rather than our own hosting, ' +
          'we ensure that our contents will reach your websites\' visitors in the lowest possible time. Always.<br/></span>',


      // How to Bangla font with english
      useTitle: 'How to use our fonts?',
      useDes: 'Chose your favourite font from our vast collection in the <a class="link-unstyle text-primary" href="/fonts" target="_blank">Font List Page</a>' +
          '<br/>Then paste the HTML code containing the fonts\' CSS file path in your documents\' <code><</code><code>head</code><code>></code> section.',
      useCSS: 'Using the font in you website requires one additional step. <br/> Simple copy and paste the required CSS code found ' +
          'in your favourite font\'s page. It will look something like below,',
      useEnFont: 'Want to use other English fonts too?',
      useCSSDes: 'If you want to use another English font along with our fonts, type the desired English fonts\' name in your <code>font-family</code> attribute before our fonts\' name</br>' +
          'For example, here at Angkur, we\'re using Raleway from Google Fonts for English content and SolaimanLipi for Bangla content. Our CSS code is given below.',
      useCSSDes1: 'Now we\'ll be using Raleway for English and SolaimanLipi for Bangla contents automatically.</br>' +
          'If your website contains English contents, we\'ll recommend this approach.',
   },
});


class Docs extends Component {

   static contextType = Language;

   render() {

      localization.setLanguage(this.context.lang);

      return (
          <div>
             <Navbar showBG/>
             <section className="container-c">
                <div className="row">
                   <div className="col">
                      <h1 className="my-3">{localization.title}</h1>

                      <div>
                         <h2 className="mt-5">{localization.delivrTitle}</h2>
                         <p className="lead" dangerouslySetInnerHTML={{__html: localization.delivrTitleDes}}/>
                         <p className="lead" dangerouslySetInnerHTML={{__html: localization.delivrTitleDes1}}/>
                      </div>


                      <div>
                         <h2 className="mt-5">{localization.useTitle}</h2>
                         <p className="lead" dangerouslySetInnerHTML={{__html: localization.useDes}}/>

                         <SyntaxHighlighter language='html' style={atomDark}>
                            {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nokshaia/angkur@latest/PublicFonts/EkusheyMukto/stylesheet_Normal.min.css"/>`}
                         </SyntaxHighlighter>

                         <p className="lead mt-4" dangerouslySetInnerHTML={{__html: localization.useCSS}}/>
                         <SyntaxHighlighter language='css' style={atomDark}>
                            {`* {\n\tfont-family: 'Ekushey Mukto', sans-serif;\n}`}
                         </SyntaxHighlighter>

                         <h4 className="mt-5 font-weight-bold">{localization.useEnFont}</h4>
                         <p className="lead mt-2" dangerouslySetInnerHTML={{__html: localization.useCSSDes}}/>
                         <SyntaxHighlighter language='css' style={atomDark}>
                            {`* {\n\tfont-family: 'Raleway','Ekushey Mukto', sans-serif;\n}`}
                         </SyntaxHighlighter>
                         <p className="lead mt-3" dangerouslySetInnerHTML={{__html: localization.useCSSDes1}}/>

                      </div>
                   </div>
                </div>
             </section>
             <Footer/>
          </div>
      );
   }
}

export default Docs;