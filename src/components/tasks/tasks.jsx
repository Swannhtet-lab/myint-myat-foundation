import React from 'react';
import './tasks.css';
import { BookOpen, GraduationCap, ClipboardList } from 'lucide-react';

const Tasks = () => {
  return (
    <section id="tasks" className="tasks-section">
      <h1>ဆောင်ရွက်ချက်များ</h1>

      <div className="tasks-grid">
        <div className="task-card">
          <BookOpen className="task-icon" />
          <h2>ဗလာစာအုပ်များ ထောက်ပံ့ခြင်း</h2>
          <p>
            ပြင်ဉီးလွင်မြို့နယ်အတွင်းရှိ အခြေခံပညာကျောင်းအသီးသီးမှချို့တဲ့နွမ်းပါး ကျောင်းသား
            ကျောင်းသူများအား နှစ်စ၌ ဗလာစာအုပ်များ ထောက်ပံ့လှူဒါန်းလျက်ရှိရာ ၂၀၁၆ မှ ၂၀၂၅ မထိ
            ဗလာစာအုပ်ဒါဇင်ပေါင်း (၁၀,၈၇၀) ကို ထောက်ပံ့လှူဒါန်းခဲ့ပါသည်။
          </p>
          <a href="#" className="task-link">ပုံကြည့်ရန်</a>
        </div>

        <div className="task-card">
          <GraduationCap className="task-icon" />
          <h2>ပညာသင်ဆုများ ပေးအပ်ခြင်း</h2>
          <p>
            တက္ကသိုလ်အဆင့် ကျောင်းသား/ကျောင်းသူများအား ပညာသင်ဆုများ ပေးအပ်လျက်ရှိရာ
            ၂၀၁၆ မှ ၂၀၂၅ အထိ တက္ကသိုလ် ကျောင်းသား/သူ (၉၈) ဉီးကို ပညာသင်ဆုများပေးအပ်နိုင်ခဲ့ပြီး
            ဘွဲ့ရရှိသူ (၂၇) ဉီးပေါ်ထွန်းလာပြီဖြစ်ပါသည်။
          </p>
          <a href="#" className="task-link">ပုံကြည့်ရန်</a>
        </div>

        <div className="task-card">
          <ClipboardList className="task-icon" />
          <h2>စာကြည့်တိုက် ဖွင့်လှစ်ခြင်း</h2>
          <p>
            ကျောင်းသား/သူများ ပညာသင်ကြားရေးတွင် အထောက်အကူပြုနိုင်ရန်နှင့် အသိဉာဏ်ဖွံဖြိုးတိုးတက်စေရန်
            ရည်ရွယ်၍ အများပြည်သူဖတ်ရှုလေ့လာနိုင်မည့် စာကြည့်တိုက်တစ်ခုကို ၂၀၂၀ ခုနှစ်တွင်
            တည်ထောင်ဖွင့်လှစ်ထားရှိပါသည်။
          </p>
          <a href="#" className="task-link">ပုံကြည့်ရန်</a>
        </div>
      </div>
    </section>
  );
};

export default Tasks;