/**
 * Agency Lens · UDL 3.0
 * udl:1.1,1.2,2.1,2.5,3.2,4.1,5.1,5.3,6.1,6.3,6.4,7.1,7.3,7.4,8.1,8.2,8.5,9.1,9.3
 * Paste into a Google Apps Script project.
 * CAST (2024). Not a CAST product.
 */

var AGENCY_LENS = {
  version: "3.0",
  marker: "udl:1.1,1.2,2.1,2.5,3.2,4.1,5.1,5.3,6.1,6.3,6.4,7.1,7.3,7.4,8.1,8.2,8.5,9.1,9.3",
  title: "ADHD session",
  audience: "",
  goal: "The goal of UDL is learner agency that is purposeful & reflective, resourceful & authentic, strategic & action-oriented.",
  goalAr: "يتمثل الهدف من التصميم الشامل للتعلّم في تكوين وكالة متعلم تتسم بكونها هادفة وتأملية، وماهرة وأصيلة، واستراتيجية وموجهة نحو العمل.",
  considerations: [
    { id: "1.1", principle: "representation", en: "Support opportunities to customize the display of information", ar: "تقديم طرق مُحسّنة لعرض المعلومات" },
    { id: "1.2", principle: "representation", en: "Support multiple ways to perceive information", ar: "دعم طرق متعددة لإدراك المعلومات" },
    { id: "2.1", principle: "representation", en: "Clarify vocabulary, symbols, and language structures", ar: "توضيح المفردات والرموز والبنى اللغوية" },
    { id: "2.5", principle: "representation", en: "Illustrate through multiple media", ar: "التوضيح من خلال الوسائط المتعددة" },
    { id: "3.2", principle: "representation", en: "Highlight and explore patterns, critical features, big ideas, and relationships", ar: "تسليط الضوء على الأنماط والميزات المهمة والأفكار الكبيرة والعلاقات واستكشافها" },
    { id: "4.1", principle: "action", en: "Vary and honor the methods for response, navigation, and movement", ar: "تنويع أساليب الاستجابة والتنقل والحركة والالتزام بها" },
    { id: "5.1", principle: "action", en: "Use multiple media for communication", ar: "استخدام وسائط متعددة للتواصل" },
    { id: "5.3", principle: "action", en: "Build fluencies with graduated support for practice and performance", ar: "بناء أوجه الطلاقة من خلال الدعم المتدرج في الممارسة والأداء" },
    { id: "6.1", principle: "action", en: "Set meaningful goals", ar: "وضع أهداف ذات مغزى" },
    { id: "6.3", principle: "action", en: "Organize information and resources", ar: "تنظيم المعلومات والموارد" },
    { id: "6.4", principle: "action", en: "Enhance capacity for monitoring progress", ar: "تعزيز القدرة على مراقبة التقدم" },
    { id: "7.1", principle: "engagement", en: "Optimize choice and autonomy", ar: "تحسين الاختيار الفردي والاستقلالية" },
    { id: "7.3", principle: "engagement", en: "Nurture joy and play", ar: "تعزيز المرح واللعب" },
    { id: "7.4", principle: "engagement", en: "Address biases, threats, and distractions", ar: "معالجة التحيزات والتهديدات والمشتتات" },
    { id: "8.1", principle: "engagement", en: "Clarify the meaning and purpose of goals", ar: "إبراز الأهداف والغايات بشكل واضح" },
    { id: "8.2", principle: "engagement", en: "Optimize challenge and support", ar: "تحسين التحدي والدعم" },
    { id: "8.5", principle: "engagement", en: "Offer action-oriented feedback", ar: "زيادة التغذية الراجعة الموجهة نحو الإتقان" },
    { id: "9.1", principle: "engagement", en: "Recognize expectations, beliefs, and motivations", ar: "التعرّف على التوقعات والمعتقدات والدوافع" },
    { id: "9.3", principle: "engagement", en: "Promote individual and collective reflection", ar: "تعزيز التفكير الفردي والجماعي" }
  ]
};

function agencyLensBanner() {
  var lines = [];
  lines.push("Agency Lens · " + AGENCY_LENS.title);
  lines.push(AGENCY_LENS.marker);
  lines.push(AGENCY_LENS.goal);
  lines.push("");
  lines.push("Reply in visual-action chunks. One anchor per line. No dense paragraphs.");
  AGENCY_LENS.considerations.forEach(function (item) {
    lines.push("- " + item.id + " " + item.en);
  });
  if (AGENCY_LENS.audience) lines.push("");
  if (AGENCY_LENS.audience) lines.push("Context: " + AGENCY_LENS.audience);
  return lines.join("\n");
}

function udlIdsIn(source) {
  var match = String(source).match(/udl:([0-9.]+(?:,[0-9.]+)*)/);
  return match ? match[1].split(",") : [];
}

/** Inserts the banner at the top of the active Google Doc. */
function insertBannerIntoActiveDoc() {
  var body = DocumentApp.getActiveDocument().getBody();
  body.insertParagraph(0, agencyLensBanner());
}
