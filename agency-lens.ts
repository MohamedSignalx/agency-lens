/**
 * Agency Lens · UDL 3.0 × Visual-Action
 * udl:1.1,1.2,2.1,2.5,3.2,4.1,5.1,5.3,6.1,6.3,6.4,7.1,7.3,7.4,8.1,8.2,8.5,9.1,9.3
 * Session: ADHD session
 * Goal: learner agency — purposeful & reflective, resourceful & authentic, strategic & action-oriented.
 * Reply in chunks. One anchor per line. No dense paragraphs.
 * CAST (2024). Not a CAST product.
 */

export const UDL_MARKER = "udl:1.1,1.2,2.1,2.5,3.2,4.1,5.1,5.3,6.1,6.3,6.4,7.1,7.3,7.4,8.1,8.2,8.5,9.1,9.3";

export const AGENCY_LENS = {
  "spec": "udl-3.0",
  "marker": "udl:1.1,1.2,2.1,2.5,3.2,4.1,5.1,5.3,6.1,6.3,6.4,7.1,7.3,7.4,8.1,8.2,8.5,9.1,9.3",
  "title": "ADHD session",
  "audience": "",
  "goal": "The goal of UDL is learner agency that is purposeful & reflective, resourceful & authentic, strategic & action-oriented.",
  "goalAr": "يتمثل الهدف من التصميم الشامل للتعلّم في تكوين وكالة متعلم تتسم بكونها هادفة وتأملية، وماهرة وأصيلة، واستراتيجية وموجهة نحو العمل.",
  "considerations": [
    {
      "id": "1.1",
      "principle": "representation",
      "guideline": "1",
      "en": "Support opportunities to customize the display of information",
      "ar": "تقديم طرق مُحسّنة لعرض المعلومات"
    },
    {
      "id": "1.2",
      "principle": "representation",
      "guideline": "1",
      "en": "Support multiple ways to perceive information",
      "ar": "دعم طرق متعددة لإدراك المعلومات"
    },
    {
      "id": "2.1",
      "principle": "representation",
      "guideline": "2",
      "en": "Clarify vocabulary, symbols, and language structures",
      "ar": "توضيح المفردات والرموز والبنى اللغوية"
    },
    {
      "id": "2.5",
      "principle": "representation",
      "guideline": "2",
      "en": "Illustrate through multiple media",
      "ar": "التوضيح من خلال الوسائط المتعددة"
    },
    {
      "id": "3.2",
      "principle": "representation",
      "guideline": "3",
      "en": "Highlight and explore patterns, critical features, big ideas, and relationships",
      "ar": "تسليط الضوء على الأنماط والميزات المهمة والأفكار الكبيرة والعلاقات واستكشافها"
    },
    {
      "id": "4.1",
      "principle": "action",
      "guideline": "4",
      "en": "Vary and honor the methods for response, navigation, and movement",
      "ar": "تنويع أساليب الاستجابة والتنقل والحركة والالتزام بها"
    },
    {
      "id": "5.1",
      "principle": "action",
      "guideline": "5",
      "en": "Use multiple media for communication",
      "ar": "استخدام وسائط متعددة للتواصل"
    },
    {
      "id": "5.3",
      "principle": "action",
      "guideline": "5",
      "en": "Build fluencies with graduated support for practice and performance",
      "ar": "بناء أوجه الطلاقة من خلال الدعم المتدرج في الممارسة والأداء"
    },
    {
      "id": "6.1",
      "principle": "action",
      "guideline": "6",
      "en": "Set meaningful goals",
      "ar": "وضع أهداف ذات مغزى"
    },
    {
      "id": "6.3",
      "principle": "action",
      "guideline": "6",
      "en": "Organize information and resources",
      "ar": "تنظيم المعلومات والموارد"
    },
    {
      "id": "6.4",
      "principle": "action",
      "guideline": "6",
      "en": "Enhance capacity for monitoring progress",
      "ar": "تعزيز القدرة على مراقبة التقدم"
    },
    {
      "id": "7.1",
      "principle": "engagement",
      "guideline": "7",
      "en": "Optimize choice and autonomy",
      "ar": "تحسين الاختيار الفردي والاستقلالية"
    },
    {
      "id": "7.3",
      "principle": "engagement",
      "guideline": "7",
      "en": "Nurture joy and play",
      "ar": "تعزيز المرح واللعب"
    },
    {
      "id": "7.4",
      "principle": "engagement",
      "guideline": "7",
      "en": "Address biases, threats, and distractions",
      "ar": "معالجة التحيزات والتهديدات والمشتتات"
    },
    {
      "id": "8.1",
      "principle": "engagement",
      "guideline": "8",
      "en": "Clarify the meaning and purpose of goals",
      "ar": "إبراز الأهداف والغايات بشكل واضح"
    },
    {
      "id": "8.2",
      "principle": "engagement",
      "guideline": "8",
      "en": "Optimize challenge and support",
      "ar": "تحسين التحدي والدعم"
    },
    {
      "id": "8.5",
      "principle": "engagement",
      "guideline": "8",
      "en": "Offer action-oriented feedback",
      "ar": "زيادة التغذية الراجعة الموجهة نحو الإتقان"
    },
    {
      "id": "9.1",
      "principle": "engagement",
      "guideline": "9",
      "en": "Recognize expectations, beliefs, and motivations",
      "ar": "التعرّف على التوقعات والمعتقدات والدوافع"
    },
    {
      "id": "9.3",
      "principle": "engagement",
      "guideline": "9",
      "en": "Promote individual and collective reflection",
      "ar": "تعزيز التفكير الفردي والجماعي"
    }
  ]
} as const;

export function udlIdsIn(source: string): string[] {
  const match = source.match(/udl:([0-9.]+(?:,[0-9.]+)*)/);
  return match ? match[1].split(",") : [];
}
