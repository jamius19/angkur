import React, {Component} from 'react';
import styles from './FontList.module.scss';
import Font from "./Font/Font";
import {getRandomInt} from "../../utility/UtilityFunc";


class FontList extends Component {

   state = {
      fonts: []
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
      fetch("https://cdn.jsdelivr.net/gh/jamius19/angkur@latest/PublicFonts/fonts.json")
          .then(value => value.json())
          .then(value => {
             this.setState({
                fonts: value.fonts,
             });
          });
   }

   render() {
      //console.log(this.state);


      return (
          <div className={"mt-5 " + styles.fontContainer}>
             {
                this.state.fonts.map(value => {
                   return <Font name={value.name}
                                author={value.author}
                                styles={value.styles}
                                key={value.id}
                                type={value.type}
                                text={this.lineList[getRandomInt(0, this.lineList.length - 1)]}/>;
                })
             }
          </div>
      );
   }
}

export default FontList;