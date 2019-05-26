import React, {Component} from 'react';
import styles from './FontPage.module.scss';
import Navbar from "../../components/Nav/Navbar";
import LocalizedStrings from 'react-localization';
import {getRandomInt, numToBangla} from "../../utility/UtilityFunc";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactTooltip from 'react-tooltip';
import Language from "../../context/Language";
import Footer from "../../components/Footer/Footer";

const localization = new LocalizedStrings({
   bn: {
      chars: 'বর্ণমালা',
      serif: 'মাত্রাযুক্ত',
      sansSerif: 'মাত্রাবিহিন',
      designedBy: 'ডিজাইন করেছেন',
      style: 'টি স্টাইল',
      preview: 'ফন্টের পূর্বরূপ',
      normal: 'নরমাল',
      bold: 'বোল্ড',
      italic: 'আইটালিক',
      fontWeightText: 'ফন্ট এর পুর্বরূপ',
      useFont: 'ফন্টটি ব্যবহার করুন',
      allcss: 'সব ফন্ট স্টাইল একসাথে পাবার জন্য নিচেরটা কোড কপি করুন',
      code1: 'কোডগুলো আপনার ডকুমেন্টের',
      code2: 'সেকশনে কপি করুন।',
      typeface: 'এরপর আপনার CSS ফাইলে ডিফল্ট ফন্ট ফেস পরিবর্তন করুন।',
      dl1: 'আপনি নিচে বাটনে ক্লিক করে',
      dl2: 'ফন্টটি আপনার ডিভাইসেও ডাউনলোড করতে পারবেন।',
      copy: 'কপি',
      copyConfirm: 'কপি হয়েছে!',
   },
   en: {
      chars: 'Characters',
      serif: 'Serif',
      sansSerif: 'Sans Serif',
      designedBy: 'Designed by',
      style: 'Style',
      preview: 'Font Preview',
      normal: 'Normal',
      bold: 'Bold',
      italic: 'Italic',
      fontWeightText: 'Font sample for',
      useFont: 'Getting the Font',
      allcss: 'For getting all styles in one CSS use the code below',
      code1: 'Insert the code inside your',
      code2: 'section.',
      typeface: 'Then change the default typeface in your CSS files.',
      dl1: 'You can also Download',
      dl2: 'font using the link(s) below for your device.',
      copy: 'Copy',
      copyConfirm: 'Copied!',
   },
});


const paragraph = [
   'কদমহাটা গ্রামের যে কাউকে যদি জিজ্ঞেস করা সবচেয়ে ভাল মনের কয়েকজন কৃষকের নাম বলার জন্য তাহলে সেই তালিকায় নিঃসন্দেহে রফিক মিয়ার নাম থাকবে, ঠিক তেমনি যদি বলা হয় যদি কয়েকজন কড়া মেজাজের মানুষের নাম বলার জন্য সেই তালিকায়ও উনার নাম সবার উপরে থাকবে। স্ত্রী, এক ছেলে ও দুই মেয়ে নিয়ে উনার সুখের সংসার।',
   'প্রতিদিন ফজরের নামাজ পড়ে উনি গরু নিয়ে মাঠে যাওয়া উনার প্রতিদিনের রুটিন। প্রতিদিনের মত আজও গরু নিয়ে বাড়ি থেকে বের হতে গিয়ে আজ মেজাজটা একটু গরম হয়ে গেল। বাড়ির সামনে কে যেন নতুন ঝকঝকে একটা কার রেখে গেছে।হয়ত গ্রামের নতুন কোন অতিথি হবে তাই বলে বেকুবের মত বাড়ির সামনে এভাবে রেখে যাবে। রাগে গজগজ করে কোনরকম গরু নিয়ে মাঠে চলে গেলেন।',
   'মাঠ থেকে ফিরে এসে বাড়ির সামনে গাড়ি দেখে মেজাজটা আরো দ্বিগুণ বিগড়ে গেল রফিক মিয়ার। আবিরের মাকে ডাকতে ডাকতে বাড়ির ভেতর ঢুকলেন। আবির বের হয়ে জিজ্ঞেস করল,\n-আব্বা কি হইছে?\n- দেখতো বাপ কে যেন বাড়ির সামনে গাড়ি রেখে গেছে। এটা কি গাড়ির গ্যারেজ যে গাড়ি রেখে যাবে? এই বাড়িতে কি মানুষ থাকে না?',
];

class FontPage extends Component {

   static contextType = Language;

   state = {
      loaded: false,
      error: false,
   };

