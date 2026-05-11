import React from 'react';
import './goal.css'; 
const goalData = [
  { id: "၀၁", text: "ပြင်ဦးလွင်မြို့နယ်အတွင်းရှိ ချို့တဲ့နွမ်းပါးသော အခြေခံပညာကျောင်းသား/သူများ ပညာရေးသင်ကြားရေးတွင် ထိရောက်သောကူညီထောက်ပံ့မှုများ ဆောင်ရွက်ပေးရန်။" },
  { id: "၀၂", text: "တက္ကသိုလ်ဝင်တန်းအောင်မြင်ပြီးနောက် တက္ကသိုလ်ပညာရေး ဆက်လက်တက်ရောက်သင်ယူရန် အခက်အခဲရှိသော ကျောင်းသား/သူများအား ကူညီထောက်ပံ့မှုများဆောင်ရွက်ပေးရန်။" },
  { id: "၀၃", text: "ချို့တဲ့မှုများပြားသော ကျောင်းများတွင် လိုအပ်သော ဖြည့်ဆည်းဆောင်ရွက်မှုများ ပြုလုပ်ပေးရန်။" },
  { id: "၀၄", text: "ကျောင်းသား/သူများ ပညာသင်ကြားရေးတွင် အထောက်အကူပြုနိုင်ရန်နှင့် ပြည်သူများ အသိပညာ ဖွံ့ဖြိုးတိုးတက်စေရန်အတွက် စာကြည့်တိုက် ဖွင့်လှစ်ထားရှိရန်။" }
];
function Goal() {
  return (
    <section id="goal" className="home-section">
      <div className="goal-wrapper">

        {/* Left Side: Header */}
        <div className="goal-header">
          <h2 className="goal-title">ရည်ရွယ်ချက်များ</h2>
          <p className="goal-intro">
            မြင့်မြတ်ပညာရေးဖောင်ဒေးရှင်းသည် အောက်ပါအဓိက ရည်ရွယ်ချက် (၄) ရပ်ဖြင့် လုပ်ငန်းစဉ်များကို အကောင်အထည်ဖော် ဆောင်ရွက်လျက်ရှိပါသည်။
          </p>
        </div>

        {/* Right Side: Grid of Cards */}
        <div className="goal-grid">
          {goalData.map((item) => (
            <div key={item.id} className="card">
              <div className="card-number">{item.id}</div>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Goal;