import { curriculumSchema, type Lesson } from "@/features/lessons/schemas/lesson-schema";

const rawLessons = [
  {
    id: "level-1-001",
    slug: "non-rhotic-r",
    level: 1,
    module: "RP foundations",
    order: 1,
    title: "Non-rhotic R",
    shortTitle: "Non-rhotic R",
    focusSound: "R after a vowel",
    ipaFocus: "/ɑː/ /ɜː/ /ə/",
    summary: "Learn when RP drops the written R and how the vowel carries the sound.",
    introduction:
      "In standard RP, R is usually not pronounced after a vowel unless another vowel follows. The word car sounds closer to kah, and bird has a long central vowel rather than a strong final R.",
    estimatedMinutes: 8,
    coachEmoji: "🧑‍🏫",
    learningGoals: [
      "Hear the difference between written R and spoken RP R",
      "Hold the vowel without adding an American-style final R",
      "Use linking R when the next word begins with a vowel",
    ],
    sections: [
      {
        heading: "What changes",
        body:
          "When R comes after a vowel at the end of a syllable, let the vowel lengthen or settle instead of curling the tongue back for R.",
        coachTip: "Think vowel first. Keep the tongue relaxed and avoid pulling it backwards.",
      },
      {
        heading: "When R returns",
        body:
          "If the next word begins with a vowel, RP often links the R: far away becomes far-ra-way.",
        coachTip: "Use the R as a small bridge, not a heavy consonant.",
      },
    ],
    keyCues: [
      {
        label: "car",
        text: "car",
        ipa: "/kɑː/",
        audioSrc: "/audio/lessons/level-1/non-rhotic-r/car.mp3",
        caption: "Long open vowel. No final R.",
        rhythm: "KAA",
      },
      {
        label: "bird",
        text: "bird",
        ipa: "/bɜːd/",
        audioSrc: "/audio/lessons/level-1/non-rhotic-r/bird.mp3",
        caption: "Central vowel, then a clean D.",
        rhythm: "BERRD",
      },
      {
        label: "far away",
        text: "far away",
        ipa: "/fɑːr əˈweɪ/",
        audioSrc: "/audio/lessons/level-1/non-rhotic-r/far-away.mp3",
        caption: "Link R into the next vowel.",
        rhythm: "faa-ruh-WAY",
      },
    ],
    minimalPairs: [
      {
        left: { label: "RP", text: "car", ipa: "/kɑː/", rhythm: "KAA" },
        right: { label: "Strong R", text: "carrr", rhythm: "KARR" },
        note: "RP lets the vowel finish the word. Do not add a curled final R.",
      },
    ],
    drillSentences: [
      {
        text: "The car is parked near the garden.",
        ipa: "/ðə kɑːr ɪz pɑːkt nɪə ðə ˈɡɑːdn/",
        audioSrc: "/audio/lessons/level-1/non-rhotic-r/drill-01.mp3",
        caption: "Link car is. Drop R in garden.",
        rhythm: "the CAR-riz PARKED near the GAR-den",
        coachingCue: "Link only where the next word starts with a vowel.",
      },
      {
        text: "Her father works in a large firm.",
        ipa: "/hə ˈfɑːðə wɜːks ɪn ə lɑːdʒ fɜːm/",
        audioSrc: "/audio/lessons/level-1/non-rhotic-r/drill-02.mp3",
        caption: "Let father, works, large, firm stay non-rhotic.",
        rhythm: "her FA-ther WORKS in a LARGE FIRM",
        coachingCue: "Keep the stressed vowels steady and avoid adding final R.",
      },
    ],
    shadowingPassage: {
      title: "Commuting line",
      text: "After work, I park the car and walk through the garden.",
      audioSrc: "/audio/lessons/level-1/non-rhotic-r/passage.mp3",
      rhythm: ["AF-ter WORK", "I PARK the CAR", "and WALK through the GAR-den"],
      captionCues: ["Pause after work", "Lengthen car", "Soften garden"],
    },
    productionNotes: [
      "Record reference words with a calm southern British voice.",
      "Keep car and garden clearly non-rhotic.",
      "Include one linked example where R returns before a vowel.",
    ],
  },
  {
    id: "level-1-002",
    slug: "bath-vowel",
    level: 1,
    module: "RP foundations",
    order: 2,
    title: "BATH Vowel",
    shortTitle: "BATH vowel",
    focusSound: "Long /ɑː/ in BATH words",
    ipaFocus: "/ɑː/",
    summary: "Practise the long southern British vowel in bath, class, after, and dance.",
    introduction:
      "Many RP accents use a long open /ɑː/ in words such as bath and class. The sound is open and relaxed, closer to father than trap.",
    estimatedMinutes: 7,
    coachEmoji: "🎧",
    learningGoals: [
      "Separate TRAP /æ/ from BATH /ɑː/",
      "Open the jaw without over-darkening the vowel",
      "Use the long vowel inside short practical phrases",
    ],
    sections: [
      {
        heading: "Mouth shape",
        body:
          "Open the jaw slightly more than /æ/ and let the vowel feel longer. Avoid pushing it into a dramatic theatrical sound.",
        coachTip: "Aim for relaxed length, not extra volume.",
      },
    ],
    keyCues: [
      {
        label: "bath",
        text: "bath",
        ipa: "/bɑːθ/",
        audioSrc: "/audio/lessons/level-1/bath-vowel/bath.mp3",
        caption: "Long open vowel, soft TH.",
        rhythm: "BAATH",
      },
      {
        label: "class",
        text: "class",
        ipa: "/klɑːs/",
        audioSrc: "/audio/lessons/level-1/bath-vowel/class.mp3",
        caption: "Long vowel before S.",
        rhythm: "KLAAS",
      },
      {
        label: "after",
        text: "after",
        ipa: "/ˈɑːftə/",
        audioSrc: "/audio/lessons/level-1/bath-vowel/after.mp3",
        caption: "Stress first syllable. No final R.",
        rhythm: "AAF-tuh",
      },
    ],
    minimalPairs: [
      {
        left: { label: "TRAP", text: "cat", ipa: "/kæt/", rhythm: "kat" },
        right: { label: "BATH", text: "class", ipa: "/klɑːs/", rhythm: "KLAAS" },
        note: "BATH words are longer and more open than TRAP words.",
      },
    ],
    drillSentences: [
      {
        text: "After class, ask for a glass of water.",
        ipa: "/ˈɑːftə klɑːs ɑːsk fər ə ɡlɑːs əv ˈwɔːtə/",
        audioSrc: "/audio/lessons/level-1/bath-vowel/drill-01.mp3",
        caption: "After, class, ask, glass use the long vowel.",
        rhythm: "AAF-ter CLASS, ASK for a GLASS of WA-ter",
        coachingCue: "Lengthen the target words, but keep the sentence moving.",
      },
    ],
    shadowingPassage: {
      title: "Classroom line",
      text: "After class, I asked for the last glass on the table.",
      audioSrc: "/audio/lessons/level-1/bath-vowel/passage.mp3",
      rhythm: ["AF-ter CLASS", "I ASKED for the LAST GLASS", "on the TA-ble"],
      captionCues: ["Hold the BATH words", "Final consonants stay clean"],
    },
    productionNotes: [
      "Use a natural modern RP BATH vowel.",
      "Avoid exaggerated aristocratic length.",
      "Record contrast examples with TRAP words.",
    ],
  },
  {
    id: "level-1-003",
    slug: "schwa-and-weak-forms",
    level: 1,
    module: "Rhythm and reduction",
    order: 3,
    title: "Schwa and Weak Forms",
    shortTitle: "Schwa",
    focusSound: "Reduced unstressed vowels",
    ipaFocus: "/ə/",
    summary: "Use the relaxed schwa to make English rhythm lighter and more natural.",
    introduction:
      "RP rhythm depends on strong and weak syllables. Many small words and unstressed syllables reduce to schwa /ə/, the relaxed uh sound.",
    estimatedMinutes: 9,
    coachEmoji: "🙂",
    learningGoals: [
      "Identify unstressed syllables",
      "Reduce function words without mumbling",
      "Keep stressed words clear while weak words become lighter",
    ],
    sections: [
      {
        heading: "Strong versus weak",
        body:
          "Content words carry the beat. Small grammar words like to, for, a, and the often become lighter between beats.",
        coachTip: "Do not give every word equal weight.",
      },
    ],
    keyCues: [
      {
        label: "a cup of tea",
        text: "a cup of tea",
        ipa: "/ə ˌkʌp əv ˈtiː/",
        audioSrc: "/audio/lessons/level-1/schwa-and-weak-forms/a-cup-of-tea.mp3",
        caption: "a and of reduce.",
        rhythm: "a CUP of TEA",
      },
      {
        label: "for a minute",
        text: "for a minute",
        ipa: "/fər ə ˈmɪnɪt/",
        audioSrc: "/audio/lessons/level-1/schwa-and-weak-forms/for-a-minute.mp3",
        caption: "for a becomes light.",
        rhythm: "for a MIN-it",
      },
    ],
    minimalPairs: [],
    drillSentences: [
      {
        text: "I need a cup of tea before the meeting.",
        ipa: "/aɪ niːd ə ˌkʌp əv ˈtiː bɪˌfɔː ðə ˈmiːtɪŋ/",
        audioSrc: "/audio/lessons/level-1/schwa-and-weak-forms/drill-01.mp3",
        caption: "Reduce a, of, and the.",
        rhythm: "I NEED a CUP of TEA before the MEE-ting",
        coachingCue: "Keep need, cup, tea, meeting strong.",
      },
    ],
    shadowingPassage: {
      title: "Office line",
      text: "I need a cup of tea before the meeting starts.",
      audioSrc: "/audio/lessons/level-1/schwa-and-weak-forms/passage.mp3",
      rhythm: ["I NEED", "a CUP of TEA", "before the MEE-ting STARTS"],
      captionCues: ["Light grammar words", "Strong content beats"],
    },
    productionNotes: [
      "Record function words naturally reduced, not swallowed.",
      "Keep stressed words crisp for student imitation.",
    ],
  },
  {
    id: "level-1-004",
    slug: "clear-final-consonants",
    level: 1,
    module: "Clarity foundations",
    order: 4,
    title: "Clear Final Consonants",
    shortTitle: "Final consonants",
    focusSound: "Word endings",
    ipaFocus: "/t/ /d/ /k/ /s/",
    summary: "Finish words cleanly without adding an extra vowel after the final consonant.",
    introduction:
      "Clear final consonants make speech easier to understand. The goal is not to over-pronounce endings, but to finish them without adding a small extra vowel.",
    estimatedMinutes: 8,
    coachEmoji: "✅",
    learningGoals: [
      "Close final consonants cleanly",
      "Avoid adding an extra uh after word endings",
      "Practise endings inside connected sentences",
    ],
    sections: [
      {
        heading: "The common trap",
        body:
          "Words such as work, kept, asked, and good should not become work-uh, kept-uh, asked-uh, or good-uh.",
        coachTip: "Make the ending small but complete.",
      },
    ],
    keyCues: [
      {
        label: "work",
        text: "work",
        ipa: "/wɜːk/",
        audioSrc: "/audio/lessons/level-1/clear-final-consonants/work.mp3",
        caption: "Close K. No extra vowel.",
        rhythm: "WORK",
      },
      {
        label: "asked",
        text: "asked",
        ipa: "/ɑːskt/",
        audioSrc: "/audio/lessons/level-1/clear-final-consonants/asked.mp3",
        caption: "Finish the cluster cleanly.",
        rhythm: "AASKT",
      },
    ],
    minimalPairs: [
      {
        left: { label: "Clean", text: "work", ipa: "/wɜːk/" },
        right: { label: "Extra vowel", text: "work-uh" },
        note: "The clean version ends at K. The jaw does not reopen.",
      },
    ],
    drillSentences: [
      {
        text: "I asked Mark to check the work.",
        ipa: "/aɪ ɑːskt mɑːk tə tʃek ðə wɜːk/",
        audioSrc: "/audio/lessons/level-1/clear-final-consonants/drill-01.mp3",
        caption: "Asked, Mark, check, work end cleanly.",
        rhythm: "I ASKED MARK to CHECK the WORK",
        coachingCue: "Touch each final consonant, then move on.",
      },
    ],
    shadowingPassage: {
      title: "Work update",
      text: "I asked Mark to check the work before lunch.",
      audioSrc: "/audio/lessons/level-1/clear-final-consonants/passage.mp3",
      rhythm: ["I ASKED MARK", "to CHECK the WORK", "before LUNCH"],
      captionCues: ["No extra vowels", "Small clean endings"],
    },
    productionNotes: [
      "Record final stops with natural release.",
      "Avoid adding artificial aspiration to every final consonant.",
    ],
  },
  {
    id: "level-1-005",
    slug: "v-and-w",
    level: 1,
    module: "Indian English transfer points",
    order: 5,
    title: "V and W Contrast",
    shortTitle: "V / W",
    focusSound: "Lip-teeth V versus rounded W",
    ipaFocus: "/v/ /w/",
    summary: "Separate V and W clearly in words such as vest, west, vine, and wine.",
    introduction:
      "V uses the top teeth against the lower lip. W begins with rounded lips and no teeth contact. Keeping these separate greatly improves clarity.",
    estimatedMinutes: 8,
    coachEmoji: "👄",
    learningGoals: [
      "Feel the physical difference between V and W",
      "Hear and produce minimal pairs",
      "Use V/W contrasts in natural sentences",
    ],
    sections: [
      {
        heading: "Two different starts",
        body:
          "For V, gently touch teeth to lower lip and add voice. For W, round both lips and glide into the vowel.",
        coachTip: "If your teeth touch for W, reset and round the lips instead.",
      },
    ],
    keyCues: [
      {
        label: "vest",
        text: "vest",
        ipa: "/vest/",
        audioSrc: "/audio/lessons/level-1/v-and-w/vest.mp3",
        caption: "Teeth touch lower lip.",
        rhythm: "VEST",
      },
      {
        label: "west",
        text: "west",
        ipa: "/west/",
        audioSrc: "/audio/lessons/level-1/v-and-w/west.mp3",
        caption: "Rounded lips. No teeth.",
        rhythm: "WEST",
      },
    ],
    minimalPairs: [
      {
        left: { label: "V", text: "vine", ipa: "/vaɪn/" },
        right: { label: "W", text: "wine", ipa: "/waɪn/" },
        note: "The vowel is the same. Only the starting mouth position changes.",
      },
    ],
    drillSentences: [
      {
        text: "We visited the village on Wednesday.",
        ipa: "/wi ˈvɪzɪtɪd ðə ˈvɪlɪdʒ ɒn ˈwenzdeɪ/",
        audioSrc: "/audio/lessons/level-1/v-and-w/drill-01.mp3",
        caption: "Alternate W and V starts.",
        rhythm: "WE VIS-it-ed the VIL-lage on WED-nes-day",
        coachingCue: "Reset the lips before each target word.",
      },
    ],
    shadowingPassage: {
      title: "Travel line",
      text: "We visited a village west of the river.",
      audioSrc: "/audio/lessons/level-1/v-and-w/passage.mp3",
      rhythm: ["WE VIS-it-ed", "a VIL-lage WEST", "of the RIV-er"],
      captionCues: ["W is rounded", "V uses teeth and lip"],
    },
    productionNotes: [
      "Record minimal pairs slowly first, then naturally.",
      "Make V voiced but not overly buzzy.",
    ],
  },
  {
    id: "level-1-006",
    slug: "th-sounds",
    level: 1,
    module: "Indian English transfer points",
    order: 6,
    title: "TH Sounds",
    shortTitle: "TH sounds",
    focusSound: "Voiceless and voiced TH",
    ipaFocus: "/θ/ /ð/",
    summary: "Practise thin and this without replacing TH with T, D, S, or Z.",
    introduction:
      "English TH sounds are dental fricatives. The tongue comes lightly near the teeth and air passes through. The sound should be gentle, not heavy.",
    estimatedMinutes: 9,
    coachEmoji: "🪄",
    learningGoals: [
      "Produce voiceless /θ/ in think and bath",
      "Produce voiced /ð/ in this and mother",
      "Keep TH light inside phrases",
    ],
    sections: [
      {
        heading: "Light contact",
        body:
          "Place the tongue gently near or just between the teeth. Let air pass through. Do not make a hard T or D stop.",
        coachTip: "Gentle friction is enough. Avoid force.",
      },
    ],
    keyCues: [
      {
        label: "think",
        text: "think",
        ipa: "/θɪŋk/",
        audioSrc: "/audio/lessons/level-1/th-sounds/think.mp3",
        caption: "Voiceless TH, then short I.",
        rhythm: "THINK",
      },
      {
        label: "this",
        text: "this",
        ipa: "/ðɪs/",
        audioSrc: "/audio/lessons/level-1/th-sounds/this.mp3",
        caption: "Voiced TH. Feel vibration.",
        rhythm: "THIS",
      },
    ],
    minimalPairs: [
      {
        left: { label: "TH", text: "thin", ipa: "/θɪn/" },
        right: { label: "T", text: "tin", ipa: "/tɪn/" },
        note: "Thin has airflow. Tin has a stopped T.",
      },
    ],
    drillSentences: [
      {
        text: "I think this is the third thing.",
        ipa: "/aɪ θɪŋk ðɪs ɪz ðə θɜːd θɪŋ/",
        audioSrc: "/audio/lessons/level-1/th-sounds/drill-01.mp3",
        caption: "Alternate voiced and voiceless TH.",
        rhythm: "I THINK THIS is the THIRD THING",
        coachingCue: "Keep each TH light and quick.",
      },
    ],
    shadowingPassage: {
      title: "Thought line",
      text: "I think this is the third thing we should try.",
      audioSrc: "/audio/lessons/level-1/th-sounds/passage.mp3",
      rhythm: ["I THINK THIS", "is the THIRD THING", "we should TRY"],
      captionCues: ["Voiced this/the", "Voiceless think/third/thing"],
    },
    productionNotes: [
      "Record TH with gentle, natural friction.",
      "Include both initial and final TH examples.",
    ],
  },
  {
    id: "level-1-007",
    slug: "sentence-stress",
    level: 1,
    module: "Rhythm and intonation",
    order: 7,
    title: "Sentence Stress",
    shortTitle: "Stress beats",
    focusSound: "Strong content words",
    ipaFocus: "stress",
    summary: "Find the important beats in a sentence so speech sounds less flat.",
    introduction:
      "English rhythm is stress-timed. Important words take clear beats, while small words become lighter. This creates the rhythm learners often describe as the accent's music.",
    estimatedMinutes: 10,
    coachEmoji: "🥁",
    learningGoals: [
      "Mark the main beats in a phrase",
      "Reduce small words between beats",
      "Use stress to make meaning clearer",
    ],
    sections: [
      {
        heading: "Beat words",
        body:
          "Nouns, main verbs, adjectives, and contrast words usually carry stress. Articles, prepositions, and auxiliaries are often lighter.",
        coachTip: "Clap only the important words, then speak the sentence on those beats.",
      },
    ],
    keyCues: [
      {
        label: "need help",
        text: "I need some help.",
        ipa: "/aɪ niːd səm help/",
        audioSrc: "/audio/lessons/level-1/sentence-stress/need-help.mp3",
        caption: "Need and help carry the beats.",
        rhythm: "I NEED some HELP",
      },
    ],
    minimalPairs: [],
    drillSentences: [
      {
        text: "I can send the report tomorrow.",
        ipa: "/aɪ kən send ðə rɪˈpɔːt təˈmɒrəʊ/",
        audioSrc: "/audio/lessons/level-1/sentence-stress/drill-01.mp3",
        caption: "Send, report, tomorrow carry the message.",
        rhythm: "I can SEND the re-PORT to-MOR-row",
        coachingCue: "Let can and the become lighter.",
      },
    ],
    shadowingPassage: {
      title: "Work promise",
      text: "I can send the report tomorrow, but I need the figures today.",
      audioSrc: "/audio/lessons/level-1/sentence-stress/passage.mp3",
      rhythm: ["I can SEND", "the re-PORT to-MOR-row", "but I NEED the FIG-ures to-DAY"],
      captionCues: ["Main beats carry meaning", "But introduces contrast"],
    },
    productionNotes: [
      "Record with natural stress contrast, not a chant.",
      "Leave tiny pauses at phrase boundaries.",
    ],
  },
  {
    id: "level-1-008",
    slug: "pausing-and-thought-groups",
    level: 1,
    module: "Rhythm and intonation",
    order: 8,
    title: "Pausing and Thought Groups",
    shortTitle: "Pausing",
    focusSound: "Phrase boundaries",
    ipaFocus: "pauses",
    summary: "Learn where to pause so longer sentences sound controlled and natural.",
    introduction:
      "Clear speech is not continuous speed. RP delivery often uses small pauses at meaning boundaries, then moves smoothly inside each phrase.",
    estimatedMinutes: 9,
    coachEmoji: "⏸️",
    learningGoals: [
      "Break long sentences into thought groups",
      "Pause without losing rhythm",
      "Avoid stopping after every word",
    ],
    sections: [
      {
        heading: "Pause for meaning",
        body:
          "Pause after a complete idea, before contrast words, and around inserted details. Keep related words together.",
        coachTip: "Draw slashes where you can breathe: one slash for short, two for long.",
      },
    ],
    keyCues: [
      {
        label: "meeting update",
        text: "Before the meeting, I checked the numbers.",
        ipa: "/bɪˌfɔː ðə ˈmiːtɪŋ aɪ tʃekt ðə ˈnʌmbəz/",
        audioSrc: "/audio/lessons/level-1/pausing-and-thought-groups/meeting-update.mp3",
        caption: "Short pause after meeting.",
        rhythm: "before the MEE-ting / I CHECKED the NUM-bers",
        pauseAfterMs: 350,
      },
    ],
    minimalPairs: [],
    drillSentences: [
      {
        text: "If you have a moment, could you check this for me?",
        ipa: "/ɪf ju həv ə ˈməʊmənt kəd ju tʃek ðɪs fə miː/",
        audioSrc: "/audio/lessons/level-1/pausing-and-thought-groups/drill-01.mp3",
        caption: "Pause after moment. Keep could you together.",
        rhythm: "if you have a MO-ment / could you CHECK this for ME",
        coachingCue: "Use the pause to reset, not to break the politeness.",
      },
    ],
    shadowingPassage: {
      title: "Polite request",
      text: "If you have a moment, could you check this for me before lunch?",
      audioSrc: "/audio/lessons/level-1/pausing-and-thought-groups/passage.mp3",
      rhythm: ["if you have a MO-ment", "could you CHECK this for ME", "before LUNCH"],
      captionCues: ["Pause after the condition", "Keep the request smooth"],
    },
    productionNotes: [
      "Record with audible but short pauses.",
      "Do not make the delivery sound like a public speech.",
    ],
  },
  {
    id: "level-1-009",
    slug: "linking-r-and-intrusive-r",
    level: 1,
    module: "Connected speech",
    order: 9,
    title: "Linking R",
    shortTitle: "Linking R",
    focusSound: "R before a following vowel",
    ipaFocus: "/r/",
    summary: "Use a light R bridge in phrases like far away and later on.",
    introduction:
      "Even though RP often drops final written R, that R can reappear before a vowel. Some speakers also use intrusive R after certain vowels to keep speech flowing.",
    estimatedMinutes: 8,
    coachEmoji: "🔗",
    learningGoals: [
      "Use linking R after written R",
      "Recognise intrusive R as a connected-speech feature",
      "Keep the linking R light",
    ],
    sections: [
      {
        heading: "A small bridge",
        body:
          "In far away, the written R returns because away starts with a vowel. The R connects the words smoothly.",
        coachTip: "Make the R shorter than the vowel around it.",
      },
    ],
    keyCues: [
      {
        label: "far away",
        text: "far away",
        ipa: "/fɑːr əˈweɪ/",
        audioSrc: "/audio/lessons/level-1/linking-r-and-intrusive-r/far-away.mp3",
        caption: "R links into away.",
        rhythm: "faa-ruh-WAY",
      },
      {
        label: "later on",
        text: "later on",
        ipa: "/ˈleɪtər ɒn/",
        audioSrc: "/audio/lessons/level-1/linking-r-and-intrusive-r/later-on.mp3",
        caption: "R links into on.",
        rhythm: "LAY-tuh-ron",
      },
    ],
    minimalPairs: [],
    drillSentences: [
      {
        text: "The car is far away, but we can get there later on.",
        ipa: "/ðə kɑːr ɪz fɑːr əˈweɪ bət wi kən ɡet ðeə ˈleɪtər ɒn/",
        audioSrc: "/audio/lessons/level-1/linking-r-and-intrusive-r/drill-01.mp3",
        caption: "Link car is, far away, later on.",
        rhythm: "the CAR-riz FAR-ruh-WAY / but we can GET there LAY-tuh-ron",
        coachingCue: "Use linking R only before vowels.",
      },
    ],
    shadowingPassage: {
      title: "Travel plan",
      text: "The car is far away, so we will leave later on.",
      audioSrc: "/audio/lessons/level-1/linking-r-and-intrusive-r/passage.mp3",
      rhythm: ["the CAR-riz FAR-ruh-WAY", "so we will LEAVE", "LAY-tuh-ron"],
      captionCues: ["Three light R bridges", "No strong final R elsewhere"],
    },
    productionNotes: [
      "Keep linking R natural and brief.",
      "Do not over-teach intrusive R in MVP feedback; present it as awareness.",
    ],
  },
  {
    id: "level-1-010",
    slug: "polite-intonation",
    level: 1,
    module: "Rhythm and intonation",
    order: 10,
    title: "Polite Intonation",
    shortTitle: "Polite intonation",
    focusSound: "Rise-fall and gentle rises",
    ipaFocus: "intonation",
    summary: "Make requests sound clear, warm, and natural with controlled pitch movement.",
    introduction:
      "Intonation changes how a sentence feels. In polite requests, British English often uses a gentle rise or rise-fall instead of a flat command tone.",
    estimatedMinutes: 10,
    coachEmoji: "💬",
    learningGoals: [
      "Avoid flat request intonation",
      "Use pitch movement on polite phrases",
      "Stress the action word without sounding abrupt",
    ],
    sections: [
      {
        heading: "Request shape",
        body:
          "Could you check this? usually rises gently toward check or this, then settles. The voice should sound open, not demanding.",
        coachTip: "Smile slightly and let the pitch move, but keep the words clear.",
      },
    ],
    keyCues: [
      {
        label: "could you",
        text: "Could you check this?",
        ipa: "/kəd ju tʃek ðɪs/",
        audioSrc: "/audio/lessons/level-1/polite-intonation/could-you-check-this.mp3",
        caption: "Gentle rise through the request.",
        rhythm: "could you CHECK this",
      },
    ],
    minimalPairs: [],
    drillSentences: [
      {
        text: "Could you send it to me when you have a moment?",
        ipa: "/kəd ju send ɪt tə mi wen ju həv ə ˈməʊmənt/",
        audioSrc: "/audio/lessons/level-1/polite-intonation/drill-01.mp3",
        caption: "Stress send and moment. Keep the request warm.",
        rhythm: "could you SEND it to ME / when you have a MO-ment",
        coachingCue: "Do not flatten could you into a command.",
      },
    ],
    shadowingPassage: {
      title: "Request line",
      text: "Could you send it to me when you have a moment?",
      audioSrc: "/audio/lessons/level-1/polite-intonation/passage.mp3",
      rhythm: ["could you SEND it to ME", "when you have a MO-ment"],
      captionCues: ["Gentle request tone", "Small pause before when"],
    },
    productionNotes: [
      "Record two versions later: neutral and extra polite.",
      "Keep the model voice conversational.",
    ],
  },
  {
    id: "level-1-011",
    slug: "lot-thought-goat",
    level: 1,
    module: "Vowel shaping",
    order: 11,
    title: "LOT, THOUGHT, and GOAT",
    shortTitle: "Key vowels",
    focusSound: "Common RP vowel targets",
    ipaFocus: "/ɒ/ /ɔː/ /əʊ/",
    summary: "Build awareness of three high-impact RP vowel qualities.",
    introduction:
      "Some RP vowels differ strongly from many Indian English patterns. This lesson gives a gentle first pass at LOT, THOUGHT, and GOAT without overloading the learner.",
    estimatedMinutes: 10,
    coachEmoji: "🎯",
    learningGoals: [
      "Hear short LOT /ɒ/",
      "Hold THOUGHT /ɔː/",
      "Use the rounded GOAT diphthong /əʊ/",
    ],
    sections: [
      {
        heading: "Three targets",
        body:
          "LOT is short and open-rounded, THOUGHT is longer, and GOAT moves from a central start toward rounded lips.",
        coachTip: "Practise them separately before using them in one sentence.",
      },
    ],
    keyCues: [
      {
        label: "lot",
        text: "lot",
        ipa: "/lɒt/",
        audioSrc: "/audio/lessons/level-1/lot-thought-goat/lot.mp3",
        caption: "Short open rounded vowel.",
        rhythm: "LOT",
      },
      {
        label: "thought",
        text: "thought",
        ipa: "/θɔːt/",
        audioSrc: "/audio/lessons/level-1/lot-thought-goat/thought.mp3",
        caption: "Long rounded vowel.",
        rhythm: "THAWT",
      },
      {
        label: "goat",
        text: "goat",
        ipa: "/ɡəʊt/",
        audioSrc: "/audio/lessons/level-1/lot-thought-goat/goat.mp3",
        caption: "Glide toward rounded lips.",
        rhythm: "GOHT",
      },
    ],
    minimalPairs: [],
    drillSentences: [
      {
        text: "I thought the old shop was closed.",
        ipa: "/aɪ θɔːt ði əʊld ʃɒp wəz kləʊzd/",
        audioSrc: "/audio/lessons/level-1/lot-thought-goat/drill-01.mp3",
        caption: "Thought, old, shop, closed use different vowel targets.",
        rhythm: "I THOUGHT the OLD SHOP was CLOSED",
        coachingCue: "Do not make all rounded vowels the same length.",
      },
    ],
    shadowingPassage: {
      title: "Shop line",
      text: "I thought the old shop was closed, but it was not.",
      audioSrc: "/audio/lessons/level-1/lot-thought-goat/passage.mp3",
      rhythm: ["I THOUGHT", "the OLD SHOP was CLOSED", "but it was NOT"],
      captionCues: ["Long thought", "GOAT in old/closed", "Short LOT in not"],
    },
    productionNotes: [
      "Record with clear but natural vowel contrast.",
      "Avoid making GOAT sound like a pure long O.",
    ],
  },
  {
    id: "level-1-012",
    slug: "shadowing-mini-dialogue",
    level: 1,
    module: "Integrated practice",
    order: 12,
    title: "Shadowing Mini Dialogue",
    shortTitle: "Mini dialogue",
    focusSound: "Rhythm, pauses, and clarity",
    ipaFocus: "integration",
    summary: "Combine Level 1 patterns in a short practical conversation.",
    introduction:
      "Shadowing helps turn separate sounds into fluent speech. This lesson combines non-rhotic R, weak forms, pauses, stress, and polite intonation.",
    estimatedMinutes: 12,
    coachEmoji: "🌟",
    learningGoals: [
      "Shadow a short realistic dialogue",
      "Track rhythm and pauses",
      "Notice which Level 1 patterns need more review",
    ],
    sections: [
      {
        heading: "How to shadow",
        body:
          "Listen once, whisper with the audio once, then speak just after the audio. Keep the rhythm more important than perfect speed.",
        coachTip: "Shadow in chunks. Do not chase every word at once.",
      },
    ],
    keyCues: [
      {
        label: "polite opener",
        text: "Could you check this for me?",
        ipa: "/kəd ju tʃek ðɪs fə miː/",
        audioSrc: "/audio/lessons/level-1/shadowing-mini-dialogue/could-you-check-this.mp3",
        caption: "Weak could you, clear check.",
        rhythm: "could you CHECK this for ME",
      },
    ],
    minimalPairs: [],
    drillSentences: [
      {
        text: "Could you check this for me before the meeting starts?",
        ipa: "/kəd ju tʃek ðɪs fə mi bɪˌfɔː ðə ˈmiːtɪŋ stɑːts/",
        audioSrc: "/audio/lessons/level-1/shadowing-mini-dialogue/drill-01.mp3",
        caption: "Polite request, pause before before if needed.",
        rhythm: "could you CHECK this for ME / before the MEE-ting STARTS",
        coachingCue: "Keep the request smooth and the final consonants clean.",
      },
    ],
    shadowingPassage: {
      title: "Office dialogue",
      text:
        "A: Could you check this for me before the meeting starts? B: Of course. I can send the report later on.",
      audioSrc: "/audio/lessons/level-1/shadowing-mini-dialogue/passage.mp3",
      rhythm: [
        "could you CHECK this for ME",
        "before the MEE-ting STARTS",
        "of COURSE",
        "I can SEND the re-PORT LAY-tuh-ron",
      ],
      captionCues: [
        "Polite request intonation",
        "Clear final consonants",
        "Weak form: of",
        "Linking R in later on",
      ],
    },
    productionNotes: [
      "Record as a natural two-speaker or single-speaker dialogue.",
      "Keep it short enough for repeated shadowing.",
      "Use this as the Level 1 review lesson.",
    ],
  },
] satisfies Lesson[];

export const lessons = curriculumSchema.parse(rawLessons).sort((a, b) => a.order - b.order);

export function getAllLessons() {
  return lessons;
}

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getNextLesson(current: Lesson) {
  return lessons.find((lesson) => lesson.order === current.order + 1);
}

export function getPreviousLesson(current: Lesson) {
  return lessons.find((lesson) => lesson.order === current.order - 1);
}

export function getCurriculumModules() {
  return Array.from(new Set(lessons.map((lesson) => lesson.module)));
}
