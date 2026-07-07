/* Souti AAC — shared site behaviors + i18n (EN/AR) */
(function () {
  "use strict";

  var I18N = {
    en: {
      navHome: "Home", navMedia: "Media", navSupport: "Support", navPrivacy: "Privacy", navTerms: "Terms", navDownload: "Download", navFeatures: "Features",
      footerRights: "All rights reserved.",
      /* home */
      heroBadge: "AAC for Arabic + English",
      heroTitle: "Every child deserves a voice in their language",
      heroLead: "Souti AAC helps children build full sentences, learn vocabulary, and communicate clearly using symbols, custom audio, and child-friendly layouts \u2014 in Arabic and English.",
      ctaDownload: "Download on the App Store", ctaWatch: "Watch tutorials",
      trust1t: "Works offline", trust1d: "No connection needed",
      trust2t: "One-time purchase", trust2d: "No subscriptions",
      trust3t: "Arabic & English", trust3d: "Fully bilingual",
      trust4t: "iPhone & iPad", trust4d: "Designed for both",
      trust5t: "Private by design", trust5d: "Data stays on device",
      featKicker: "Features", featTitle: "Built for daily communication",
      featLead: "A practical AAC tool for home, school, therapy, and real conversations.",
      f1pill: "Voice", f1t: "Speak full sentences",
      f1d: "Tap symbols to build a sentence, then press Speak to pronounce it completely \u2014 in Arabic or English. Children express whole thoughts, not single words.",
      f2pill: "Personal", f2t: "Your photos, your voice",
      f2d: "Add your own pictures and record custom voice clips for personalized symbols. Familiar faces and voices make communication natural and meaningful.",
      f3pill: "Accessibility", f3t: "Zoom, reorder, adapt",
      f3d: "Zoom symbols for easier tapping, drag to reorder them to match each child's needs, and adjust layouts for iPhone or iPad. The app adapts to the child \u2014 not the other way around.",
      f4pill: "School", f4t: "School vocabulary built in",
      f4d: "Structured school categories \u2014 subjects, supplies, places, numbers, both alphabets \u2014 support practical learning and classroom expression.",
      biKicker: "Bilingual by design", biTitle: "Arabic and English together",
      biLead: "Switch between languages across communication categories while keeping the same familiar symbol system.",
      biNote: "Both languages \u00b7 Same symbols \u00b7 One app",
      vidKicker: "How-to videos", vidTitle: "Learn the app with short tutorials",
      vidLead: "Quick walkthroughs in English and Arabic \u2014 from the first tap to custom symbols.",
      vidFeatLabel: "Start here", vidFeatTitle: "How the App Looks", vidAll: "View all media \u2192",
      tut1: "Speak Full Sentences", tut2: "Add Custom Symbols", tut3: "Search Symbols", tut4: "Zoom and Layout",
      finalTitle: "Ready to help communication feel easier?",
      finalLead: "Download Souti AAC from the App Store and start building personalized communication today. One purchase, no subscriptions.",
      /* media */
      mBadge: "Media Gallery", mTitle: "See Souti AAC in action",
      mLead: "Real screenshots and tutorial videos of the app \u2014 for families, therapists, and reviewers.",
      chipAll: "All", chipShots: "Screenshots", chipVideos: "Videos",
      tagShot: "Screenshot", tagVideo: "Video",
      m1: "School Folder Overview (iPad)", m2: "School Vocabulary (iPad)", m3: "iPad Category Navigation",
      m4: "Tap Speak Feature", m5: "Add Custom Pictures and Voices", m6: "Reorder Symbols",
      m7: "Zoom for Accessibility", m8: "iPad Quick Communication", m9: "iPhone Communication Layout",
      v1: "Souti App Video Demo", v2: "How the App Looks", v3: "Speak Full Sentences",
      v4: "Add Custom Symbols", v5: "My Symbols", v6: "Search Symbols", v7: "Zoom and Layout",
      /* support */
      sBadge: "Support Center", sTitle: "How can we help?",
      sLead: "Find answers to common questions, learn how to get the most out of Souti, or reach our team directly \u2014 we usually reply within a few days.",
      searchPh: "Search questions\u2026",
      qcEmailLabel: "Email", qcEmailTitle: "Write to us",
      qcTimeLabel: "Timing", qcTimeTitle: "Response time", qcTimeValue: "1\u20133 business days",
      qcLangLabel: "Languages", qcLangTitle: "Bilingual help", qcLangValue: "Arabic & English",
      faqKicker: "FAQ", faqTitle: "Frequently asked questions", faqSub: "Tap a question to see the answer.",
      catAll: "All", catPurchase: "Purchase & access", catChild: "For your child", catPersonalize: "Personalizing", catPrivacy: "Privacy & languages",
      noResultsTitle: "No matches yet", noResultsBody: "Try a different word, or email us and we'll help you directly.",
      q1: "How is Souti purchased?", a1: "Souti is a one-time purchase app. Once you buy it, it stays on your device with no recurring fees.",
      q2: "Do I need internet to use Souti?", a2: "No. Souti works offline once installed. You only need internet for downloading the app or updating it.",
      q3: "Can I use my own photos and voice recordings?", a3: "Yes. You can upload custom photos, record your own voice, and personalize icons for your child. This makes communication more natural and meaningful.",
      q4: "Who is Souti designed for?", a4: "Souti is designed for non-verbal or minimally verbal children, children with autism, early learners, speech-delayed children, and parents and therapists using ABA or communication-based programs.",
      q5: "Is Souti suitable for therapy sessions?", a5: "Yes. Souti can be used during ABA sessions, in classroom settings, at home with parents, and as a reinforcement or manding tool. It supports structured communication learning.",
      q6: "Does Souti support Arabic and English?", a6: "Yes. Souti supports both Arabic and English, making it suitable for bilingual families.",
      q7: "Will my data stay private?", a7: "Yes. All content (photos and recordings) stays on your device. Souti does not sell or share personal data.",
      q8: "Is Souti overwhelming for beginners?", a8: "No. The design is simple, soft, and child-friendly, helping reduce sensory overload.",
      q9: "Can parents use it without therapy training?", a9: "Yes. Souti is designed to be intuitive for both therapists and parents.",
      bugKicker: "Reporting a bug", bugTitle: "Help us fix it faster",
      bugSub: "Include these details in your message so we can find the issue right away.",
      bug1t: "Device type", bug1d: "e.g. iPad Pro 11-inch",
      bug2t: "iOS version", bug2d: "Settings \u203a General \u203a About",
      bug3t: "App version", bug3d: "Shown inside Souti's Settings",
      bug4t: "Screenshots", bug4d: "Screen recordings help even more",
      sCtaTitle: "Still need a hand?",
      sCtaLead: "Send us a message describing what's happening and we'll get back to you within 1\u20133 business days.",
      sCtaBtn: "Email support@souti.ca",
      /* privacy */
      pBadge: "Privacy Policy", pTitle: "Your family's data stays yours",
      pEffective: "Effective date: February 16, 2026",
      psum1t: "Nothing leaves your device", psum1d: "All photos, recordings, and settings are stored locally only.",
      psum2t: "No tracking, no analytics", psum2d: "We send no personal data or analytics to any server.",
      psum3t: "COPPA compliant", psum3d: "Designed to protect children's privacy from the ground up.",
      p1t: "Data Collection & Usage",
      p1d: "Souti AAC runs locally on your device. We do not collect, upload, or store personal data on remote servers.",
      p1l1: "Local profile data: profile and settings data are stored locally on your device.",
      p1l2: "Custom content: images and audio recordings you add are stored locally to provide your AAC experience.",
      p1l3: "Network & analytics: Souti AAC does not send analytics, tracking, or personal data to any Souti server.",
      p2t: "Purchases",
      p2d: "Souti AAC is a one-time purchased app. We do not use recurring subscriptions or recurring billing. Payment is handled entirely by Apple through your App Store account.",
      p3t: "Permissions",
      p3d: "Souti AAC requests device permissions only when you use the related feature:",
      p3l1: "Camera \u2014 only when you choose to capture custom symbol images.",
      p3l2: "Microphone \u2014 only when you choose to record custom voice clips.",
      p3l3: "Photo library \u2014 only when you choose to upload or save custom images.",
      p4t: "Data Protection & Third Parties",
      p4d: "Souti AAC does not collect personal data and does not rely on backend servers for user content. We do not sell, rent, trade, share, or transmit personal data to third parties.",
      p5t: "Storage & Retention",
      p5d: "Your symbols, images, recordings, and settings remain on your device. You can remove data directly in the app, and uninstalling the app removes local app data.",
      p6t: "User Rights & Deletion",
      p6d: "You have full control over your data and can delete symbols, media, and profile data directly from the app at any time. No account is required, and no deletion request needs to be sent to us \u2014 your data never reaches us.",
      p7t: "Children's Privacy (COPPA)",
      p7d: "Souti AAC complies with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information from children. Because all content stays on the device, no child data is ever transmitted. For any privacy-related inquiries regarding a minor, please contact us with guardian verification.",
      pContactTitle: "Privacy questions?",
      pContactBody: "For any privacy-related inquiries \u2014 including requests regarding a minor (with guardian verification) \u2014 contact us:",
      /* terms */
      tBadge: "Terms of Use", tTitle: "Simple, fair terms",
      tLead: "By downloading or using Souti AAC, you agree to the following terms.",
      t1t: "Purpose",
      t1d: "Souti AAC is provided for communication and educational support. It is a tool to assist expression \u2014 it is not a medical device and does not replace professional therapy or medical advice.",
      t2t: "Your Content",
      t2d: "You are responsible for the content you upload into the app \u2014 images, audio recordings, and custom symbols. All such content stays on your device.",
      t3t: "Acceptable Use",
      t3d: "Do not use the app for unlawful activities or to create content that infringes the rights of others.",
      t4t: "Purchases",
      t4d: "Souti AAC is a one-time purchase handled by Apple through the App Store. Refunds follow Apple's standard App Store refund policies.",
      t5t: "Updates to These Terms",
      t5d: "We may update these terms from time to time; continued use of the app means acceptance of the updated terms. Significant changes will be reflected on this page.",
      tContactTitle: "Questions about these terms?",
      tContactBody: "Contact us and we'll be happy to clarify anything:"
    },
    ar: {
      navHome: "الرئيسية", navMedia: "الوسائط", navSupport: "الدعم", navPrivacy: "الخصوصية", navTerms: "الشروط", navDownload: "تحميل", navFeatures: "المميزات",
      footerRights: "جميع الحقوق محفوظة.",
      heroBadge: "تواصل معزز بالعربية والإنجليزية",
      heroTitle: "كل طفل يستحق صوتاً بلغته",
      heroLead: "يساعد Souti AAC الأطفال على بناء جمل كاملة، وتعلم المفردات، والتواصل بوضوح باستخدام الرموز والصوت المخصص وواجهات صديقة للأطفال — بالعربية والإنجليزية.",
      ctaDownload: "حمّله من متجر التطبيقات", ctaWatch: "شاهد الشروحات",
      trust1t: "يعمل بدون إنترنت", trust1d: "لا حاجة للاتصال",
      trust2t: "شراء لمرة واحدة", trust2d: "بدون اشتراكات",
      trust3t: "عربي وإنجليزي", trust3d: "ثنائي اللغة بالكامل",
      trust4t: "آيفون وآيباد", trust4d: "مصمم لكليهما",
      trust5t: "خصوصية تامة", trust5d: "البيانات تبقى على جهازك",
      featKicker: "المميزات", featTitle: "مصمم للتواصل اليومي",
      featLead: "أداة تواصل عملية للمنزل والمدرسة والجلسات العلاجية والمحادثات الحقيقية.",
      f1pill: "صوت", f1t: "نطق جمل كاملة",
      f1d: "اضغط على الرموز لبناء جملة، ثم اضغط «تحدث» لنطقها كاملة — بالعربية أو الإنجليزية. يعبّر الأطفال عن أفكار كاملة، لا كلمات مفردة.",
      f2pill: "تخصيص", f2t: "صورك وصوتك",
      f2d: "أضف صورك الخاصة وسجّل مقاطع صوتية مخصصة للرموز. الوجوه والأصوات المألوفة تجعل التواصل طبيعياً وذا معنى.",
      f3pill: "إمكانية الوصول", f3t: "تكبير وترتيب وتكيّف",
      f3d: "كبّر الرموز لسهولة الضغط، واسحب لإعادة ترتيبها حسب احتياجات كل طفل. التطبيق يتكيّف مع الطفل — وليس العكس.",
      f4pill: "مدرسة", f4t: "مفردات مدرسية مدمجة",
      f4d: "فئات مدرسية منظمة — مواد وأدوات وأماكن وأرقام وكلا الأبجديتين — تدعم التعلم العملي والتعبير في الفصل.",
      biKicker: "ثنائي اللغة بالتصميم", biTitle: "العربية والإنجليزية معاً",
      biLead: "بدّل بين اللغتين عبر فئات التواصل مع الحفاظ على نفس نظام الرموز المألوف.",
      biNote: "اللغتان · نفس الرموز · تطبيق واحد",
      vidKicker: "فيديوهات تعليمية", vidTitle: "تعلّم التطبيق بشروحات قصيرة",
      vidLead: "جولات سريعة بالعربية والإنجليزية — من أول ضغطة إلى الرموز المخصصة.",
      vidFeatLabel: "ابدأ هنا", vidFeatTitle: "شكل التطبيق", vidAll: "عرض كل الوسائط ←",
      tut1: "نطق الجمل الكاملة", tut2: "إضافة رموز مخصصة", tut3: "البحث عن الرموز", tut4: "التكبير والتخطيط",
      finalTitle: "مستعد لجعل التواصل أسهل؟",
      finalLead: "حمّل Souti AAC من متجر التطبيقات وابدأ ببناء تواصل مخصص اليوم. شراء واحد، بدون اشتراكات.",
      mBadge: "معرض الوسائط", mTitle: "شاهد Souti AAC أثناء الاستخدام",
      mLead: "لقطات شاشة حقيقية وفيديوهات تعليمية للتطبيق — للعائلات والمعالجين والمراجعين.",
      chipAll: "الكل", chipShots: "لقطات الشاشة", chipVideos: "فيديوهات",
      tagShot: "لقطة", tagVideo: "فيديو",
      m1: "نظرة عامة على مجلد المدرسة (آيباد)", m2: "مفردات المدرسة (آيباد)", m3: "التنقل بين الفئات على الآيباد",
      m4: "ميزة اضغط للتحدث", m5: "إضافة صور وأصوات مخصصة", m6: "إعادة ترتيب الرموز",
      m7: "تكبير لسهولة الوصول", m8: "تواصل سريع على الآيباد", m9: "واجهة التواصل على الآيفون",
      v1: "فيديو عرض تطبيق صوتي", v2: "شكل التطبيق", v3: "نطق الجمل الكاملة",
      v4: "إضافة رموز مخصصة", v5: "رموزي", v6: "البحث عن الرموز", v7: "التكبير وتخطيط الرموز",
      sBadge: "مركز الدعم", sTitle: "كيف يمكننا مساعدتك؟",
      sLead: "اعثر على إجابات للأسئلة الشائعة، وتعلّم كيف تحقق أقصى استفادة من Souti، أو تواصل مع فريقنا مباشرة — نردّ عادةً خلال أيام قليلة.",
      searchPh: "ابحث في الأسئلة…",
      qcEmailLabel: "البريد", qcEmailTitle: "راسلنا",
      qcTimeLabel: "التوقيت", qcTimeTitle: "وقت الاستجابة", qcTimeValue: "١–٣ أيام عمل",
      qcLangLabel: "اللغات", qcLangTitle: "دعم ثنائي اللغة", qcLangValue: "العربية والإنجليزية",
      faqKicker: "الأسئلة الشائعة", faqTitle: "الأسئلة الأكثر شيوعاً", faqSub: "اضغط على السؤال لعرض الإجابة.",
      catAll: "الكل", catPurchase: "الشراء والوصول", catChild: "لطفلك", catPersonalize: "التخصيص", catPrivacy: "الخصوصية واللغات",
      noResultsTitle: "لا توجد نتائج بعد", noResultsBody: "جرّب كلمة أخرى، أو راسلنا وسنساعدك مباشرة.",
      q1: "كيف يتم شراء تطبيق Souti؟", a1: "Souti هو تطبيق يُشترى لمرة واحدة. بعد الشراء يبقى على جهازك بدون رسوم متكررة.",
      q2: "هل أحتاج إلى إنترنت لاستخدام Souti؟", a2: "لا. يعمل Souti بدون اتصال بالإنترنت بمجرد تثبيته. تحتاج فقط إلى الإنترنت لتحميل التطبيق أو تحديثه.",
      q3: "هل يمكنني استخدام صوري الخاصة وتسجيلاتي الصوتية؟", a3: "نعم. يمكنك رفع صور مخصصة، وتسجيل صوتك الخاص، وتخصيص الأيقونات لطفلك. هذا يجعل التواصل أكثر طبيعية وذا مغزى.",
      q4: "لمن صُمم Souti؟", a4: "صُمم Souti للأطفال غير الناطقين أو ذوي النطق المحدود، والأطفال المصابين بالتوحد، والمتعلمين الأوائل، والأطفال الذين يعانون من تأخر في الكلام، والآباء والمعالجين الذين يستخدمون برامج ABA أو البرامج القائمة على التواصل.",
      q5: "هل Souti مناسب لجلسات العلاج؟", a5: "نعم. يمكن استخدام Souti خلال جلسات ABA، وفي الفصول الدراسية، وفي المنزل مع الآباء، وكأداة تعزيز أو طلب. إنه يدعم تعلم التواصل المنظم.",
      q6: "هل يدعم Souti اللغتين العربية والإنجليزية؟", a6: "نعم. يدعم Souti كلا اللغتين العربية والإنجليزية، مما يجعله مناسباً للعائلات ثنائية اللغة.",
      q7: "هل ستبقى بياناتي خاصة؟", a7: "نعم. كل المحتوى (الصور والتسجيلات) يبقى على جهازك. Souti لا يبيع أو يشارك البيانات الشخصية.",
      q8: "هل Souti مربك للمبتدئين؟", a8: "لا. التصميم بسيط وناعم وصديق للأطفال، مما يساعد في تقليل التحميل الحسي الزائد.",
      q9: "هل يمكن للوالدين استخدامه بدون تدريب علاجي؟", a9: "نعم. صُمم Souti ليكون بديهياً لكل من المعالجين والآباء.",
      bugKicker: "الإبلاغ عن مشكلة", bugTitle: "ساعدنا في حلّها بسرعة",
      bugSub: "أرفق هذه التفاصيل في رسالتك حتى نتمكن من تحديد المشكلة فوراً.",
      bug1t: "نوع الجهاز", bug1d: "مثال: iPad Pro 11-inch",
      bug2t: "إصدار iOS", bug2d: "الإعدادات › عام › حول",
      bug3t: "إصدار التطبيق", bug3d: "موجود في إعدادات Souti",
      bug4t: "لقطات الشاشة", bug4d: "تسجيلات الشاشة تساعد أكثر",
      sCtaTitle: "لا تزال بحاجة إلى مساعدة؟",
      sCtaLead: "أرسل لنا رسالة تصف ما يحدث وسنعاود التواصل معك خلال ١–٣ أيام عمل.",
      sCtaBtn: "راسلنا على support@souti.ca",
      pBadge: "سياسة الخصوصية", pTitle: "بيانات عائلتك تبقى لك",
      pEffective: "تاريخ السريان: 16 فبراير 2026",
      psum1t: "لا شيء يغادر جهازك", psum1d: "كل الصور والتسجيلات والإعدادات تُخزّن محلياً فقط.",
      psum2t: "لا تتبع ولا تحليلات", psum2d: "لا نرسل أي بيانات شخصية أو تحليلات إلى أي خادم.",
      psum3t: "متوافق مع COPPA", psum3d: "مصمم لحماية خصوصية الأطفال منذ البداية.",
      p1t: "جمع البيانات واستخدامها",
      p1d: "يعمل Souti AAC محلياً على جهازك. نحن لا نجمع أو نرفع أو نخزّن بيانات شخصية على خوادم بعيدة.",
      p1l1: "بيانات الملف الشخصي: تُخزّن بيانات الملف والإعدادات محلياً على جهازك.",
      p1l2: "المحتوى المخصص: الصور والتسجيلات الصوتية التي تضيفها تُخزّن محلياً.",
      p1l3: "الشبكة والتحليلات: لا يرسل Souti AAC أي تحليلات أو تتبع أو بيانات شخصية إلى أي خادم.",
      p2t: "المشتريات",
      p2d: "Souti AAC تطبيق يُشترى لمرة واحدة. لا نستخدم اشتراكات أو فواتير متكررة. تتم معالجة الدفع بالكامل بواسطة Apple عبر حسابك في متجر التطبيقات.",
      p3t: "الأذونات",
      p3d: "يطلب Souti AAC أذونات الجهاز فقط عند استخدامك للميزة المتعلقة:",
      p3l1: "الكاميرا — فقط عند اختيارك التقاط صور رموز مخصصة.",
      p3l2: "الميكروفون — فقط عند اختيارك تسجيل مقاطع صوتية مخصصة.",
      p3l3: "مكتبة الصور — فقط عند اختيارك رفع أو حفظ صور مخصصة.",
      p4t: "حماية البيانات والأطراف الثالثة",
      p4d: "لا يجمع Souti AAC بيانات شخصية ولا يعتمد على خوادم خلفية لمحتوى المستخدم. نحن لا نبيع أو نؤجر أو نتبادل أو نشارك أو ننقل البيانات الشخصية إلى أطراف ثالثة.",
      p5t: "التخزين والاحتفاظ",
      p5d: "تبقى رموزك وصورك وتسجيلاتك وإعداداتك على جهازك. يمكنك حذف البيانات مباشرة من التطبيق، وإلغاء تثبيت التطبيق يزيل بياناته المحلية.",
      p6t: "حقوق المستخدم والحذف",
      p6d: "لديك تحكم كامل في بياناتك ويمكنك حذف الرموز والوسائط وبيانات الملف الشخصي مباشرة من التطبيق في أي وقت. لا يلزم إنشاء حساب، وبياناتك لا تصل إلينا أبداً.",
      p7t: "خصوصية الأطفال (COPPA)",
      p7d: "يمتثل Souti AAC لقانون حماية خصوصية الأطفال عبر الإنترنت (COPPA). نحن لا نجمع معلومات شخصية من الأطفال عن علم. ولأن كل المحتوى يبقى على الجهاز، لا تُنقل بيانات الأطفال أبداً. لأي استفسار يخص قاصراً، يرجى التواصل معنا مع التحقق من الوصي.",
      pContactTitle: "أسئلة حول الخصوصية؟",
      pContactBody: "لأي استفسارات متعلقة بالخصوصية — بما في ذلك الطلبات المتعلقة بقاصر (مع التحقق من الوصي) — تواصل معنا:",
      tBadge: "شروط الاستخدام", tTitle: "شروط بسيطة وعادلة",
      tLead: "بتحميل أو استخدام Souti AAC، فإنك توافق على الشروط التالية.",
      t1t: "الغرض",
      t1d: "يُقدّم Souti AAC لدعم التواصل والتعليم. إنه أداة لمساعدة التعبير — وليس جهازاً طبياً ولا بديلاً عن العلاج المتخصص أو الاستشارة الطبية.",
      t2t: "محتواك",
      t2d: "أنت مسؤول عن المحتوى الذي ترفعه إلى التطبيق — الصور والتسجيلات الصوتية والرموز المخصصة. كل هذا المحتوى يبقى على جهازك.",
      t3t: "الاستخدام المقبول",
      t3d: "لا تستخدم التطبيق في أنشطة غير قانونية أو لإنشاء محتوى ينتهك حقوق الآخرين.",
      t4t: "المشتريات",
      t4d: "Souti AAC شراء لمرة واحدة تتم معالجته بواسطة Apple عبر متجر التطبيقات. تخضع المبالغ المستردة لسياسات Apple القياسية.",
      t5t: "تحديثات هذه الشروط",
      t5d: "قد نحدّث هذه الشروط من وقت لآخر؛ واستمرار استخدام التطبيق يعني قبول الشروط المحدثة. ستنعكس التغييرات المهمة على هذه الصفحة.",
      tContactTitle: "أسئلة حول هذه الشروط؟",
      tContactBody: "تواصل معنا وسنوضح لك أي شيء بكل سرور:"
    }
  };

  function getLang() {
    try {
      var l = localStorage.getItem("preferred-lang");
      if (l === "ar" || l === "en") return l;
    } catch (e) {}
    return "en";
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-t]").forEach(function (el) {
      var k = el.getAttribute("data-t");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-t-ph]").forEach(function (el) {
      var k = el.getAttribute("data-t-ph");
      if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
    });
    document.querySelectorAll("[data-href-en]").forEach(function (el) {
      el.setAttribute("href", el.getAttribute(lang === "ar" ? "data-href-ar" : "data-href-en"));
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      var active = b.getAttribute("data-lang") === lang;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setLang(lang) {
    try { localStorage.setItem("preferred-lang", lang); } catch (e) {}
    applyLang(lang);
  }

  function initFaq() {
    document.querySelectorAll(".faq-item").forEach(function (item) {
      var btn = item.querySelector(".faq-q");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
    var search = document.getElementById("faq-search");
    var chips = document.querySelectorAll(".cat-chip");
    function refresh() {
      var q = search ? search.value.trim().toLowerCase() : "";
      var activeChip = document.querySelector(".cat-chip.active");
      var cat = activeChip ? activeChip.getAttribute("data-cat") : "all";
      var visible = 0;
      document.querySelectorAll(".faq-item").forEach(function (item) {
        var okCat = cat === "all" || item.getAttribute("data-cat") === cat;
        var okQ = !q || item.textContent.toLowerCase().indexOf(q) !== -1;
        var show = okCat && okQ;
        item.style.display = show ? "" : "none";
        if (show) visible++;
      });
      var empty = document.getElementById("faq-empty");
      if (empty) empty.style.display = visible === 0 ? "" : "none";
    }
    if (search) search.addEventListener("input", refresh);
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        refresh();
      });
    });
  }

  function initMediaFilter() {
    var chips = document.querySelectorAll(".media-chip");
    if (!chips.length) return;
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        var kind = chip.getAttribute("data-kind");
        document.querySelectorAll(".media-card").forEach(function (card) {
          card.style.display = (kind === "all" || card.getAttribute("data-kind") === kind) ? "" : "none";
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
    applyLang(getLang());
    initFaq();
    initMediaFilter();
  });
})();
