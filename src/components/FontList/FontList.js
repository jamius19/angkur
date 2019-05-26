import React, {Component} from 'react';
import styles from './FontList.module.scss';
import Font from "./Font/Font";
import {getRandomInt} from "../../utility/UtilityFunc";
import Navbar from "../Nav/Navbar";
import Footer from "../Footer/Footer";
import LocalizedStrings from "react-localization";
import Language from "../../context/Language";

const localization = new LocalizedStrings({
   bn: {
      searchPrompt: 'এখানে ফন্ট সার্চ করুন ...',
      searchNot: 'দুঃখিত! আপনার সার্চে কোনো ফন্ট খুঁজে পাওয়া যায় নি!',
   }
   , en: {
      searchPrompt: 'Search Some fonts ...',
      searchNot: 'Sorry! No fonts were found matching your search!',
   },

});

//Sorry! No fonts were found matching your search!

class FontList extends Component {

   static contextType = Language;

   state = {
      fonts: [],
      q: '',
   };

   lineList = [
      "আমার মাছওয়ালার কথা শুনে সূনেত্রার মাছওয়ালার দৃষ্টি প্রখর হয়ে গেলো। তেজি ভঙ্গিতে প্রশ্ন করলো। প্রশ্নের মাঝে ধমকের ছোঁয়া পাওয়া যাচ্ছে।",
      "যেন প্রশ্নের সঠিক উত্তর না দিতে পারলে খবর আছে।  কী কইলি ? আমি পঁচা মাছ বেছি? এই কথা কইতে গায়ে লাগলো না তোর?",
      "বিষয়টি প্রচন্ড ক্লাইমেক্সের দিকে এগুচ্ছে। বাকীটা উপভোগের ব্যাপারে প্রস্তুতি নিয়ে ফেললেও সূনেত্রা বিষয়টি মেনে নিতে পারলো না।",
      "চেহারা কঠোর করে কঠিন একটা ধমক দিলো দুজনকে। দুজনেই চুপসে গেলো। আমিও কিছুটা! শরীরে পরিবর্তন এলেও, ধমকের তেজ পাল্টায়নি এখনো।",
      "কন্ঠ মোলায়েম করলাম, দ্যাখো তুমি না থাকলে সবাই আমাকে কেমন ঠকায়। তাই আমি তোমাকে নিয়ে আসলাম আজকে বাজারে।",
      "সূনেত্রার চোখ আরো গম্ভীর হয়ে গেলো। সে আমার কন্ঠের আকুলতা ধরার চেষ্টা করছে। বোঝার চেষ্টা করছে সত্যি নাকি মিথ্যা বলছি।",
      "এসব ব্যাপারে সে আমার কোনো কিছুই বিশ্বাস করে না। কেনো করে না সেটা অন্য এক ইতিহাস। ইদানীং ইতিহাসে আগ্রহ পাই না।",
      "একটা ব্যাপার আবিস্কার করেছি। ইতিহাস যদি ভুলে যাওয়া যায়, তবে সেটা ইতিহাস থাকে না। সেটা অর্থনীতি, সমাজ বিজ্ঞান অথবা যেকোনো কিছু হতে পারে!",
      "সূনেত্রা মাছের টুকরোগুলোর মতো পরিপাটি করে আমার দিকে তাকিয়ে তখনো আকুলতা বোঝার চেষ্টা করছে। কিন্তু কিছু খুঁজে পেলো বলে মনে হলো না।",
      "আর এদিকে আমি চেষ্টা করছি আকুলতা সত্য প্রমাণের! দুজনেই কর্মকান্ড অর্ধসমাপ্ত রেখে নতুন করে বাজার সদাই করায় মনযোগ দিলাম।"
   ];


   componentDidMount() {
      /*fetch("https://cdn.jsdelivr.net/gh/nokshaia/angkur@latest/PublicFonts/fonts.json")
          .then(value => value.json())
          .then(value => {
             this.setState({
                fonts: value.fonts,
             });
          });*/

      let arr = [
         {
            "id": 0,
            "name": "aaa",
            "author": "Solaiman Karim",
            "type": "0",
            "styles": [
               "Normal",
               "Bold"
            ],
            "file": [
               "hinted-subset-SolaimanLipiNormal.ttf",
               "hinted-subset-SolaimanLipi-Bold.ttf"
            ]
         }
         , {
            "id": 1,
            "name": "aabba",
            "author": "Solaiman Karim",
            "type": "0",
            "styles": [
               "Normal",
               "Bold"
            ],
            "file": [
               "hinted-subset-SolaimanLipiNormal.ttf",
               "hinted-subset-SolaimanLipi-Bold.ttf"
            ]
         },
         {
            "id": 2,
            "name": "bbbc",
            "author": "Ekushey.Org",
            "type": "1",
            "styles": [
               "Normal",
               "Bold"
            ],
            "file": [
               "hinted-subset-EkusheyMukto.ttf",
               "hinted-subset-EkusheyMukto-Bold.ttf"
            ]
         },
         {
            "id": 3,
            "name": "cccbb",
            "author": "Subrata Sen",
            "type": "1",
            "styles": [
               "Normal"
            ],
            "file": [
               "hinted-subset-BenSenHandwriting.ttf"
            ]
         },
         {
            "id": 4,
            "name": "abdddd",
            "author": "Subrata Sen",
            "type": "1",
            "styles": [
               "Normal"
            ],
            "file": [
               "hinted-subset-BenSenHandwriting.ttf"
            ]
         }
      ];


      setTimeout(() => {
         this.setState({
            fonts: arr,
         })
      }, 1000);
   }

   render() {
      localization.setLanguage(this.context.lang);
      let visibleFonts = 0;


      return (
          <div>
             {this.props.singlePage ? <Navbar showBG/> : null}


             <div className={styles.searchContainer}>
                <div className={`${styles.search}`}>
                   <input type="text"
                          onChange={event => {
                             this.setState({
                                q: event.target.value.toLowerCase()
                             })
                          }}
                          placeholder={`${localization.searchPrompt}`}
                          value={this.state.q}/>
                </div>
             </div>


             {
                (() => {
                   let regex = new RegExp(".*" + this.state.q + ".*", "g");

                   let fullNull = true;

                   //console.log(this.state);
                   //console.log(visibleFonts);
                   //console.log(document.documentElement.clientWidth);


                   let retRes = this.state.fonts.map(value => {

                      if (this.state.q === '') {
                         visibleFonts = this.state.fonts.length;
                      } else if (value.name.toLowerCase().search(regex)) {
                         return null;
                      }

                      fullNull = false;
                      visibleFonts++;

                      return (<Font name={value.name}
                                    author={value.author}
                                    styles={value.styles}
                                    key={value.id}
                                    type={value.type}
                                    text={this.lineList[getRandomInt(0, this.lineList.length - 1)]}/>);
                   });


                   /*for (let value in retRes) {
                      if(value == null){
                         fullNull = true;
                         break;
                      }
                   }*/


                   return fullNull ?
                       (
                           <div className="container">
                              <h1 className="mx-auto mt-4">{localization.searchNot} 😓😓</h1>
                           </div>
                       )
                       :
                       (
                           <div className={"mt-5 " + styles.fontContainer}>
                              {retRes}

                              {
                                 /*  visibleFonts > 3 && visibleFonts % 3 !== 0 && document.documentElement.clientWidth > 1469 ?
                                       <div style={{content: "", flex: '0 0 0'}}/> : null*/
                              }
                           </div>
                       );
                })()
             }
             {
                this.props.showFooter ? <Footer/> : null
             }

          </div>
      );
   }
}

export default FontList;