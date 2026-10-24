import React from 'react';
import './library.css'; 

const Library = () => {
  return (
    <section id="library" className="library-section">
      <div className="library-container">
        <div className="library-content">
          <div className="library-badge">
            <span className="icon">📚</span>
            <span>စာကြည့်တိုက်</span>
          </div>
          
          <h2 className="library-title">
            အမှောင်ခွင်း၍<br />
            အလင်းဆောင်ပေးမည့်
          </h2>
          
          <h3 className="library-subtitle">
            မြင့်မြတ် စာကြည့်တိုက်
          </h3>
          
          <p className="library-desc">
            ကလေး၊ လူကြီးမရွေး၊ လူမျိုးဘာသာမရွေး၊ လူတန်းစားမရွေး၊ မည့်သူမဆို အခမဲ့ လာရောက်ဖတ်ရှုလေ့လာနိုင်ပါသည်။ 
            ကလေးစာပေ၊ လောကီရေးရာ၊ လောကုတ္တရာရေးရာ၊ ရုတ္တဗေဒ-စုံကို မြန်မာဘာသာ၊ အင်္ဂလိပ်ဘာသာ စာအုပ်များဖြင့် စုဆောင်းရုံကြီး ဖြစ်ပါသည်။ 
            အထူးသဖြင့် ကလေးများအတွက် သီးသန့်စာဖတ်ခန်းထားရှိပြီး၊ လူတိုင်းအတွက် WiFi အခမဲ့ ဖြစ်ပါသည်။ စာအုပ်များကို မိမိအိမ်သို့ ငှားရမ်းဖတ်လိုလျှင်လည်း စာကြည့်တိုက်အသင်းဝင်ကတ်ကို အခမဲ့ပြုလုပ်၍ ငှားရမ်းနိုင်ပါသည်။
          </p>

          <div className="library-location">
            <span className="location-icon">📍</span>
            <p>ပဒေသာမြို့သစ်၊ ရပ်ကွက်ကြီး (၈)၊ ရတနာလမ်းနှင့် နဝရတ်လမ်းအကြား၊<br />ပိတောက်လမ်း၊ အမှတ် (ထ/၅၇)</p>
          </div>
        </div>

        
        <div className="library-image-wrapper">
          <img 
            src="assets/library.jpg" 
           
            className="library-img"
          />
        </div>

      </div>
    </section>
  );
};

export default Library;