   emoji = ['🤲', '🤗', '😀', '🤘', '😎', '🤞', '🧟‍'];

   constructor(props) {
      super(props);
      this.fontName = "";
   }


   getAllStyles = () => {
      let combineString = 'https://cdn.jsdelivr.net/combine/';

      for (let i = 0; i < this.state.font.styles.length; i++) {
         let delimeter = i === 0 ? "" : ",";

         combineString += delimeter + `gh/nokshaia/angkur@latest/PublicFonts/${this.fontName}/stylesheet_${this.state.font.styles[i]}.min.css`;
      }

      return combineString;
   };

   componentDidMount() {
      this.fontName = this.props.name.replace(/ /g, "");

      //console.log(`https://cdn.jsdelivr.net/gh/nokshaia/angkur@latest/PublicFonts/${this.fontName}/info.json`);

      try {
         fetch(`https://cdn.jsdelivr.net/gh/nokshaia/angkur@latest/PublicFonts/${this.fontName}/info.json`)
             .then(value => value.json())
             .then(value => {
                //console.log(value.fonts[0]);
                this.setState({
                   loaded: true,
                   font: value.fonts[0],
                });
             });
      } catch (err) {
         this.setState({
            error: true
         })
      }
   }


   render() {
      localization.setLanguage(this.context.lang);
      let isLangEn = this.context.lang.toLowerCase() === 'en';

      return (
          <div>
             <Navbar showBG/>

             <div className={`container-c mb-5`}>

                {this.state.loaded ?
                    <div>
                       {
                          this.state.font.styles.map(value => {
                             let styleLink = `https://cdn.jsdelivr.net/gh/nokshaia/angkur@master/PublicFonts/${this.fontName}/stylesheet_${value}_DisplaySwap.min.css`;
                             return <link key={value} rel="stylesheet" href={styleLink}/>
                          })
                       }

                       <div className="row">
                          <div className="col-sm">
                             <h1 className={styles.fontTitle}>{this.state.font.name}</h1>
                             <hr className={styles.divider}/>
                          </div>
                       </div>

                       <div className="row">
                          <div className="col-sm">


                             <div className={styles.fontDetails}>
                                <i className={`fas fa-info-circle fa-fw ${styles.icons}`}/>

                                <h5>{this.state.font.type === 0 ? localization.serif : localization.sansSerif}</h5>
                                <h5>{(isLangEn ? this.state.font.styles.length : numToBangla(this.state.font.styles.length)) + (isLangEn ? " " : "") + `${localization.style}`}</h5>
                                <h5>{`${localization.designedBy} ${this.state.font.author}`}</h5>
                             </div>


                             <div className={styles.fontPreview}>
                                <i className={`fas fa-font fa-fw ${styles.icons}`}/>
                                <h2>{localization.chars}</h2>
                                <hr className={styles.divider}/>

                                <div style={{fontFamily: this.state.font.name}}>
                                   <p>
                                      অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ
                                   </p>
                                   <p>
                                      ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম য র ল শ ষ স হ ড় ঢ় য় ৎ ং ঃ ঁ
                                   </p>
                                   <p>
                                      ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ ০
                                   </p>
                                   <p>
                                      ? ! । - ;
                                   </p>
                                </div>
                             </div>


                             <div className={styles.fontPara}>
                                <i className={`fas fa-eye fa-fw ${styles.icons}`}/>

                                <div style={{overflow: 'hidden'}}>
                                   <h2>{localization.preview}</h2>
                                   <hr className={styles.divider}/>
                                   {
                                      (() => {
                                         let paraNo = getRandomInt(0, paragraph.length - 1);

                                         return this.state.font.styles.map(value => {
                                            return (
                                                <React.Fragment key={value}>
                                                   <h4 className="font-weight-bold mb-3 mt-4">{localization[value.toLowerCase()]}</h4>
                                                   <textarea
                                                       style={{fontFamily: this.state.font.name, fontWeight: value}}
                                                       defaultValue={paragraph[paraNo]}/>
                                                </React.Fragment>
                                            );
                                         })
                                      })()
                                   }
                                </div>
                             </div>
                          </div>
                       </div>


                       <div className={styles.fontInstruction} id="getting-the-font">
                          <i className={`fas fa-cloud-download-alt fa-fw ${styles.icons}`}/>

                          <h2 className="">{localization.useFont}</h2>
                          <hr className={styles.divider}/>
                          <p className="font-weight-bold">{localization.code1}
                             <code>{"<head>"}</code> {localization.code2}
                          </p>

                          {
                             this.state.font.styles.map(value => {
                                const codeString = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nokshaia/angkur@latest/PublicFonts/${this.fontName}/stylesheet_${value}.min.css"/>`;

                                return (
                                    <div className={styles.fontCopyDiv} key={value}>
                                       <p className="font-weight-bold">{localization.fontWeightText}: {localization[value.toLowerCase()]}</p>

                                       <div className={styles.codeCopy}>
                                          <button
                                              data-tip={`${localization.copyConfirm} ${this.emoji[getRandomInt(0, 6)]}`}
                                              data-event='click' data-event-off='mousemove touchstart'
                                              data-delay-hide='1000'
                                              data-for={`tool1${value}`}>
                                             <i className="far fa-copy"/> {localization.copy}
                                          </button>

                                          <ReactTooltip id={`tool1${value}`} afterShow={(event) => {
                                             copyToClipboard(codeString);
                                          }}/>


                                          <SyntaxHighlighter language='html'
                                                             style={atomDark}>{codeString}</SyntaxHighlighter>
                                       </div>
                                       <br/>
                                    </div>
                                );
                             })
                          }

                          {
                             this.state.font.styles.length === 1 ? null : (
                                 <div>

                                    <p className="font-weight-bold">{localization.allcss}</p>

                                    <div className={styles.codeCopy}>
                                       <button
                                           data-tip={`${localization.copyConfirm} ${this.emoji[getRandomInt(0, 6)]}`}
                                           data-event='click' data-event-off='mousemove touchstart'
                                           data-delay-hide='1000'
                                           data-for='tool2'>
                                          <i className="far fa-copy"/> {localization.copy}
                                       </button>

                                       <ReactTooltip id='tool2' afterShow={(event) => {
                                          copyToClipboard(`<link rel="stylesheet" href="${this.getAllStyles()}"/>`);
                                       }}/>

                                       <SyntaxHighlighter language='html' style={atomDark}>
                                          {`<link rel="stylesheet" href="${this.getAllStyles()}"/>`}
                                       </SyntaxHighlighter>
                                    </div>
                                 </div>
                             )
                          }

                          <p className=" mt-5 font-weight-bold">{localization.typeface}</p>

                          <div>

                             <div className={styles.codeCopy}>
                                <button data-tip={`${localization.copyConfirm} ${this.emoji[getRandomInt(0, 6)]}`}
                                        data-event='click'
                                        data-event-off='mousemove touchstart' data-delay-hide='1000' data-for='tool3'>
                                   <i className="far fa-copy"/> {localization.copy}
                                </button>
                                <ReactTooltip id='tool3' afterShow={(event) => {
                                   copyToClipboard(`* {\n\tfont-family: '${this.state.font.name}', ${this.state.font.type === "0" ? 'serif' : 'sans-serif'};\n}`);
                                }}/>

                                <SyntaxHighlighter language='css'
                                                   style={atomDark}>{`* {\n\tfont-family: '${this.state.font.name}', `
                                + `${this.state.font.type === "0" ? 'serif' : 'sans-serif'};\n}`}</SyntaxHighlighter>
                             </div>
                          </div>

                          <p className="mt-5">{localization.dl1}
                             <strong>{this.state.font.name}</strong> {localization.dl2}</p>
                          {
                             this.state.font.file.map((value, index) => (
                                 <React.Fragment key={value}>
                                    <a href={`https://cdn.jsdelivr.net/gh/nokshaia/angkur@latest/PublicFonts/${this.fontName}/${value}`}>
                                       <button
                                           className="btn btn-warning rounded shadow-sm rounded-pill px-4 py-2 mr-3 mt-3 mt-md-0">
                                          <strong>Download {this.fontName} {this.state.font.styles[index]}</strong>
                                       </button>
                                    </a>
                                 </React.Fragment>
                             ))
                          }
                       </div>

                    </div> : this.state.error ?
                        <h1 className="mt-5"><i className="fas fa-exclamation-triangle mr-2"/> Error Loading Font.
                           Please check the URL.</h1>
                        : <h1 className="mt-5"><i className="fas fa-spinner fa-spin mr-2"/> Loading Font Details</h1>}

             </div>

             <Footer/>
          </div>
      );
   }
}

const copyToClipboard = str => {
   const el = document.createElement('textarea');
   el.value = str;
   document.body.appendChild(el);
   el.select();
   document.execCommand('copy');
   document.body.removeChild(el);
};

export default FontPage;